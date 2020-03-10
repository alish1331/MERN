import React, { useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';

export const AuthPage = () => {
  const message = useMessage()
  const { loading, request, error, clearError } = useHttp()
  const [form, setForm] = useState({
    email: '', password: ''
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  const changeHandler = event => {
    // spread operator:
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form })
      console.log('Data', data)
    } catch (e) {

    }
  }
  // UI
  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h2>URL shortener</h2>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Authorization</span>
          </div>

          <div className="input-field">
            <input
              id="email"
              type="email"
              className="yellow-input"
              onChange={changeHandler}
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="input-field">
            <input
              id="password"
              type="password"
              className="yellow-input"
              onChange={changeHandler}
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="card-action">
            <button
              className="btn yellow darken-4"
              disabled={loading}
            >
              Login
            </button>
            <button
              className="btn grey lighten-1 black-text"
              onClick={registerHandler}
              disabled={loading}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}