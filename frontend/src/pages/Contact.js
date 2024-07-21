import React, { useState, useEffect } from 'react';
import LocationCard from '../components/LocationCard';
import contact from '../images/ContactUs/contact-hand.jpg';
import contactm from '../images/ContactUs/contact-handm.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/contact.css'
import axios from 'axios';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 300,
      delay: 300
    });
  }, []);

  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!senderName || !subject || !text) {
        setMessage('Please fill in the required fields ');
        return;
      }

      if (senderName.length < 3) {
        setMessage('Name should be more than 3 characters');
        return;
      }

      if (!isValidEmail(senderEmail)) {
        setMessage('Please provide a valid email address');
        return;
      }
      if (!isValidPhoneNumber(phoneNumber)) {
        setMessage('Please provide a valid phone number');
        return;
      }

      const response = await axios.post('http://localhost:8080/send-email', {
        senderName,
        senderEmail,
        subject,
        text,
        phoneNumber
      });
      setMessage(response.data);
      clearFormFields();
    } catch (error) {
      setMessage('Error sending email');
      console.error(error);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  if (!senderName || !senderEmail || !subject || !text || !phoneNumber) {
    setTimeout(() => {
      setMessage('');
    }, 5000);
  }

  const clearFormFields = () => {
    setSenderName('');
    setSenderEmail('');
    setPhoneNumber('');
    setSubject('');
    setText('');
  };

  return (
    <div className="contact-container">
      <div className="contact-image-container">
        <picture>
          <source media="(max-width: 425px)" srcSet={contactm} />
          <source media="(min-width: 426px)" srcSet={contact} />
          <img
            src={contact}
            className='contact-image'
            alt=""
          />
        </picture>
        <div className="text">Need assistance?<br />
          How may we help you?</div>
      </div>

      <div className="form-body" >
        <div className="write" data-aos="fade-right">
          <h1 className='write-h1' style={{ marginBottom: '22px', fontSize: '42px' }}>Contact Us</h1>
          <p className="write1">
            Wondering if SVNT is right for your business?<br /> Chat with our team to discover if we're the right fit.
            {/* Fix this */}
          </p>
        </div>
        <div className="form-box" data-aos="fade-left">
          <form onSubmit={handleSubmit}>
            <label for="name" class="inp">
              <input type="text" id="name" value={senderName}
                onChange={(e) => setSenderName(e.target.value)} placeholder="&nbsp;" />
              <span class="label">Name</span>
              <span class="focus-bg"></span>
            </label>
            <div class="d-flex email" style={{ gap: '15px' }}>
              <label for="email" class="inp">
                <input type="text" id="email" value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)} placeholder="&nbsp;" />
                <span class="label">Email</span>
                <span class="focus-bg"></span>
              </label>
              <label for="phone" class="inp ">
                <input type="text" id="phone" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="&nbsp;" />
                <span class="label"> Phone Number</span>
                <span class="focus-bg"></span>
              </label>
            </div>
            <label for="subject" class="inp">
              <input type="text" id="subject" value={subject}
                onChange={(e) => setSubject(e.target.value)} placeholder="&nbsp;" />
              <span class="label">Subject</span>
              <span class="focus-bg"></span>
            </label>

            <label for="inp" class="inp">
              <textarea style={{ height: '20rem' }} className='textarea' type="text" id="inp" value={text} rows={12}
                onChange={(e) => setText(e.target.value)} placeholder="&nbsp;" />
              <span class="label">Message</span>
              <span class="focus-bg"></span>
            </label>
            <div class="input-group">
              <button class="btn btn-primary submit" type="submit">
                <span>Submit </span>
              </button>
            </div>
          </form>
          {message && <p style={{ marginTop: '20px' }}>{message}</p>}
        </div>
      </div>
      <div className="location">
        <h1 className='ln'>Our Locations</h1>
        <h1 className="location-name">Head Office</h1>
        <div className="offices" data-aos='fade-up'>
          <LocationCard
            title="Hyderabad"
            // address="12th Floor, DSL ABACUS IT PARK , UPPAL, Hyderabad, Telangana, India-500 039"
          />
        </div>
        <h1 className="location-name">Other Branches</h1>
        <div className="offices1" data-aos='fade-up'>
          <LocationCard
            title="Bangalore"
            // address="D No: 114, 52/1 , 2nd Floor, Krishna Reddy Building , 24th Main Road , HSR Layout, 2nd Sector"
          />

          <LocationCard
            title="Kolkata"
            // address="Balaji Apartment, Kalitala PO, Nawab Ganj, Ichapur , North 24 Paraganas , Kolkatta , West Bengal , India"
          />

          <LocationCard
            title="Delhi"
            // address="House No.849, GROUND FLOOR , SECTOR, 47 GURGAON, (HR) 122001"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
