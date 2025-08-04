import React, {useRef} from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, {
      publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
    })
    .then(
      () => {
        console.log('SUCCESS!');
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
        <span className='contactDescription'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' className='nameBoxForm' name='from_name' placeholder='Your Name'></input>
          <input type='email' className='emailBoxForm' name='from_email' placeholder='Your Email'></input>
          <textarea className="messageBoxForm" name='message' rows="7" placeholder='Your Message'></textarea>
          <button type='submit' value="Send" className='submitBtn'>Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;