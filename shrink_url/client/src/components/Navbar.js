import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
// import M from 'materialize-css/dist/css/materialize.min.css'

export const Navbar = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)

  const logoutHandler = event => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }

  return (
    <>
      <nav>
        <div className="nav-wrapper blue-grey darken-4" style={{ padding: '0 2rem' }}>
          <a href="/" className='brand-logo'>CutLink</a>
          {/* <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}


          <ul className="right hide-on-med-and-down">
            <li><NavLink to="/create">Create</NavLink></li>
            <li><NavLink to="/links">Links</NavLink></li>
            <li><a href="/" onClick={logoutHandler}>Logout</a></li>
          </ul>
          {/* <i href="/" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></i> */}
          {/* <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/create">Create</NavLink></li>
            <li><NavLink to="/links">Links</NavLink></li>
            <li><a href="/" onClick={logoutHandler}>Logout</a></li>
          </ul> */}
        </div>
      </nav>

      {/* <ul className="sidenav" id="mobile-demo">
        <li><NavLink to="/create">Create</NavLink></li>
        <li><NavLink to="/links">Links</NavLink></li>
        <li><a href="/" onClick={logoutHandler}>Logout</a></li>
      </ul> */}
    </>
  )
}