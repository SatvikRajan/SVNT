import React,{useEffect} from 'react'
import last from '../images/Home/last-career.webp'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function LastContent() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      delay: 500,
      once: true
    });
  }, []);
  return (
    <>
      <div className="last" data-aos='fade-right'>
        <p className="last-text-1" style={{ fontSize: '42px' }}>Careers</p>
        <div className='d-flex justify-content-around lt-text'>
          <ul className='last-ul'>
            <li>Connect with New People</li>
            <li>Discover New Horizons </li>
            <li>Design the Future</li>
          </ul>
          <Link to="/careers" style={{ width: '15%', marginLeft: 'auto' }}>
            <p className="last-text1 join">Join Us</p>
          </Link>
        </div>
        {/* <img src={last} style={{ marginBottom: '3rem' }} alt="" /> */}
        <img src={last} alt="" />
      </div>
      <div className="last-contact d-flex" data-aos='fade-left'>
        <div className='lc-1' style={{ width: '60%' }}>
          <h1>Not sure where to start ?</h1>
          <p style={{ fontSize: '24px', marginTop: '10px' }}>
            Our specialists are available to address your inquiries and guide you in choosing the ideal products for
            your company.
          </p>
        </div>
        <div className="ms-auto align-self-center lc-2 hehe" style={{ width: '18%' }}>
          <Link to="/contact" style={{ width: '100%', filter: 'invert(1)' }} className=" text-light align-self-end fs-4 readmore">
            Contact Us
          </Link>
        </div>
      </div >
    </>
  )
}
