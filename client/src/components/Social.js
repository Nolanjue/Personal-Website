import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram} from '@fortawesome/free-solid-svg-icons'
import './Social.css'
function Social() {
  return (
    <div className = 'social'>
        <div className = 'title'>
          <h2>Check out my Social media accounts!</h2>
        </div>
        <div className = 'icon-container'>
          <a className = 'social-icons'href = "https://www.linkedin.com/in/nolan-jue-2a4356246/">
            <img src = '/images/linkedin.png'/>
          </a>
          <a className = 'social-icons' href = "https://www.instagram.com/nolan_283/">
            <img src = '/images/instagram.png'/>
          </a>
        </div>
        <div className = 'email'>
          You can also email me directly: Nolanjue@gmail.com!
        </div>
    </div>
  )
}

export default Social