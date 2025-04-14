import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About', disabled: true }, // Disabled link
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact'},
  ];

  return (
    <div className='container'>
      <div className="header">
        <a href="/" className="logo">Chandan Swarnakar</a>
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