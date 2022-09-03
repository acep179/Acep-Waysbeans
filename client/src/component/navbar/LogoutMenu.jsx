import React from 'react'

function LogoutMenu() {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <button id="loginButton" type="button" className="btn btn-reverse-red px-4 py-1" data-bs-toggle="modal" data-bs-target="#login">
          Login
        </button>
      </li>
      <li className="nav-item">
        <button type="button" className="btn btn-red ms-3 px-4 py-1" data-bs-toggle="modal" data-bs-target="#register">
          Register
        </button>
      </li>
    </ul>
  )
}

export default LogoutMenu