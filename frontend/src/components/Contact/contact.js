import React, {useRef, useState} from 'react';
import './contact.css';
//import emailjs from '@emailjs/browser';
import { FaRegCircleCheck } from "react-icons/fa6";

export const Contact = () => {
  const form = useRef();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      // Send data to your backend API
      const response = await fetch('https://eduardo-portfolio-backend.onrender.com/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Show success message
        setFormSubmitted(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        // Handle error response
        console.error('Form submission failed');
        // You might want to show an error message to the user
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle network errors
    }
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
              <input type='text' className='nameBoxForm' name='name' placeholder='Your Name' value={formData.name} onChange={handleChange}></input>
              <input type='email' className='emailBoxForm' name='email' placeholder='Your Email' value={formData.email} onChange={handleChange}></input>
              <textarea className="messageBoxForm" name='message' rows="7" placeholder='Your Message' value={formData.message} onChange={handleChange}></textarea>
              <button type='submit' value="Send" className='submitBtn'>Submit</button>
            </form>
          </span>
        )}
      </div>
    </section>
  );
}

export default Contact;