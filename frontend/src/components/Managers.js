import React, { useEffect } from 'react';
import soumendra from '../images/AboutUs/soumendra.png'
import sridhar from '../images/AboutUs/sridhar.png'
import mohan from '../images/AboutUs/mohan.png'
import somu from '../images/AboutUs/somu.png'
import nd from '../images/AboutUs/nd.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Managers() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      delay: 500,
      once: true
    });
  }, []);
  return (
    <div className="managers">
      <h1>Our Team</h1>
      <div className="manager-menu">
        <div className="d-flex manager-line justify-content-around">
          <div className="d-flex flex-column manager-1" data-aos='fade-up'>
            <img className='image-1' loading='lazy' src={soumendra} alt="" width={'40%'} />
            <span className="mt-3 manager-name fw-bolder">Mr. Soumendra</span>
            <span className="text-secondary">Director</span>
            <span>
              “No growth hack, brilliant marketing idea can save you long-term if you don’t have a sufficiently good product.”              </span>
          </div>
          <div className="d-flex flex-column manager-1" data-aos='fade-up'>
            <img className='image-1' loading='lazy' src={sridhar} alt="" width={'40%'} />
            <span className="mt-3 manager-name fw-bolder">Mr. Sridhar Naidu</span>
            <span className="text-secondary">Director</span>
            <span>
            “We must learn what customers really want, not what they say they want or what we think they should want.”
            </span>
          </div>
          {/* <div className="d-flex flex-column manager-1" data-aos='fade-up'>
              <img className='image-1' loading='lazy' src={somu} alt="" width={'60%'}/>
              <span className="mt-3 fw-bolder">Somu</span>
              <span className="text-secondary">Vice President</span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div> */}
        </div>
        <div className="d-flex manager-line mt-5 justify-content-around" >
          <div className="d-flex flex-column manager-1" data-aos='fade-up'>
            <img className='image-1' loading='lazy' src={mohan} alt="" width={'58%'} />
            <span className="mt-3 manager-name fw-bolder">Mr. Mohan Reddy</span>
            <span className="text-secondary">Vice President</span>
            <span>
            “The greatest achievements often come from the greatest challenges in world.”
            </span>
          </div>
          <div className="d-flex flex-column manager-1" data-aos='fade-up'>
            <img className='image-1' loading='lazy' src={nd} alt="" width={'56%'} />
            <span className="mt-3 manager-name fw-bolder">Mr. ND Prasad</span>
            <span className="text-secondary">Project Manager</span>
            <span>
            “Opportunities don’t come knocking at your door, you must build your own door.”
            </span>
          </div>
          <div className="d-flex flex-column manager-1" data-aos='fade-up'>
            <img className='image-1' loading='lazy' src={somu} alt="" width={'58%'} />
            <span className="mt-3 manager-name fw-bolder">Mr. Somu</span>
            <span className="text-secondary">Vice President</span>
            <span>
            "Actively be in charge of your circumstances, destiny and place in the world.”
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
