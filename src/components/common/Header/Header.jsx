import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  const location = useLocation();


  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' }, // Disabled link
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact'},
  ];

  const navThere = (to) => {
    if (location.pathname === to) {
      console.warn("Already on this page");
      return; 
    }
    window.location.href = to;
  };

  return (
    <div className='container'>
      <div className="header">
        <a onClick={() => navThere('/')} className="logo">Chandan Swarnakar</a>
        <nav className="navbar">
          {navItems.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.disabled ? null : item.to} // Set to null to disable navigation
              className={({ isActive }) => 
                `nav-item ${isActive ? 'active' : ''} ${item.disabled ? 'disabled' : ''}`.trim()
              }
              style={{ '--delay-index': index }}
              onClick={(e) => item.disabled && e.preventDefault()} // Prevent click if disabled
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};