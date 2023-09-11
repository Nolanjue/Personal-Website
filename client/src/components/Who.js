import React from 'react'
import './Who.css'
import Test from './Test'
import Uploadimage from './Uploadimage'


function Who() {
  const Scroll = (value) =>{
    const convertThis = parseInt(`${value}vh`)
    window.scrollTo(0, convertThis)
  }
  return (
    <div className = 'who-section'>
        <div className = 'who-left'>
          {/*3D model here*/}
          <Uploadimage/>
        </div>
        <div className = 'who-right'>
          <div className = 'text'>
              <h1>Creating Software and enjoying every bit!</h1>
              <span>- Who I am -</span>
              <p>Currently an University student interested in web development and Data science</p>
              <button className='button' onClick = {()=>{Scroll(1300)}}>See some of my Projects:</button>
            </div>
        </div>
    </div>
  )
}

export default Who