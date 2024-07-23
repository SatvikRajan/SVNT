import React, { useEffect, useState } from 'react';
import '../css/about.css';
import ceo from '../images/AboutUs/ceo-image.png';
import '../css/slider.css';
import Managers from '../components/Managers';
import TimeLine from '../components/Timeline'
import AOS from 'aos';
import 'aos/dist/aos.css';
import aequs from '../images/AboutUs/client-aequs.svg'
import allergan from '../images/AboutUs/client-allergan.svg'
import ampath from '../images/AboutUs/client-ampath.svg'
import kia from '../images/AboutUs/client-kia.svg'
import brigade from '../images/AboutUs/client-brigade.svg'
import esl from '../images/AboutUs/client-esl.svg'
import gd from '../images/AboutUs/client-gd.svg'
import akn from '../images/AboutUs/client-akn.svg'
import hc from '../images/AboutUs/client-hc.svg'
import itc from '../images/AboutUs/client-itc.svg'
import indigo from '../images/AboutUs/client-indigo.svg'
import afio from '../images/AboutUs/client-afio.svg'
import abg from '../images/AboutUs/client-abg.svg'
import gm from '../images/AboutUs/client-gm.svg'
import britannia from '../images/AboutUs/client-britannia.svg'
import vedanta from '../images/AboutUs/client-vedanta.svg'
import jsw from '../images/AboutUs/jsw.svg'
import jcb from '../images/AboutUs/jcb.svg'
import lat from '../images/AboutUs/lat.svg'
import mahindra from '../images/AboutUs/mahindra.svg'

import aboutbg from '../images/AboutUs/about-bg-video.mp4';
import aboutbgm from '../images/AboutUs/about-bgm.jpg';

import Slider from "react-slick";

export const About = () => {
  const [activeClientType, setActiveClientType] = useState('All');
  const clients = {
    All: [
      { src: aequs, alt: 'Aequs' },
      { src: allergan, alt: 'Allergan' },
      { src: lat, alt: 'LAT' },
      { src: jcb, alt: 'JCB' },
      { src: vedanta, alt: 'vedanta' },
      { src: britannia, alt: 'britannia' },
      { src: gm, alt: 'gm' },
      { src: abg, alt: 'abg' },
      { src: brigade, alt: 'abg' },
      { src: gd, alt: 'abg' },
      { src: akn, alt: 'abg' },
      { src: hc, alt: 'abg' },
      { src: mahindra, alt: 'abg' },
      { src: itc, alt: 'abg' },
      { src: indigo, alt: 'abg' },
      { src: indigo, alt: 'abg' },
      // Add all clients here
    ],
    Power: [
      { src: ampath, alt: 'Power Client 1' },
      { src: kia, alt: 'Power Client 2' },
      // Add power clients here
    ],
    Pharma: [
      { src: esl, alt: 'Pharma Client 1' },
      { src: jsw, alt: 'Pharma Client 2' },
      // Add pharma clients here
    ],
    Zinc: [
      { src: '../images/AboutUs/client-esl.svg', alt: 'Zinc Client 1' },
      { src: '../images/AboutUs/jcb.svg', alt: 'Zinc Client 2' },
      // Add pharma clients here
    ],
    Hotels: [
      { src: '../images/AboutUs/client-esl.svg', alt: 'Hotels Client 1' },
      { src: '../images/AboutUs/jcb.svg', alt: 'Hotels Client 2' },
      // Add pharma clients here
    ],
    Tobacco: [
      { src: '../images/AboutUs/client-esl.svg', alt: 'Tobacco Client 1' },
      { src: '../images/AboutUs/jcb.svg', alt: 'Tobacco Client 2' },
      // Add pharma clients here
    ],
    Foods: [
      { src: '../images/AboutUs/client-esl.svg', alt: 'Foods Client 1' },
      { src: '../images/AboutUs/jcb.svg', alt: 'Foods Client 2' },
      // Add pharma clients here
    ],
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
      delay: 500
    });
  }, []);
  const settings = {
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 2,
    speed: 600,
    rows: 4,
    slidesPerRow: 2,
    cssEase: "linear",
    outline: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          rows: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  };


  return (
    <div className="about-us-page">
      <div className="about-us-head">
        {/* <AboutCarousel /> */}
        {/* <img className='about-img' src={aboutbg} style={{ height: '100%', width: '100%', objectFit: 'scale-down' }} alt="" /> */}
        <video style={{width: '100%', height: '100%'}} autoPlay muted preload="auto">
          <source src={aboutbg} type="video/mp4" />
        </video>
        {/* <h2  className='img-info'>
          Integrated Solutions, Empowered Choices
          <br />
          <p> </p>
          <span id='img-info-span'>We are the Blueprint</span>
        </h2> */}
      </div>
      <div className="svnt-info" data-aos='fade-up'>
        <h1 style={{ paddingBottom: '2rem' }}>About Us</h1>
        Established in 2003, SVNT Infotech Pvt Ltd set out on a mission to revolutionize IT infrastructure solutions.
        Our philosophy is to combine international technology with local expertise to tailor solutions to clients needs. Driven by excellence, we aim to lead the global market in networking and communication solutions.
      </div>

      <TimeLine />

      <div className="ceo d-flex">
        <div className="ceo-text">
          <h1 className="fs-1 ceo-text-head" style={{ marginBottom: '2rem' }} data-aos='fade-down'>Meet Our Managing Director </h1>
          <p className="ceo-text-p w-75" style={{ marginBottom: '2rem' }} data-aos='fade-right'>
            “User experience is everything. It always has been, but it's still undervalued and under-invested in. If you don't know user-centered design, study it. Hire people who know it. Obsess over it. Live and breathe it. ”
          </p>
          <h1 style={{ float: 'inline-end' }}>- Mr. V G Salimath</h1>
        </div>
        <div className="ceo-photo" data-aos='fade-left'>
          <img className='ceo-photo-1' src={ceo} alt="" />
        </div>
      </div>

      <Managers />
      <div className='about-clients'>
        <h1 className='client-h1'>Clients</h1>
        <div className="client-container">
          <div className="about-client-type">
            {Object.keys(clients).map((clientType) => (
              <p
                key={clientType}
                onClick={() => setActiveClientType(clientType)}
                className={activeClientType === clientType ? 'active' : ''}
              >
                {clientType}
              </p>
            ))}
          </div>


          <div className="slider-container">
            <Slider {...settings}>
              {clients[activeClientType].map((client, index) => (
                <div key={index}>
                  <img height={150} src={client.src} alt={client.alt} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

    </div>
  );
};