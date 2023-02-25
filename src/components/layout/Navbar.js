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
                    <a name='home-link' href='#home'>Home</a>
                </li>
                <li className={activeItem !== 'about-me-link' ? '' : 'active-shadow'} onClick={handleNavClick}>
                    <a name='about-me-link' href='#aboutMe'>About me </a>
                </li>
                <li className={activeItem !== 'skills-projects-link' ? '' : 'active-shadow'} onClick={handleNavClick}>
                    <a name='skills-projects-link' href='#skills'>Skills</a>
                </li>
                <li className={activeItem !== 'skills-link' ? '' : 'active-shadow'} onClick={handleNavClick}>
                    <a name='projects-link' href='#projects'>Projects</a>
                </li>


            </ul>
        </div>


    )
}
