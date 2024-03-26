import React, {useState} from 'react';
import manager from '../images/AboutUs/manager.png';

export default function Managers() {
  const [hovered, setHovered] = useState(false);
  const Manager = ({ name, role, description }) => (
    <div className="d-flex flex-column manager-1">
      <img
        src={manager}
        alt=""
        width={'60%'}
        style={{ filter: hovered ? 'grayscale(100%)' : 'none', transform: hovered ? 'scale(1.1)' : 'scale(1)' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <span className="mt-3 fw-bolder">{name}</span>
      <span className="text-secondary">{role}</span>
      <span style={{ color: '#363636' }}>{description}</span>
    </div>
  );

  return (
    <div className="managers">
        <h1>Team Members</h1>
        <div className="manager-menu">
          <div className="d-flex manager-line">
            <div className="d-flex flex-column manager-1">
              <img className='image-1' src={manager} alt="" width={'60%'}/>
              <span className="mt-3 fw-bolder">Alec Benjamin</span>
              <span className="text-secondary">Manager</span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna.
              </span>
            </div>
            <div className="d-flex flex-column manager-1">
              <img className='image-1' src={manager} alt="" width={'60%'}/>
              <span className="mt-3 fw-bolder">Alec Benjamin</span>
              <span className="text-secondary">Manager</span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna.
              </span>
            </div>
            <div className="d-flex flex-column manager-1">
              <img className='image-1' src={manager} alt="" width={'60%'}/>
              <span className="mt-3 fw-bolder">Alec Benjamin</span>
              <span className="text-secondary">Manager</span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna.
              </span>
            </div>
          </div>
          <div className="d-flex manager-line mt-5">
            <div className="d-flex flex-column manager-1">
              <img className='image-1' src={manager} alt="" width={'60%'}/>
              <span className="mt-3 fw-bolder">Alec Benjamin</span>
              <span className="text-secondary">Manager</span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna.
              </span>
            </div>
            <div className="d-flex flex-column manager-1">
              <img className='image-1' src={manager} alt="" width={'60%'}/>
              <span className="mt-3 fw-bolder">Alec Benjamin</span>
              <span className="text-secondary">Manager</span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna.
              </span>
            </div>
            <div className="d-flex flex-column manager-1">
              <img className='image-1' src={manager} alt="" width={'60%'}/>
              <span className="mt-3 fw-bolder">Alec Benjamin</span>
              <span className="text-secondary">Manager</span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna.
              </span>
            </div>
          </div>
        </div>
      </div>
  );
}
