import React from 'react'

export default function LastContent() {
  return (
    <>
      <div className="last">
        <p className="last-text-1" style={{ fontSize: '42px' }}>Career</p>
        <ul style={{ color: 'white', paddingTop: '5rem', paddingLeft: '18rem', fontSize: '38px' }}>
          <li>Connect with New People</li>
          <li>Discover New Horizons </li>
          <li>Design the Future</li>
        </ul>
        <a href="/careers">
          <p className="last-text1 join">Join Us</p>
        </a>
      </div>
      {/* <div className="last-contact d-flex">
          <div className="w-75">
            <h1>Not sure where to start ?</h1>
            <p>
              Our specialists are available to address your inquiries and guide you in choosing the ideal products for
              your company.
            </p>
          </div>
          <a href="/contact" style={{filter: 'invert()'}} className="ms-auto text-light align-self-end fs-4 readmore">
            Contact Us
          </a>
        </div> */}
    </>
  )
}
