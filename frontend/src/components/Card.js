import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Card({ current, image, text }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      delay: 500,
      once: true
    });
  }, []);
  return (
    <div className={`card ${current ? 'current' : ''}`} style={{ backgroundImage: `url(${image})` }}>
      {current && (
        <p
          className="cp"
          // data-aos='fade-up'
          style={{
            fontSize: '30px',
            padding: '25px',
            top: '35rem',
            position: 'absolute',
            color: 'white',
            textShadow: 'black 1px 2px',
          }}
        >
          {text}
        </p>
      )}
    </div>
  );
}

export default Card;
