import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import AdminMenu from './AdminMenu'
import CustomerMenu from './CustomerMenu'
import LogoutMenu from './LogoutMenu'

import logo from "../../assets/waysbean_logo.png"
import { UserContext } from '../../context/userContext'

function Navbar() {

  const [state, dispatch] = useContext(UserContext)
  let isLogin = state.isLogin
  let isAdmin = state.user.status === "admin" ? true : false

  const logout = () => {
    dispatch({
      type: 'LOGOUT'
    })
  }

  return (
    <nav className="shadow navbar navbar-expand-lg bg-white fixed-top">
      <div className="container-lg">
        <Link className="navbar-brand me-5" to="/">
          <img src={logo} style={{ height: 60 }} alt="logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon bg-pink"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          {isLogin ? (

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 position-relative ">
              {isAdmin ? (
                <AdminMenu logout={logout} />
              ) : (
                <CustomerMenu logout={logout} />
              )}
            </ul>

          ) : (
            <LogoutMenu />
          )}

        </div>
      </div >
    </nav >
  )
}

export default Navbar