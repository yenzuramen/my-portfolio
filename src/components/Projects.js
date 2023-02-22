import React, { useEffect, useState } from 'react'
import { IconContext } from "react-icons";
import { ProjectItems } from '../jsons/Projects'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const Projects = () => {

  const [projectIndex, setProjectIndex] = useState(0)
  const [currentProject, setCurrentProject] = useState(ProjectItems[projectIndex]);

  const swipeLeft = () => {
    let newIndex = projectIndex - 1;
    if (newIndex < 0) {
      newIndex = ProjectItems.length - 1
    }
    setProjectIndex(newIndex)
  }


  const swipeRight = () => {
    let newIndex = projectIndex + 1;
    if (newIndex > (ProjectItems.length - 1)) {
      newIndex = 0
    }
    setProjectIndex(newIndex)
  }

  useEffect(() => {
    setCurrentProject(ProjectItems[projectIndex])
  }, [projectIndex])

  return (
    <>

      <div className='project-card'>
        <div className='swipe-btn-cont'>
          <button onClick={swipeLeft} className='swipe-btn'>
            <FiChevronLeft />
          </button>
        </div>
        <div className='project-img'><img src='./assets/project-images/spa-landing.PNG' /></div>
        <div className='project-desc'>
          <div className='project-card-title'>{currentProject.title}</div>
          <p className='project-desc-text'>{currentProject.desc}</p>
          <div className='project-skills'>
            {currentProject.skills.map((skill, key) => {
              return (<div key={key} className={skill.class}> {skill.name}</div>)

            })}

          </div>
        </div>
        <div><button onClick={swipeRight} className='swipe-btn'><FiChevronRight /></button></div>
      </div>


      <br />
    </>

  )
}
