import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from "../assets/waysbean_logo.png"
import iconCart from "./../assets/cart_icon.png"
import userPhoto from "./../assets/user_photo.png"
import userIcon from "./../assets/user_icon.png"
import beansIcon from "./../assets/beans_icon.png"
import logoutIcon from "./../assets/logout_icon.png"

function Navbar() {

  let [isLogin, setIsLogin] = useState(true)
  let [isAdmin] = useState(true)

  let logout = () => {
    setIsLogin(false)
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
                <li className="nav-item dropdown">
                  <div role="button" className="rounded-circle nav-photo ms-3" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundImage: `url(${userPhoto})` }}>
                  </div>
                  <div className="dropdown-menu">
                    <div className="menu-drop" style={{ width: 300 }}>
                      <div>
                        <Link to='/add-product' className="d-flex align-items-center p-3">
                          <img src={beansIcon} alt="profile icon" />
                          <p className="ms-3">Add Product</p>
                        </Link>
                        <Link to='/list-products' className="d-flex align-items-center p-3">
                          <img src={beansIcon} alt="profile icon" />
                          <p className="ms-3">List Products</p>
                        </Link>
                      </div>

                      <span className="d-flex align-items-center p-3">
                        <img src={logoutIcon} alt="logout icon" />
                        <p className="ms-3 cursor-pointer" onClick={logout}>Logout</p>
                      </span>

                    </div>
                  </div>
                </li>
              ) : (
                <div className="d-flex align-items-center">
                  <li className="nav-item cursor-pointer">
                    <Link className="position-relative" to="/cart">
                      <img src={iconCart} alt="cart" />
                      {/* {carts?.length === 0 ? <p></p> : <p className="cart-total">{carts?.length}</p>} */}
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <div role="button" className="rounded-circle nav-photo ms-3" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundImage: `url(${userPhoto})` }}>
                    </div>
                    <div className="dropdown-menu">


                      <div className="menu-drop">
                        <div>
                          <Link to='/profile' className="d-flex align-items-center p-3">
                            <img src={userIcon} alt="profile icon" />
                            <p className="ms-3">Profile</p>
                          </Link>
                        </div>
                        <span className="d-flex align-items-center p-3">
                          <img src={logoutIcon} alt="logout icon" />
                          <p className="ms-3 cursor-pointer" onClick={logout}>Logout</p>
                        </span>
                      </div>


                    </div>
                  </li>
                </div>
              )}

            </ul>

          ) : (

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

          )}
        </div>
      </div >
    </nav >
  )
}

export default Navbar