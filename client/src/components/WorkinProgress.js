import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'


function WorkinProgress() {
  const [index, setIndex]= useState(0);
  const images = ['/images/inprogress1.png','/images/inprogress2.png','/images/noproject.png',];
  //please remove this image and add stuff when I actually have projects done lol

  const links = ['','','https://github.com/Nolanjue'];
  const desc = ['A social media app that Im planning to make full stack using either MySql or MongoDB','An ecommerce store that Im trying to make using Stripe API with mongoDB','Project does not exist yet..click to check out my Github'];

  return (
    <div className = 'project-container'>
        <div className = 'project-images'>
            <Link to = {links[index]}>
                <img className = 'project-image' src = {images[index]} alt = 'image'/>
            
            </Link>
        </div>
        <div className = 'project-slider'>
             <FontAwesomeIcon onClick = {()=> {index === 0 ? setIndex(images.length - 1) : setIndex(index - 1)}} className = 'project-arrow'icon={faArrowLeft} />
              
            <FontAwesomeIcon onClick = {()=>{index === images.length - 1 ? setIndex(0) : setIndex(index + 1)}} className = 'project-arrow' icon={faArrowRight} />
        </div>
        <div className = 'project-desc'>
          <p>{desc[index]}</p>
        </div>
    </div>
  )
}

export default WorkinProgress