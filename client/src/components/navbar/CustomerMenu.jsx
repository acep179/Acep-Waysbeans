import React from 'react'
import { Link } from 'react-router-dom'

import iconCart from "./../../assets/cart_icon.png"
import userPhoto from "./../../assets/user_photo.png"
import userIcon from "./../../assets/user_icon.png"
import logoutIcon from "./../../assets/logout_icon.png"

function CustomerMenu({ logout }) {
  return (
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
  )
}

export default CustomerMenu