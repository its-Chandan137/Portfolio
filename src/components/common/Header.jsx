import React from 'react'
import '../../styles/Header.scss'

export const Header = () => {
  return (
    <div className='container'>
        <div className="header">
            <a href="#" className="logo">Chandan Swarnakar</a>

            <nav className="navbar">
                <a href="#" className='active'>Home</a>
                <a href="#about">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </nav>

        </div>
    </div>
  )
}
