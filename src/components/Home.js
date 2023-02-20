import React from 'react'
import me from '../assets/images/me.PNG'
import { FiArrowUpRight } from "react-icons/fi";
import { FaReact, FaNodeJs, FaPhp, FaGit, FaDatabase } from "react-icons/fa";
import { SiExpress, SiJavascript, SiCss3, SiMongodb, } from "react-icons/si";
import { SlScreenDesktop } from "react-icons/sl";
import { GrTools } from "react-icons/gr";

import { AiOutlineConsoleSql, AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { Skillcard } from './SkillCard';
import { IconContext } from "react-icons";

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

        <div className='skills-tools'>
          <div className="skills-tools-title">SKILLS + TOOLS</div>
          <div className="skills-tools-txt">  These are some of my skills + tools I use :)</div>
        </div>
        <div className='skills-card'>
          <div >FRONT END </div>
          <div> <IconContext.Provider value={{ size: 70, color:"#78c6f0" }}>
              <FaReact />
              {/* <SiJavascript />
              <AiFillHtml5 />
              <SiCss3 />
              <SiMongodb />
              <FaNodeJs />
              <SiExpress />
              <AiOutlineConsoleSql />
              <FaPhp />
              <AiFillGithub />
              <FaGit /> */}

            </IconContext.Provider> </div>
        </div>
        <div>pop</div> 
        {/* <Skillcard /> */}
      </div>
      {/* <div className='line-grad-cont'>
        <div className='line-grad'>bar</div>
        <div className='card-skill'>
          
        </div>
      </div> */}
      {/* <div className="parent">
        <div className="line"></div>
        <div className="child first">
          <div className='skill-mask'>
            <div className='skill-title'>
              FrontEnd  <div><SlScreenDesktop /></div>
            </div>
            <div className='skill-title'>
              BackEnd  <div><FaDatabase /></div>
            </div>
            <div className='skill-title'>
              Other Tools  <div><GrTools /></div>
            </div>
             <IconContext.Provider value={{ size: 70 }}>
              <FaReact />
              <SiJavascript />
              <AiFillHtml5 />
              <SiCss3 />
              <SiMongodb />
              <FaNodeJs />
              <SiExpress />
              <AiOutlineConsoleSql />
              <FaPhp />
              <AiFillGithub />
              <FaGit />

            </IconContext.Provider> 

          </div>
        </div>
        <div className="child second"></div>
        <div className="child third"></div>

      </div>
      <div>pop</div> */}

    </div>
  )
}
