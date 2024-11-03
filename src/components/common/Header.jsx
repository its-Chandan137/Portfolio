import React from 'react'
import '../../styles/Header.scss'

export const Header = () => {
  return (
    <div>
        <div className="header">
            <a href="#" className="logo">Little Demon</a>

            <nav className="navbar">
                <a href="#" className='active'>Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </nav>

        </div>
    </div>
  )
}
