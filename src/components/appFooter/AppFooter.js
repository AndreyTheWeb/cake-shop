import { Link, NavLink } from 'react-router-dom';

import './appFooter.scss';
import '../appHeader/appHeader.scss';

import logo from '../../resourses/img/main-logo.png';
import devider from '../../resourses/img/header-text-devider.png';


const AppFooter = () => {
  return (
    <footer>
      <nav>
        <ul className="header__list">
          <li className="header__list_logo">
            <NavLink
              style={({ isActive }) => ({ color: isActive ? '#9f0013' : 'inherit' })}
              to="/">
              <img src={logo} alt="Logo" />
              <h1>Cake shop</h1>
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? '#9f0013' : 'inherit' })}
              to="/ourCakes">
              Наши кексы
            </NavLink>
          </li>
          <li>
            <a href="#">
              О нас
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default AppFooter;