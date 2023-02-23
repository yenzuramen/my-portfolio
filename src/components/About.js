import React, { useEffect } from 'react'
import { HiStar } from "react-icons/hi";
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { Favorites } from '../jsons/Favorites';
export const About = () => {


  return (
    <>
      <div className='about-me-cont'>

        <div className="projects-title">A BIT ABOUT ME :) </div>

        <motion.div
          initial={{ opacity: 0, x: '2vw' }}
          whileInView={{ opacity: 1, x: 0, transition: { type: 'spring', stiffness: 40, delay: 0 } }}
          whileHover={{
            scale: 1.03,
            transition: { type: 'spring', duration: 0.6 },
          }}
          className='about-me-header'>
          <img src='./assets/about-me-images/head2.png' />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: '-10vw' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 40, delay: 0 }}
          className='about-me-text' >
          I'm a 23 yo software developer,
          I consider dedication and a feeling of responsibility a core part of my personality.
          Always looking forward to improve and eager to learn new things ^^!
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: '2vw' }}
          whileInView={{ opacity: 1, x: 0, transition: { type: 'spring', stiffness: 40, delay: 0 } }}
          whileHover={{
            scale: 1.03,
            transition: { type: 'spring', duration: 0.6 },
          }}
          className='fav-txt'> Some of my favorite things <HiStar /></motion.div>

        <motion.div
          initial={{ opacity: 0, x: '-10vw' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 40, delay: 0 }}
          className='favs-cont'>

          {Favorites.map((fav, key) => {
            return (
              <div key={key} className='fav-card'>
                <div className='fav-title'>
                  {fav.title}
                </div>
                <div className='fav-img'>
                  <img src={fav.img} />
                  <div className='overlay-fav'>
                    {fav.hover_desc}
                  </div>
                </div>
              </div>)
          })}
        </motion.div>
      </div>

      <br />
    </>
  )
}
