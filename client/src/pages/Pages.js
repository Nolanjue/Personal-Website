import React from 'react'
import './Pages.css'
import Social from '../components/Social'
function Pages() {
  
  return (
    <div className = 'pages-page'>
        <div className = 'Navbar-section'>
                <div className = 'left'>
                    <div className = 'icons'>
                        <a  className = 'icons' href = '/'>
                            <img src = '/images/logo.png' alt = 'logo'/>
                        </a>
                    </div>
                </div>
        </div>
        <div className = 'bio'>
            <div className = 'bio-descr'>
                <p>Thank you for visiting my website, If you want to know more about me or have 
                    other questions, please contact me! I'd Love to talk!
                </p>
            </div>
            <div className = 'interests'>
                <h3>- My Interests -</h3>
                <p> I love to eat, play music and Learn more about the world of Computers</p>
                <p>I enjoy learning  frameworks and languages as well as building projects to improve my skills. </p>
            </div>
            <div className = 'future-goals'>
                <h3>- Future Goals -</h3>
                <p>My goals include to creating AI's that helps our daily life and creating really cool projects!</p>
                <p> Projects that are in progress include a full stack social media website and </p>
            </div>
            <div className = 'Aspirations'>
                <h3>- Aspirations -</h3>
                <p>I would love to get into a software field that involves web development or any related field.</p>
                <p>Some other areas I would love to get into include AI/Machine learning, and Cybersecurity</p>
            </div>
            <a className = 'github-link' href = 'https://github.com/Nolanjue'>
                Click here to go to my Github!
            </a>
        </div>
        <Social/>
    </div>
  )
}

export default Pages