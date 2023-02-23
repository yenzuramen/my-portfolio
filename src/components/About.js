import React, { useEffect } from 'react'
import { HiStar } from "react-icons/hi";
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

export const About = () => {

  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {

    console.log(inView);
    if (inView) {
      console.log('in');
      animation.start({
        x: 0,
        transition: { type: 'spring', duration: 1, bounce: 0.3 }
      })
    } else {
      console.log('out')
      animation.start({ x: '1vw' })
    }
  }, [inView])

  return (
    <>
      <div className='about-me-cont'>

        <div className="projects-title">A BIT ABOUT ME :) </div>

        <div className='about-me-header'>
          <img src='./assets/about-me-images/head2.png' />
        </div>

        <motion.div className='about-me-text' ref={ref} animate={animation}>
          I'm a 23 yo software development enthusiast,
          I consider dedication and a feeling of responsibility a core part of my personality.
          Always looking forward to improve and eager to learn new things ^^!
        </motion.div>

        <div className='fav-txt'> Some of my favorite things <HiStar /></div>
        <div className='favs-cont'>
          <div className='fav-card'>
            <div className='fav-title'>
              Video Game
            </div>
            <div className='fav-img'>
              <img src='./assets/about-me-images/botw.png' />
              <div className='overlay-fav'>
                The Legend Of Zelda: Breath Of The Wild
              </div>
            </div>
          </div>
          <div className='fav-card'>
            <div className='fav-title'>
              Piece of Hardware
            </div>
            <div className='fav-img'>
              <img src='./assets/about-me-images/split.png' />
              <div className='overlay-fav'>
                My split keyboard! :)
              </div>
            </div>
          </div>
          <div className='fav-card'>
            <div className='fav-title'>
              Food
            </div>
            <div className='fav-img'>
              <img src='./assets/about-me-images/food.png' />
              <div className='overlay-fav'>
                Tacos al pastor/tripa
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
    </>
  )
}
