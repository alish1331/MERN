import React, { useContext, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { AuthContext } from '../context/AuthContext'
// import ParticleComponent from '../components/ParticleComponent'

export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const { loading, request, error, clearError } = useHttp()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  //Refreshes email and password fileds after logout
  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form })
      message(data.message)
    } catch (e) { }
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form })
      message(data.message)
      auth.login(data.token, data.userId)
    } catch (e) { }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m10 l8 offset-m1 offset-l2">
          <h1>CutLink</h1>
          <h2>Simplify your links, store & track them</h2>
          <div className="card teal lighten-1">
            <div className="card-content white-text">
              <span className="card-title">Authorization</span>
              <div>

                <div className="input-field">
                  <input
                    placeholder="Your email"
                    id="email"
                    type="text"
                    name="email"
                    className="yellow-input"
                    value={form.email}
                    onChange={changeHandler}
                  />
                  <label htmlFor="email">Email</label>
                </div>

                <div className="input-field">
                  <input
                    placeholder="Your password"
                    id="password"
                    type="password"
                    name="password"
                    className="yellow-input"
                    value={form.password}
                    onChange={changeHandler}
                  />
                  <label htmlFor="email">Password</label>
                </div>

              </div>
            </div>
            <div className="card-action">
              <button
                className="btn yellow darken-4"
                style={{ marginRight: 10 }}
                disabled={loading}
                onClick={loginHandler}
              >
                Login
            </button>
              <button
                className="btn grey lighten-1 black-text"
                disabled={loading}
                onClick={registerHandler}
              >
                Sign Up
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}