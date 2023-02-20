import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

    const [activeItem, setActiveItem] = useState(null);

    const handleNavClick = (e) => {
        setActiveItem(e.target.name)
    }

    return (
        <div className='div-nav'>
            <ul className='nav-menu'>
                <li className={activeItem !== 'home-link' ? '' : 'active-shadow'} onClick={handleNavClick}>
                    <NavLink name='home-link' to='/home'>Home</NavLink>
                </li>
                <li className={activeItem !== 'about-me-link' ? '' : 'active-shadow'} onClick={handleNavClick}>
                    <NavLink name='about-me-link' to='/about-me'>About me </NavLink>
                </li>
                <li className={activeItem !== 'skills-projects-link' ? '' : 'active-shadow'} onClick={handleNavClick}>
                    <NavLink name='skills-projects-link' to='/skills-projects'>Skills and Projects</NavLink>
                </li>
            </ul>
        </div>


    )
}
