import React from 'react'
import me from '../assets/images/me.PNG'
import { FiArrowUpRight } from "react-icons/fi";
import { Skillcard } from './SkillCard';

export const Home = () => {
  return (
    <div className='main-home'>
      <div className='container'>
        <div className='cont-title'>
          <div className='hi-text'>Hi! <strong className='name'>I'm Yen (^^)/ </strong> </div>
          <div className='web-dev'>FULL-STACK WEB DEVELOPER</div>
          <div className='presnt-text frosted-glass'>
            I'm a bilingual computer systems engineer with a focus on fullstack web development!
          </div>
          <div className='secnd-cont'>
            I'm currently looking for job opportunities, excited to provide meaningful solutions

          </div>
          <button className='btn-contact-me'><strong>Contact <FiArrowUpRight value={{ color: "#3e2e5d" }} /></strong></button>
        </div>
        <div className='cont-image'>
          <img className='self-img' src={me} />
        </div>
    
      </div>
    <div className='cont-skills'>
          {/* <Skillcard /> */}
        </div>

    </div>
  )
}
