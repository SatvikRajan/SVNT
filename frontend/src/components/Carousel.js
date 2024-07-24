import React, { useState, useRef, useEffect } from 'react';
import ips from '../images/Home/home-carousel-bial.webp';
import ipn from '../images/Home/home-carousel-genpact 1.png';
import str from '../images/Home/home-carousel-itc.webp';
import sms from '../images/Home/home-carousel-bel';
import is from '../images/Home/home-carousel-statocast.webp';
import sss from '../images/Home/home-carousel-eyeon.webp';
import avs from '../images/Home/home-carousel-cfcl.webp';
import es from '../images/Home/home-carousel-aragen.webp';
import AOS from 'aos';
import Slider from "react-slick";
import video from '../images/Home/case-studies.mp4'
import 'aos/dist/aos.css';

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button className="carousel-control-prev" type="button" onClick={onClick} style={{ ...style, display: "block" }}>
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button className="carousel-control-next" type="button" onClick={onClick} style={{ ...style, display: "block" }}>
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
      { id: 0, image: sss, title: 'JSW Eye on Pellet', description: 'Delve into the revolutionary world of pelletization plants through real time system integration.' },
      { id: 3, image: str, title: 'ITC Hotels', description: 'A Close Examination of how SVNT implements Security Protocols at ITC.' },
      { id: 4, image: sms, title: 'BEL(Rafael)', description: 'Explore the realm of security and management solutions, vital for safeguarding businesses against threats.' },
      // { id: 1, image: ips, title: '', description: '' },
      // { id: 2, image: ipn, title: '', description: '' },
      { id: 5, image: is, title: 'Om Books (Statocast)', description: 'Optimize efficiency with our integration solutions, merging systems for seamless communication and collaboration.' },
      { id: 6, image: avs, title: 'CFCL', description: 'Elevate communication and engagement with our audio-visual solutions.' },
      { id: 7, image: es, title: 'Aragen', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.' },
      { id: 0, image: sss, title: 'JSW Eye on Pellet', description: 'Delve into the revolutionary world of pelletization plants through real time system integration.' },
    ]);
  }, []);


  return (
    <div data-aos='fade-up' id="carouselExampleControls" className="carousel slide">
      <h1>Case Studies</h1>
      <div className="carousel-background">
        <video autoPlay muted loop id="myVideo" className="carousel-video">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      {/* <div className="carousel-inner1" ref={carouselRef} style={{ display: 'flex', overflow: 'hidden' }}>
        <div className="carousel-track ct-1" style={{ display: 'flex', transition: 'transform 0.5s', transform: `translateX(-${currentSlide * 10 / cardsPerSlide}%)` }}> */}
      {/* {items.map((item, index) => (
            <div key={item.id} className="home-cs-card" style={{ boxSizing: 'border-box', padding: '10px' }}>
              <div className="home-cs-card-image">
                <img src={item.image} alt="Card Image" />
              </div>
              <div className="home-cs-card-content">
                <p className="title">{item.title}</p>
                {item.description && <p className="description">{item.description}</p>}
                <a className='hcscard-readmore readmore text-white' style={{ width: '60%', fontSize: '15px', filter: 'invert(1)' }} href='/contact'>Read More</a>
              </div>
            </div>
          ))} */}
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={item.id} className="home-cs-card" style={{ boxSizing: 'border-box', padding: '10px' }}>
            <div className="home-cs-card-image">
              <img src={item.image} alt="Card Image" />
            </div>
            <div className="home-cs-card-content">
              <p className="title">{item.title}</p>
              {item.description && <p className="description">{item.description}</p>}
              <a className='hcscard-readmore readmore text-white' style={{ width: '50%', fontSize: '15px', filter: 'invert(1)' }} href='/contact'>Read More</a>
            </div>
          </div>
        ))}
      </Slider>
      {/* </div>
      </div> */}



    </div>
  );
}

export default CaseStudiesCarousel;
