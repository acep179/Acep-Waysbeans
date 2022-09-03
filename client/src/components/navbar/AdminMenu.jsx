import React from 'react'
import { Link } from 'react-router-dom'

import userPhoto from "./../../assets/user_photo.png"
import beansIcon from "./../../assets/beans_icon.png"
import logoutIcon from "./../../assets/logout_icon.png"

function AdminMenu({ logout }) {
  return (
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
  )
}

export default AdminMenu