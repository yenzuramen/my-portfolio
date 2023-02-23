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

  return (
    <div className='main-home'>
      <div className='container'>
        <div className='cont-title'>
          <div className='hi-text'>Hi! <strong className='name'>I'm Yen (^^)/ </strong> </div>

          <motion.div
            initial={{ opacity: 0, x: '-10vw' }}
            whileInView={{ opacity: 1, x: 0 }} transition={{ type: 'spring', stiffness: 40, delay: 0 }}
            className='web-dev'>FULL-STACK WEB DEVELOPER</motion.div>

          <motion.div
            initial={{ opacity: 0, x: '-10vw' }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 40, delay: 0.3 }}
            className='presnt-text frosted-glass'>
            I'm a bilingual computer systems engineer with a focus on fullstack web development!
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: '-10vw' }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 40, delay: 0.6 }}
            className='secnd-cont'>
            I'm currently looking for a job as a jr web developer, eager to grow and bring valuable solitions to any position ^^
          </motion.div>

          <div className='contact-cont'>
            <motion.div
              initial={{ opacity: 0, x: '-10vw' }}
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
              initial={{ opacity: 0, x: '-10vw' }}
              whileInView={{ opacity: 1, x: 0, transition: { type: 'spring', stiffness: 80, delay: 0.9 } }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.1 },
              }}
              className='contact-link'
              onClick={copyEmail}>
              yengarciamun@gmail.com  <AiOutlinePaperClip />
            </motion.div>
            <ToastContainer />
          </div>

        </div>
        <motion.div
          initial={{ opacity: 0, y: '-20vh' }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 30, delay: 1 }}
          className='cont-image'>
          <img className='self-img' src={me}  alt='me'/>
        </motion.div>

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

      <div className='resume-btn'>My Resume (CV) <MdOutlineFileDownload /></div>
     
      <Footer />
    </div>
  )
}
