import React from 'react'
import me from '../assets/images/me.PNG'

export const Home = () => {
  return (
    <div className='main-home'>
      <div className='container'>
        <div className='cont-title'>
          <div className='hi-text'>Hi! <strong>I'm Yen (^^)/ </strong> </div>
          <div className='web-dev'>WEB DEVELOPER</div>
          <div className='presnt-text frosted-glass'>
            I am passionate about <strong> creating <em>dynamic</em> and <em>engaging</em> websites </strong>
            that are visually stunning and easy to use.
          </div>
        </div>
        <div className='cont-image'>
          <img className='self-img' src={me}/>
        </div>
      </div>
    </div>
  )
}
