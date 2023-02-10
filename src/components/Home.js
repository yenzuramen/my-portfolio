import React from 'react'
import me from '../assets/images/me.PNG'
import { FiArrowUpRight } from "react-icons/fi";
import { FaReact, FaNodeJs, FaPhp, FaGit } from "react-icons/fa";
import { SiExpress, SiJavascript, SiCss3, SiMongodb } from "react-icons/si";
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
        {/* <Skillcard /> */}
      </div>
      {/* <div className='line-grad-cont'>
        <div className='line-grad'>bar</div>
        <div className='card-skill'>
          
        </div>
      </div> */}
      <div className="parent">
        <div className="line"></div>
        <div className="child first">
          <div className='skill-mask'>
            <IconContext.Provider value={{ size: 70, color: "#3e2e5d" }}>
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
      <div>pop</div>

    </div>
  )
}
