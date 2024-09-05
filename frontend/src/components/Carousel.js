import React, { useState, useEffect } from 'react';
import str from '../images/Home/itc-1.png';
import is from '../images/Home/ombooks.png';
import sss from '../images/Home/jsw-1.png';
import avs from '../images/Home/cfcl.png';
// import es from '../images/Home/home-carousel-aragen.webp';
import kia from '../images/Home/kia.png'
import AOS from 'aos';
import Slider from "react-slick";
import video from '../images/Home/case-studies.mp4'
import 'aos/dist/aos.css';
// import { Link } from 'react-router-dom';

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <button className="carousel-control-prev" type="button" onClick={onClick} style={{ ...style, display: "block" }}>
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
  );
}

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <button className="carousel-control-next ccn" type="button" onClick={onClick} style={{ ...style, display: "block" }}>
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  );
}


function CaseStudiesCarousel() {
  const [items, setItems] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 1248,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      delay: 500,
      once: true
    });
  }, []);


  useEffect(() => {
    setItems([
      { id: 'jsw', image: sss, title: 'JSW Eye on Pellet', description: 'Eye on Pellet: An innovative instrument for timely estimation of pellet size' },
      { id: 'itc', image: str, title: 'ITC Hotels', description: 'A Close Examination of how SVNT implements Security Protocols at ITC.' },
      { id: 'om', image: is, title: 'Om Books (Statocast)', description: 'Get a closer look at how our cloud-based security keeps every corner covered.' },
      { id: 'kia', image: kia, title: 'Kempagowda International Airport', description: 'Discover how we ensure and uphold airport security' },
      { id: 'cfcl', image: avs, title: 'CFCL', description: 'Find out how we elevate security standards at CFCL Gadepan .' },
      // { id: 'aragen', image: es, title: 'Aragen', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.' },
    ]);
  }, []);


  return (
    <div data-aos='fade-up' id="carouselExampleControls" className="carousel slide">
      <h1>Case Studies</h1>
      <div className="carousel-background">
        <video autoPlay muted playsInline autobuffer="true" controls={false} loop id="myVideo" className="carousel-video">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={item.id} className="home-cs-card noHover" style={{ boxSizing: 'border-box', padding: '10px' }}>
            <div className="home-cs-card-image">
              <img src={item.image} alt="Card" />
            </div>
            <div className="home-cs-card-content">
              <p className="title">{item.title}</p>
              {item.description && <p className="description">{item.description}</p>}
              <button className='hcscard-readmore readmore text-white ' style={{ width: '50%', fontSize: '15px', filter: 'invert(1)' }}
                onClick={() => {
                  window.location.href = `/casestudies?menu=${item.id}`
                }}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CaseStudiesCarousel;
