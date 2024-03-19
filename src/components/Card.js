import React from 'react';

function Card({ current, image, text }) {
  return (
    <div className={`card ${current ? 'current' : ''}`} style={{ backgroundImage: `url(${image})` }}>
      {current && (
        <p className='cp'
          style={{
            fontSize: '30px',
            padding: '25px',
            top: '30rem',
            position: 'absolute',
            color: 'white',
            textShadow: 'black 2px 1px',
            opacity: '1',
            transition: 'opacity 1 0.5s ease-in-out',
          }}
        >
          {text}
        </p>
      )}
    </div>
  );
}

export default Card;
