import React from 'react'

import { IconContext } from "react-icons";
import { SkillItems } from '../jsons/Skills'


export const Skills = () => {
  return (<>

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
