import React from 'react'
import './Hero.css'
import Distortion from './Distortion'
function Hero() {
  return (
    <div className = 'hero-section'>
        <div className = 'hero-left'>
          <div className = 'text'>
            <h1>Hello! I'm Nolan :D</h1>
            <span>- What I enjoy -</span>
            <p>Making awesome applications for people and continuously improving my skills</p>
            <a href = '/Pages'>
              <button className='button'>Learn more</button>
            </a>
          </div>
        </div>
        <div className = 'hero-right'>
          {/*3D model here*/}
          <Distortion />
          <img className = 'hero-image' src = '/images/heroimg.png' alt = 'img'/>
          
        </div>
    </div>
  )
}

export default Hero