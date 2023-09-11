import React, { useEffect } from 'react'
import './Works.css'
import WorkinProgress from './WorkinProgress';
import ML from './ML';
import Webdev from './Webdev';
import Other from './Other';
import { useState } from 'react';


function Works() {
  const components = [<Webdev/>, <ML/>, <Other/>, <WorkinProgress/>];
  const [index, setIndex] = useState(0);



  return (
    <div className = 'works-section'>
        <div className = 'works-left'>
          <ul className = 'works-list'>
              <li onClick = {()=>setIndex(0)}  className = 'work-item'>Web Development</li>
              <li onClick = {()=>setIndex(1)}className = 'work-item'>ML/DS</li>
              <li onClick = {()=>setIndex(2)}  className = 'work-item'>Other</li>
              <li onClick = {()=>setIndex(3)} id = 'item-4'className = 'work-item'>In Progress:</li>
          </ul>
        </div>
        <div className = 'works-right'>
          {/*3d model here*/}
          {components[index]}
        </div>
    </div>
  )
}

export default Works