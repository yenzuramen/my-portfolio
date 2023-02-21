import React from 'react'

import { IconContext } from "react-icons";

export const Skills = () => {
  return (<>
      <div className='skills-card'>
        <div className='skills-title' > <span>FRONT END</span></div>
        <div className='skill-icons'>

          <div className='icon-cont'>
            <div className='img-cont'>
              <img className='icon-img' src='./assets/images/react.png' />
            </div>
            <div className='icon-title'>
              React js
            </div>
          </div>

          <div className='icon-cont'>
            <div className='img-cont'>
              <img className='icon-img' src='./assets/images/js.png' />
            </div>
            <div className='icon-title'>
              Javascript
            </div>
          </div>
          <div className='icon-cont'>
            <div className='img-cont'>
              <img className='icon-img' src='./assets/images/html.png' />
            </div>
            <div className='icon-title'>
              HTML
            </div>
          </div>
          <div className='icon-cont'>
            <div className='img-cont'>
              <img className='icon-img' src='./assets/images/css.png' />
            </div>
            <div className='icon-title'>
              CSS
            </div>
          </div>
        </div>
      </div>
      
      <div className='skills-card'>
        <div className='skills-title' >BACK END </div>
        <div className='skill-icons'>
          <div className='icon-cont'>
            <div className='img-cont'>
              <img className='icon-img' src='./assets/images/node-js.png' />
            </div>
            <div className='icon-title'>
              Node JS
            </div>
          </div>
          <div className='icon-cont'>
            <div className='img-cont'>
              <img className='icon-img' src='./assets/images/mongo.png' />
            </div>
            <div className='icon-title'>
              MongoDB
            </div>
          </div>
          <div className='icon-cont'>
            <div className='img-cont'>
              <img className='icon-img' src='./assets/images/php.png' />
            </div>
            <div className='icon-title'>
              PHP
            </div>
          </div>
          <div className='icon-cont'>
            <div className='img-cont'>
              <img className='icon-img' src='./assets/images/sql.png' />
            </div>
            <div className='icon-title'>
              SQL DBS
            </div>
          </div>

        </div>
      </div>
      <div className='skills-card'>
        <div className='skills-title' >Other tools I use </div>
        <div className='skill-icons'>
          <div className='icon-cont'>
            <div className='img-cont'>
              <img className='icon-img' src='./assets/images/git.png' />
            </div>
            <div className='icon-title'>
              GIT
            </div>
          </div>
          <div className='icon-cont'>
            <div className='img-cont'>
              <img className='icon-img' src='./assets/images/github.png' />
            </div>
            <div className='icon-title'>
              GITHUB
            </div>
          </div>


        </div>
      </div>
 </>

  )
}
