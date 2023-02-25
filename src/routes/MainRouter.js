import React, { useRef } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../components/Home'
import { Navbar } from '../components/layout/Navbar'
// import { SkillsProjects } from '../components/SkillsProjects'


export const MainRouter = () => {

    const aboutMeRef = useRef(null);

    return (

        <BrowserRouter>

            <Navbar  />
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/porfolio' element={<Home/>} />
                {/* <Route path='/about-me' element={<About />} /> */}
                {/* <Route path='/skills-projects' element={<SkillsProjects/>} /> */}
            </Routes>

        </BrowserRouter>
    )
}
