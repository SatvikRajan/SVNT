import React, { useEffect } from 'react';
import ips from '../images/ips.png';
import ipn from '../images/ipn.png';
import str from '../images/str.png';
import sms from '../images/sms';
import is from '../images/is.png';
import sss from '../images/sss';
import avs from '../images/avs.png';
import es from '../images/es.png';
function CaseStudiesCarousel() {
  useEffect(() => {
    const multipleCardCarousel = document.querySelector('#carouselExampleControls');
    if (window.matchMedia('(min-width: 768px)').matches) {
      const carouselWidth = document.querySelector('.carousel-inner').scrollWidth;
      const cardWidth = document.querySelector('.carousel-item5').clientWidth;
      let scrollPosition = 0;

      document.querySelector('#carouselExampleControls .carousel-control-next').addEventListener('click', () => {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
          scrollPosition += cardWidth;
          document.querySelector('#carouselExampleControls .carousel-inner').scrollTo({
            left: scrollPosition,
            behavior: 'smooth',
          });
        }
      });

      document.querySelector('#carouselExampleControls .carousel-control-prev').addEventListener('click', () => {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          document.querySelector('#carouselExampleControls .carousel-inner').scrollTo({
            left: scrollPosition,
            behavior: 'smooth',
          });
        }
      });
    } else {
      multipleCardCarousel.classList.add('slide');
    }
  }, []);

  return (
    <div id="carouselExampleControls" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item5 active">
          <div className="card-1">
            <img src={ips} alt="" />
            <div className="card-content">
              <h2>Genpact</h2>
              <p style={{ fontSize: '20px', textAlign: 'left' }}>
                Optimizing Meetings with LED Panel Video Wall Installation
              </p>
              <a style={{ textAlign: 'right' }} href="" className="readmore">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item5">
          <div className="card-1">
            <img src={ipn} alt="" />
            <div className="card-content">
              <h2>BIAL</h2>
              <p style={{ fontSize: '20px', textAlign: 'left' }}>
                Delve into Security Implementation at Kempagowda International Airport
              </p>
              <a href="" className="readmore">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item5">
          <div className="card-1">
            <img src={str} alt="" />
            <div className="card-content">
              <h2>ITC Hotels</h2>
              <p style={{ fontSize: '20px', textAlign: 'left' }}>
                A Close Examination of how SVNT implements Security Protocols at ITC.{' '}
              </p>
              <a href="" className="readmore">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item5">
          <div className="card-1">
            <img src={sms} alt="" />
            <div className="card-content">
              <h2>BEL(Rafael)</h2>
              <p style={{ fontSize: '20px', textAlign: 'left' }}>
                Explore the realm of security and management solutions, vital for safeguarding businesses against
                threats.
              </p>
              <a href="" className="readmore">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item5">
          <div className="card-1">
            <img src={is} alt="" />
            <div className="card-content">
              <h2>Om Books (Statocast)</h2>
              <p style={{ fontSize: '20px', textAlign: 'left' }}>
                Optimize efficiency with our integration solutions, merging systems for seamless communication and
                collaboration.
              </p>
              <a href="" className="readmore">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item5">
          <div className="card-1">
            <img src={sss} alt="" />
            <div className="card-content">
              <h2>JSW Eye on Pellet</h2>
              <p style={{ fontSize: '20px', textAlign: 'left' }}>
                Our systems provide comprehensive monitoring and detection capabilities, ensuring prompt response to
                potential threats.
              </p>
              <a href="" className="readmore">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item5">
          <div className="card-1">
            <img src={avs} alt="" />
            <div className="card-content">
              <h2>CFCL</h2>
              <p style={{ fontSize: '20px', textAlign: 'left' }}>
                Elevate communication and engagement with our audio-visual solutions.
              </p>
              <a href="" className="readmore">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item5">
          <div className="card-1">
            <img src={es} alt="" />
            <div className="card-content">
              <h2>Aragen</h2>
              <p style={{ fontSize: '20px', textAlign: 'left' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </p>
              <a href="" className="readmore">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon left-button" style={{border: '1px solid white', borderRadius: '30px'}} aria-hidden="true"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon right-button" style={{border: '1px solid white', borderRadius: '30px'}} aria-hidden="true"></span>
      </button>
    </div>
  );
}

export default CaseStudiesCarousel;
