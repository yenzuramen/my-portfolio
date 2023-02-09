import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { About } from '../components/About'
import { Home } from '../components/Home'
import { Navbar } from '../components/layout/Navbar'
import { SkillsProjects } from '../components/SkillsProjects'


export const MainRouter = () => {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
            <Route path='/' element={<Navigate to='/home'/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/about-me' element={<About/>} />
            <Route path='/skills-projects' element={<SkillsProjects/>} />
            </Routes>
        </BrowserRouter>
    )
}