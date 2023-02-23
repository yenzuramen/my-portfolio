import React from 'react'
import { SkillItems } from '../jsons/Skills'
import { motion, useAnimation } from 'framer-motion'

export const Skills = () => {
  return (<>
    <div className='skills-tools'>
      <div className="skills-tools-title">SKILLS + TOOLS </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { type: 'spring', stiffness: 40, delay: 0 } }}
        className="skills-tools-txt">
        These are some of my skills + tools I use :)
      </motion.div>
    </div>
    {SkillItems.map((skill, key) => {
      return (<div className='skills-card' key={key}>
        <motion.div className='skills-title'
          initial={{ opacity: 0, x: '-10vw' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}>
          <span>{skill.title}</span>
        </motion.div>
        <motion.div className='skill-icons'
          initial={{ opacity: 0, x: '10vw' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 50}}>
          {skill.icons.map((icon, key) => {
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


        </motion.div>
      </div>)

    })}
  </>

  )
}
