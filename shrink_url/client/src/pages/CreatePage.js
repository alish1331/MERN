import React, { useContext, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'

export const CreatePage = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const { request } = useHttp()
  const [link, setLink] = useState('')

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const pressHandler = async event => {
    if (event.key === 'Enter') {
      try {
        const data = await request('/api/link/generate', 'POST', { from: link }, {
          Authorization: `Bearer ${auth.token}`
        })
        history.push(`/detail/${data.link._id}`)
      } catch (e) { }
    }
  }

  return (
    <div className="row">
      <div className="col s12">
        <h3>Create Short Link</h3>
        <div className="card white darken-1">
          <div className="card-content white-text">
            <div className="input-field">
              <i className="material-icons prefix">link</i>
              <input
                placeholder="Paste your link here"
                id="link"
                type="text"
                value={link}
                onChange={e => setLink(e.target.value)}
                onKeyPress={pressHandler}
              />

              <label htmlFor="link">Your link:</label>
            </div>
            <button className="btn disabled waves-effect waves-light"
              type="submit"
              name="action"
              onClick={pressHandler}>
              Submit
              <i className="material-icons right">send</i>
            </button>
            <p style={{ color: "red", paddingTop: "10px"}}>The 'Submit' button is temporarily disabled, use Return/Enter</p>
          </div>
        </div>
      </div>
    </div>

  )
}