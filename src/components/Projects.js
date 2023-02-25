import React, { useEffect, useState } from 'react'
import { ProjectItems } from '../jsons/Projects'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion'

export const Projects = () => {

  const [projectIndex, setProjectIndex] = useState(0)
  const [currentProject, setCurrentProject] = useState(ProjectItems[projectIndex]);
  const [xAnimation, setXAnimation] = useState('100vh')

  const swipeLeft = () => {
    let newIndex = projectIndex - 1;
    if (newIndex < 0) {
      newIndex = ProjectItems.length - 1
    }
    setXAnimation('-100vw')
    setProjectIndex(newIndex)
  }

  const swipeRight = () => {
    let newIndex = projectIndex + 1;
    if (newIndex > (ProjectItems.length - 1)) {
      newIndex = 0
    }
    setXAnimation('100vw')
    setProjectIndex(newIndex)
  }

  useEffect(() => {
    setCurrentProject(ProjectItems[projectIndex])
  }, [projectIndex])

  return (
    <>
      <div className="projects-title">PROJECTS </div>
      <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="projects-txt">  These some are projects I've done ^^ </motion.div>
      <motion.div className='swipe-btn-cont'
        initial={{ opacity: 0 , y:'10vh'}}
        whileInView={{ opacity: 1,y :0}}
        transition={{ type:'spring', duration: 1 }}>
        <motion.div className='project-card' key={currentProject.title}
          initial={{ opacity: 0, x: xAnimation }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 50, duration: 1 }}>

          <div className='project-img'><img src={currentProject.image} alt={currentProject.title} /></div>
          <div className='project-desc'>
            <div className='project-card-title'>{currentProject.title}</div>
            <p className='project-desc-text'>{currentProject.desc}</p>
            <div className='project-skills'>
              {currentProject.skills.map((skill, key) => {
                return (
                  <div key={key} className={skill.class}>
                    {skill.name}
                  </div>)

              })}

            </div>
          </div>
        </motion.div>


      </motion.div>
      <div className='btn-carusel'>
        <button onClick={swipeLeft} className='swipe-btn'>
          <FiChevronLeft /> Previous
        </button>
        <button onClick={swipeRight} className='swipe-btn'> Next <FiChevronRight /></button>
      </div>
      <br />
    </>

  )
}
