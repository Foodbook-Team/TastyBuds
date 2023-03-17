import React from 'react';
import { NavLink } from 'react-router-dom';

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Main menu
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/Page1"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Page1
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/Page2"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Page2
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/Page3"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Page3
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
