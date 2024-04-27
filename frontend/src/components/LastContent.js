import React from 'react'
import last from '../images/Home/last-career.png'
export default function LastContent() {
  return (
    <>
      <div className="last">
        <img src={last} style={{ marginBottom: '3rem' }} alt="" />
        <p className="last-text-1" style={{ fontSize: '42px' }}>Careers</p>
        <ul className='last-ul'>
          <li>Connect with New People</li>
          <li>Discover New Horizons </li>
          <li>Design the Future</li>
        </ul>
        <a href="/careers">
          <p className="last-text1 join">Join Us</p>
        </a>
      </div>
      <div className="last-contact d-flex">
        <div style={{ width: '60%' }}>
          <h1>Not sure where to start ?</h1>
          <p style={{ fontSize: '24px', marginTop: '10px' }}>
            Our specialists are available to address your inquiries and guide you in choosing the ideal products for
            your company.
          </p>
        </div>
        <div className="ms-auto align-self-center">
          <a href="/contact" style={{ filter: 'invert()', width: '100%' }} className=" text-light align-self-end fs-4 readmore">
            Contact Us
          </a>
        </div>
      </div >
    </>
  )
}
