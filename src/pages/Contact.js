import React from 'react'
import '../css/Contact.css';

function Contact() {
    return <div className='contact-div'>
        <h1 className='contact-title'> Contact Us</h1>
        <input placeholder='Name' className='contact-input'/>
        <input placeholder='Email' className='contact-input' />
        <textarea placeholder='Text' className='contact-text' />
        <button className='contact-send'>Send</button>
    </div>
}

export default Contact;