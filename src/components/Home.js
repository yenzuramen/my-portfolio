import React from 'react'
import me from '../assets/images/me.PNG'
import { AiOutlinePaperClip } from "react-icons/ai";
import { MdOutlineFileDownload } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { Skills } from './Skills';
import { Projects } from './Projects';
import { About } from './About';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion'
import { Footer } from './layout/Footer';

export const Home = () => {

  const copyEmail = () => {
    navigator.clipboard.writeText('yengarciamun@gmail.com');
    toast("Copied to clipboard!");
  }

  const downloadCV = () => {
    const cvURL = 'https://drive.google.com/file/d/1pTphGFZqK20Qk8eizhMt73MNfQvr6qR6/view?usp=sharing'
    window.open(cvURL, '_blank')
  }

  return (
    <div className='main-home'>
      <div className='container' id='home'>
        <div className='cont-title'>
          <motion.div
            initial={{ opacity: 0, y: '-100' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 90, delay: 0.5 }}
            className='hi-text'>Hi! <strong className='name'>I'm Yen (^^)/ </strong>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: '-100' }}
            whileInView={{ opacity: 1, x: 0 }} transition={{ type: 'spring', stiffness: 40, delay: 0 }}
            className='web-dev'>FULL-STACK WEB DEVELOPER</motion.div>

          <motion.div
            initial={{ opacity: 0, x: '-100' }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 40, delay: 0.3 }}
            className='presnt-text '>
            I'm a fullstack web developer with a focus on front-end development!
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: '-100' }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 40, delay: 0.6 }}
            className='secnd-cont'>
            I'm currently looking for a job opportunity as a web developer, eager to grow and bring valuable solutions ^^
          </motion.div>

          <div className='contact-cont'>
            <motion.div
              initial={{ opacity: 0, x: '-100' }}
              whileInView={{ opacity: 1, x: 0, transition: { type: 'spring', stiffness: 80, delay: 1.2 } }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.1 },
              }}
              className='contact-link'>
              <Link to='https://www.linkedin.com/in/yeneli-garcia-18b843251/' target="_blank" >
                LinkedIn <BsLinkedin />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: '-100' }}
              whileInView={{ opacity: 1, x: 0, transition: { type: 'spring', stiffness: 80, delay: 0.9 } }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.1 },
              }}
              className='contact-link'
              onClick={copyEmail} id='aboutMe' >
              yengarciamun@gmail.com  <AiOutlinePaperClip />
            </motion.div>
            <ToastContainer />
          </div>

        </div>
        <motion.div
          initial={{ opacity: 0, y: '-100' }}
          whileInView={{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, delay: 1 } }}
          // transition={{  }}
          // whileHover={{
          //   scale: 1.03,
          //   transition: { type: 'spring', duration: 0.3 },
          // }}
          className='cont-image'>
          <img className='self-img' src={me} alt='me' />
        </motion.div>

      </div>
      <div className='cont-about'>
        <About />
      </div>

      <div className='cont-skills' id='skills'>
        <Skills />
      </div>
      {/* <hr/> */}
      <div className='cont-projects' id='projects'>
        <Projects />
      </div>

      <div className='resume-btn' onClick={downloadCV}>My Resume (CV) <MdOutlineFileDownload /></div>

      <Footer />
    </div>
  )
}
