import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className='div-nav'>
            <ul className='nav-menu'>
                <li>
                   <div> <NavLink to='/home' className={({ isActive }) => isActive ? 'active-shadow' : ''}>Home</NavLink>
                    </div>
                </li>
                <li>
                <div>  <NavLink to='/about-me' className={({ isActive }) => isActive ? 'active-shadow' : ''}>About me </NavLink></div>
                </li>
                <li>
                    <NavLink to='/skills-projects' className={({ isActive }) => isActive ? 'active-shadow' : ''}>Skills and Projects</NavLink>
                </li>
            </ul>
        </div>


    )
}
