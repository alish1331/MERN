import React, { useContext, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'

export const CreatePage = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const { request } = useHttp()
  const [link, setLink] = useState('')

  //Refreshes URL links filed after reload
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
    <div className="container">
      <div className="row">
        <div className="col s12 offset-s0" style={{ paddingTop: '2rem' }}>
          <div className="input-field">
            <input
              placeholder="Link to be shortened"
              id="link"
              type="text"
              value={link}
              onChange={e => setLink(e.target.value)}
              onKeyPress={pressHandler}
            />
            <label htmlFor="link">Paste your link</label>
          </div>
        </div>
      </div>
    </div>
  )
}

/* <button
className = "btn green darken-1"
onChange = { e => setLink(e.target.value) }
onClick = { pressHandler }
  >
  Shorten 
  </button>  
  */