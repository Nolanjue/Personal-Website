import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'


function Webdev() {
  const [index, setIndex]= useState(0);
  const images = ['/images/webdev1.png','/images/webdev2.png','/images/webdev3.png'];
  const links = ['','https://nolanjue.github.io/Gradient-Generator/',''];
  const desc = ['A real time chat application made by socket.io that includes an AI','A gradient generator for CSS backgrounds!','A Photo editor using CSS attributes & a background with randomizing Linear Gradients',];

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

export default Webdev