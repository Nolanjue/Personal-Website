import React, { useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    const [open, setOpen]= useState('closed')
    const scroll = (value) => {
        const convertThis = parseInt(`${value}vh`)
        window.scrollTo(0, convertThis)
    }


    const showDropdown = () => {
        const getDrop = document.querySelector('.dropdown');
        const getItem = document.querySelector('.drop-items')
        if( open === 'closed'){
            getItem.style.display='flex';
            
            setOpen('open')
        }
        else{
            getItem.style.display = 'none'
            setOpen('closed')
        }
    }
    
return (
<div className = 'Navbar-section'>
    <div className = 'left'>
        <div className = 'icons'>
            <a  className = 'icons' href = '/'>
                <img src = '/images/logo.png' alt = 'logo'/>
            </a>
        </div>
        <div className = 'links'>
            <ul className = 'list'>
                <li className = 'item'> <a href = '/Pages'>About Me</a></li>
                <li className = 'item'onClick = {()=> scroll(1300)}>Projects</li>
                <li className = 'item' onClick = {()=> scroll(2100)}>Contact</li>
            </ul>
        </div>
    </div>
    <div className = 'dropdown-container'>
            <div className = 'dropdown'>
                <FontAwesomeIcon class= 'drop-icon' onClick = {showDropdown} icon={faBars} />
            </div>
            <div className = 'drop-items'>
                <ul className = 'drop-list'>
                        <li className = 'item'><a href = '/Pages'>About Me</a></li>
                        <li className = 'item'onClick = {()=> scroll(1900)}>Projects</li>
                        <li className = 'item' onClick = {()=> scroll(3300)}>Contact</li>
                    </ul>
            </div>
    </div>


    <div className = 'right'>
        <button onClick = {()=> scroll(4600)} className = 'nav-button'>Talk to Me!</button>
    </div>
 </div>
 )
}

export default Navbar