import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Who from '../components/Who'
import Works from '../components/Works'
import Contact from '../components/Contact'
import './Home.css'
import Social from '../components/Social'
function Home() {
  return (
    <div className = 'home-page'>
        <Navbar/>
        <Hero/>
        <Who/>
        <Works/>
        <Contact/>
        <Social/>
    </div>
  )
}

export default Home