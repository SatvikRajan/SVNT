import React, { useState, useEffect } from 'react';
import LocationCard from '../components/LocationCard';
import contact from '../images/ContactUs/contact-hand.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/contact.css'
import axios from 'axios';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
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
      const response = await axios.post('http://localhost:8080/send-email', {
        senderName,
        senderEmail,
        subject,
        text,
        phoneNumber
      });
      setMessage(response.data);
      setSenderName('');
      setSenderEmail('');
      setSubject('');
      setText('');
      setPhoneNumber('')
    } catch (error) {
      setMessage('Error sending email');
      console.error(error);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-image-container">
        <img src={contact} className="contact-image" alt="" />
        <div className="text">Need assistance?<br/>
          How may we help you?</div>
      </div>

      <div className="form-body " >
        <div className="write" data-aos="fade-right">
          <h1 className='write-h1' style={{ color: '#0E1513', marginBottom: '22px', fontSize: '42px' }}>Contact Us</h1>
          <p className="write1">
            Feel free to contact us for inquiries,
            <br /> feedback, or just a quick hello !
            {/* Fix this */}
          </p>
          <p className='write1'>Gain deeper insight into our services</p>
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
              <input type="text" id="inp" value={text}
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
          {message && <p>{message}</p>}
        </div>
      </div>
      <div className="location">
        <h1 className="location-name">Head Office</h1>
        <div className="offices" data-aos='fade-up'>
          <LocationCard
            title="Hyderabad"
            address="12th Floor, DSL ABACUS IT PARK , UPPAL, Hyderabad, Telangana, India-500 039"
          />
        </div>
        <h1 className="location-name">Other Branches</h1>
        <div className="offices1" data-aos='fade-up'>
          <LocationCard
            title="Bangalore"
            address="D No: 114, 52/1 , 2nd Floor, Krishna Reddy Building , 24th Main Road , HSR Layout, 2nd Sector"
          />

          <LocationCard
            title="Kolkata"
            address="Balaji Apartment, Kalitala PO, Nawab Ganj, Ichapur , North 24 Paraganas , Kolkatta , West Bengal , India"
          />

          <LocationCard
            title="Delhi"
            address="House No : 07, Second Floor, Vinoba Puri, Lajpat Nagar-2, New Delhi - 110024"
          />
        </div>
        <p style={{ marginBottom: '60px' }}>
          <b>Ph : </b>
          <a href="tel:+914027153387">040-27153387 </a>,<a href="tel:+919397005115"> 9397005115 </a>,
          <a href="tel:+918800630726"> 8800630726 </a>,<a href="tel:+919441234471"> 9441234471 </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
