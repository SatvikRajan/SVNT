import React from 'react'
import last from '../images/Home/last-career.png'
export default function LastContent() {
  return (
    <>
      <div className="last">
        <p className="last-text-1" style={{ fontSize: '42px' }}>Careers</p>
        <div className='d-flex justify-content-around lt-text'>
          <ul className='last-ul'>
            <li>Connect with New People</li>
            <li>Discover New Horizons </li>
            <li>Design the Future</li>
          </ul>
          <a href="/careers" style={{width: '15%'}}>
            <p className="last-text1 join">Join Us</p>
          </a>
        </div>
        {/* <img src={last} style={{ marginBottom: '3rem' }} alt="" /> */}
        <img src={last} alt="" />
      </div>
      <div className="last-contact d-flex">
        <div className='lc-1' style={{ width: '60%' }}>
          <h1>Not sure where to start ?</h1>
          <p style={{ fontSize: '24px', marginTop: '10px' }}>
            Our specialists are available to address your inquiries and guide you in choosing the ideal products for
            your company.
          </p>
        </div>
        <div className="ms-auto align-self-center lc-2" style={{width: '18%'}}>
          <a href="/contact" style={{ width: '100%' }} className=" text-light align-self-end fs-4 readmore">
            Contact Us
          </a>
        </div>
      </div >
    </>
  )
}
