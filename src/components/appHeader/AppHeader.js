import React from "react";
import { Link, NavLink } from 'react-router-dom';

import './appHeader.scss';
import logo from '../../resourses/img/main-logo.png';

const AppHeader = () => {
  return (
    <header className="header" >
      <nav>
        <ul className="header__list">
          <li className="header__list_logo">
            <NavLink
              style={({ isActive }) => ({ color: isActive ? '#9f0013' : 'inherit' })}
              to="/">
              <img src={logo} alt="Logo" />
              <h1>VpCakes shop</h1>
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? '#9f0013' : 'inherit' })}
              to="/ourCakes">
              Наши предложения
            </NavLink>
          </li>
          <li>
          <NavLink
              style={({ isActive }) => ({ color: isActive ? '#9f0013' : 'inherit' })}
              to="/aboutUs">
              О нас
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader;