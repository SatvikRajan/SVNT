import React,{useEffect} from 'react';
import manager from '../images/AboutUs/manager.png';
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
        <h1>Team Members</h1>
        <div className="manager-menu">
          <div className="d-flex manager-line">
            <div className="d-flex flex-column manager-1" data-aos='fade-up'>
              <img className='image-1' src={manager} alt="" width={'60%'}/>
              <span className="mt-3 fw-bolder">Alec Benjamin</span>
              <span className="text-secondary">Manager</span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
            <div className="d-flex flex-column manager-1" data-aos='fade-up'>
              <img className='image-1' src={manager} alt="" width={'60%'}/>
              <span className="mt-3 fw-bolder">Alec Benjamin</span>
              <span className="text-secondary">Manager</span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
            <div className="d-flex flex-column manager-1" data-aos='fade-up'>
              <img className='image-1' src={manager} alt="" width={'60%'}/>
              <span className="mt-3 fw-bolder">Alec Benjamin</span>
              <span className="text-secondary">Manager</span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
          </div>
          <div className="d-flex manager-line mt-5" >
            <div className="d-flex flex-column manager-1" data-aos='fade-up'>
              <img className='image-1' src={manager} alt="" width={'60%'}/>
              <span className="mt-3 fw-bolder">Alec Benjamin</span>
              <span className="text-secondary">Manager</span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
            <div className="d-flex flex-column manager-1" data-aos='fade-up'>
              <img className='image-1' src={manager} alt="" width={'60%'}/>
              <span className="mt-3 fw-bolder">Alec Benjamin</span>
              <span className="text-secondary">Manager</span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
            <div className="d-flex flex-column manager-1" data-aos='fade-up'>
              <img className='image-1' src={manager} alt="" width={'60%'}/>
              <span className="mt-3 fw-bolder">Alec Benjamin</span>
              <span className="text-secondary">Manager</span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
          </div>
        </div>
      </div>
  );
}
