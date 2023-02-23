import React from 'react'
import me from '../assets/images/me.PNG'
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlinePaperClip } from "react-icons/ai";
import { MdOutlineFileDownload, MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { Skills } from './Skills';
import { Projects } from './Projects';
import { About } from './About';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Home = () => {

  const copyEmail = () =>{
      navigator.clipboard.writeText('yengarciamun@gmail.com');
      toast("Copied to clipboard!");
  }

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
            I'm currently looking for a jr dev position, eager to grow and bring valuable solitions to any position ^^

          </div>
          <div className='contact-cont'>
            <Link to='https://www.linkedin.com/in/yeneli-garcia-18b843251/' target="_blank" className='contact-link'>
              LinkedIn <BsLinkedin />
            </Link>
            <div className='contact-link' onClick={copyEmail}>
              yengarciamun@gmail.com  <AiOutlinePaperClip />
            </div>
            <ToastContainer />
          </div>
          {/* <button className='btn-contact-me'><strong>Contact <FiArrowUpRight value={{ color: "#3e2e5d" }} /></strong></button> */}
        </div>
        <div className='cont-image'>
          <img className='self-img' src={me} />
        </div>

      </div>
      <div className='cont-about'>
        <About />
      </div>

      <div className='cont-skills'>
        <Skills />
      </div>
      {/* <hr/> */}
      <div className='cont-projects'>
        <Projects />
      </div>

      <div className='resume-btn'>My Resume <MdOutlineFileDownload /></div>
    </div>
  )
}
