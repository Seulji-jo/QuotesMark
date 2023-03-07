import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from '../assets/Logo.svg';

function Header() {
  let activeClassName = 'underline';
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          <li>
            <NavLink
              to="kr"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              KOR
            </NavLink>
          </li>
          <li>
            <NavLink
              to="en"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              ENG
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
