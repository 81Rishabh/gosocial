import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {MdNotificationsNone} from 'react-icons/md';
import {BiMessageSquareDots} from 'react-icons/bi';
import {IoMdLogOut} from 'react-icons/io';

import { logout } from "../actions/auth";
import {FiSearch} from 'react-icons/fi';
import "../styles/navbar.css";
import Avatar from "./Avatar";

function NavBar() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  function Logout() {
    localStorage.removeItem("token");
    dispatch(logout());
  }

  // function handleUserEamilFormat() {
  //   let email = auth.user.email;
  //   let index = email.indexOf('@');
  //   email = email.slice(0 , index);
  //   return email;
  // }
  return (
    <header>
      <nav className="navbar-nav flex">

        <div className="navbar-logo">
          <NavLink to="/">gosocial</NavLink>
        </div>

        <div className="header-search-input">
          <span className="search-icon">
          <FiSearch />
        </span>
          <input
            type="text"
            placeholder="Search For createors , inspirations..."
          />
        </div>

        <div className="navbar-links">
          <ul className="flex">
            {!auth.isLoggedin ? (
              <React.Fragment>
                <li>
                  <NavLink to="/SignIn">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/SignUp">Register</NavLink>
                </li>
              </React.Fragment>
            ) : (
              <React.Fragment>
              <li className="user-email">
                <NavLink to={`/profile/${auth.user._id}`}>
                  <Avatar img_url={auth.user.avatar} size="25" />
                  </NavLink>
                </li>
                <li>
                  <BiMessageSquareDots className="icon"/>
                </li> 
                <li>
                  <MdNotificationsNone className='icon' />
                </li>
                <li>
                  <NavLink to="/SignIn" onClick={Logout}>
                    <IoMdLogOut className="icon"/>
                  </NavLink>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
