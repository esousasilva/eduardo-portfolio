import React, {useRef, useState} from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import { FaRegCircleCheck } from "react-icons/fa6";

export const Contact = () => {
  const form = useRef();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, {
      publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
    })
    .then(
      () => {
        console.log('SUCCESS!');
        setFormSubmitted(true);
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  };

  return (
    <section id='contactPage'>
      <h1 className='contactTitle'>
          Contact Me
      </h1>
      <div id='contactBox'>
        { formSubmitted? (
          <div className='formSentMessage'>
            <FaRegCircleCheck className='checkMark'/>
            <h1 className='thankUMessage'>Thank you for reaching out.<br/>I will get back to you as soon as possible.</h1>
          </div>
        ):(
          <span>
            <span className='contactDescription'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
              <input type='text' className='nameBoxForm' name='from_name' placeholder='Your Name'></input>
              <input type='email' className='emailBoxForm' name='from_email' placeholder='Your Email'></input>
              <textarea className="messageBoxForm" name='message' rows="7" placeholder='Your Message'></textarea>
              <button type='submit' value="Send" className='submitBtn'>Submit</button>
            </form>
          </span>
        )}
      </div>
    </section>
  );
}

export default Contact;