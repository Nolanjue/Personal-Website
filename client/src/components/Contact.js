import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
/*read documentation!!!*/
import './Contact.css'
import Uploadimage from './Uploadimage';
import Test from './Test';




function Contact() {

  const form = useRef();/*we can use usestate, but useref is better */
  const [success, setSuccess] = useState('');/*just a boolean to see if message has been sent*/
 
  //getting the intial value, its going to be null at the beginning....




  const handleSubmit = (e)=> {
    e.preventDefault();
    {/* use emailJS to send emails to my gmail, using "name" as a way to define/send parameters for message*/}
    const getName = document.getElementById('name');
    const getEmail = document.getElementById('email');
    const getText = document.getElementById('text');

    if(!getName.value || !getEmail.value || !getText.value ){
        setSuccess( 'Please fill in all fields')
     }
     else{
      emailjs.sendForm('service_ipz0qg5', 'template_8sgfdwj', form.current, 'slJZzoJqsRfefdxez')
      .then((result) => {
          console.log(result.text);
          setSuccess('Your messaage has been sent! Thank you for contacting me!')
      }, (error) => {
          console.log(error.text);
          setSuccess('error has occured');
          
      });
     }
    }
  return (
    <div className = 'contact-section'>
        <div className = 'contact-left'>
          <form ref= {form} onSubmit = {handleSubmit} className = 'contact-form'>
            {/*sends data to database or location(replaces axios in react), useful in vanilla html/js*/ }
            <h1>Contact Me!</h1>
            {/* use emailJS to send emails to my gmail, using "name" as a way to define parameters for message*/}
            <input id = 'name' type = 'name' name = 'name' placeholder = 'Your Name'/>
            <input id = 'email' type = 'email' name = 'email'placeholder = 'Your Email'/>
            <textarea id = 'text' name = 'message' placeholder = 'Send me a message! :D'></textarea>
            <button type = 'submit' className = 'contact-button'>Send</button>
            <h3>{success}</h3> 

          </form>
        </div>
        <div className = 'contact-right'>
           <Test/>
        </div>
    </div>
  )
}

export default Contact