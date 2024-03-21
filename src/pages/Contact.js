import React, { useState,useEffect } from 'react';
import LocationCard from '../components/LocationCard';
import contact from '../images/contact.jpg';
import '../css/typewriter.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation occurs only once
      offset: 200, // Offset (in px) from the original trigger point
    });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const transporter = createTransport({
  //     host: 'smtp-relay.sendinblue.com',
  //     port: 587,
  //     auth: {
  //       user: 'satvikrajan@example.com',
  //       pass: 'your-password',
  //     },
  //   });

  //   const mailOptions = {
  //     from: 'your-email@example.com',
  //     to: 'recipient@example.com',
  //     subject: formData.subject,
  //     text: `
  //         Name: ${formData.name}
  //         Email: ${formData.email}
  //         Phone Number: ${formData.phoneNumber}
  //         Message: ${formData.message}
  //     `,
  //   };

  //   try {
  //     await transporter.sendMail(mailOptions);
  //     alert('Email sent successfully');
  //   } catch (error) {
  //     console.error(error);
  //     alert('Failed to send email');
  //   }
  // };

  return (
    <div className="contact-container">
      <div className="contact-image-container">
        <img src={contact} className="contact-image" alt="" />
        <div className="text">How may we help you?</div>
      </div>

      <div className="form-body " >
        <div className="write" data-aos="fade-right">
          <h1 style={{ color: '#0E1513', marginBottom: '22px', fontSize: '30px' }}>Company Timeline</h1>
          <p className="write1">
            Feel free to contact us for inquiries,
            <br /> feedback, or just a quick hello !
          </p>
          <ul style={{ lineHeight: '38px', fontSize: '17px' }}>
            <li>Increase your revenue</li>
            <li>Find the right solution for you</li>
            <li>Learn about our pricing</li>
          </ul>
        </div>
        <div className="form-box" data-aos="fade-left">
          <label for="inp" class="inp">
            <input type="text" id="inp" value={formData.name} onChange={handleChange} placeholder="&nbsp;" />
            <span class="label">Name</span>
            <span class="focus-bg"></span>
          </label>
          <div className="d-flex" style={{ gap: '15px' }}>
            <label for="inp" class="inp">
              <input type="text" id="inp" value={formData.email} onChange={handleChange} placeholder="&nbsp;" />
              <span class="label">Email</span>
              <span class="focus-bg"></span>
            </label>
            <label for="inp" class="inp ">
              <input type="text" id="inp" value={formData.phoneNumber} onChange={handleChange} placeholder="&nbsp;" />
              <span class="label"> Phone Number</span>
              <span class="focus-bg"></span>
            </label>
          </div>
          <label for="inp" class="inp">
            <input type="text" id="inp" value={formData.subject} onChange={handleChange} placeholder="&nbsp;" />
            <span class="label">Subject</span>
            <span class="focus-bg"></span>
          </label>

          <label for="inp" class="inp">
            <input type="text" id="inp" value={formData.message} onChange={handleChange} placeholder="&nbsp;" />
            <span class="label">Message</span>
            <span class="focus-bg"></span>
          </label>
          <div class="input-group">
            <button class="btn btn-primary submit" type="submit">
              <span>Submit </span>
            </button>
          </div>
        </div>
      </div>
      <div className="location container">
        <h1 className="location-name">Head Office</h1>
        <div className="offices">
          <LocationCard
            title="Hyderabad"
            address="12th Floor, DSL ABACUS IT PARK , UPPAL, Hyderabad, Telangana, India-500 039"
          />
        </div>
        <h1 className="location-name">Other Branches</h1>
        <div className="offices1">
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
