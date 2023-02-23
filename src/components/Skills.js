import React from 'react'


import { SkillItems } from '../jsons/Skills'


export const Skills = () => {
  return (<>
        <div className='skills-tools'>
          <div className="skills-tools-title">SKILLS + TOOLS </div>
          <div className="skills-tools-txt">  These are some of my skills + tools I use :)</div>
        </div>
    {SkillItems.map((skill,key) => {
      return (<div className='skills-card' key={key}>
        <div className='skills-title' > <span>{skill.title}</span></div>
        <div className='skill-icons'>
          {skill.icons.map((icon,key) => {
            return (
              <div className='icon-cont' key={key}>
                <div className='img-cont'>
                  <img className='icon-img' src={icon.url} />
                </div>
                <div className='icon-title'>
                  {icon.title}
                </div>
              </div>
            )
          })}


        </div>
      </div>)

    })}
  </>

  )
}
