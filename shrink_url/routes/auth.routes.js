const { Router } = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
const User = require('../models/User')
const router = Router()


// /api/auth/register
router.post(
  '/register',
  [
    check('email', 'Email is not correct').isEmail(),
    check('password', 'Password must have minimum 6 characters')
      .isLength({ min: 6 })
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Incorrect credentials'
        })
      }

      const { email, password } = req.body

      const candidate = await User.findOne({ email })

      if (candidate) {
        return res.status(400).json({ message: 'This user is already registered' })
      }

      const hashedPassword = await bcrypt.hash(password, 12)
      const user = new User({ email, password: hashedPassword })

      await user.save()

      res.status(201).json({ message: 'Created user' })

    } catch (e) {
      res.status(500).json({ message: 'Something is wrong, please try again' })
    }
  })

// /api/auth/login
router.post(
  '/login',
  [
    check('email', 'Enter the correct email').normalizeEmail().isEmail(),
    check('password', 'Enter the password').exists()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Something is wrong, please try again'
        })
      }

      const { email, password } = req.body

      const user = await User.findOne({ email })

      if (!user) {
        return res.status(400).json({ message: 'User has not been found' })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({ message: 'Password is wrong, please try again' })
      }

      const token = jwt.sign(
        { userId: user.id },
        config.get('jwtSecret'),
        { expiresIn: '1h' }
      )

      res.json({ token, userId: user.id })

    } catch (e) {
      res.status(500).json({ message: 'Something is wrong, please try again' })
    }
  })

module.exports = router