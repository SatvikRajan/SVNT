import React, { useEffect } from 'react';
import '../css/about.css';
import ceo from '../images/AboutUs/ceo-image.png';
import '../css/slider.css';
import Managers from '../components/Managers';
import TimeLine from '../components/Timeline'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../images/svnt-logo-black-full.png';
import { Link } from 'react-router-dom'
import AboutCarousel from '../components/AboutCarousel';
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
import Slider from "react-slick";

export const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 300,
      delay: 500
    });
  }, []);
  const settings = {
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 6000,
    rows: 2,
    slidesPerRow: 3,
    cssEase: "linear"
  };

  return (
    <div className="about-us-page">
      <Link className="logo-brand" to="/">
        <img src={Logo} alt="SVNT Tech" height={30} />
      </Link>
      <div className="about-us-head">
        <AboutCarousel />
        {/* <img className='about-img' src={aboutbg} style={{ height: '100%', width: '100vw', objectFit: 'scale-down', marginTop: '1rem' }} alt="" /> */}

      </div>
      <div className="svnt-info" data-aos='fade-up'>
        Established in 2003, SVNT Infotech Pvt Ltd set out on a mission to revolutionize IT infrastructure solutions.
        Our philosophy is to combine international technology with local expertise to tailor solutions to clients needs. Driven by excellence, we aim to lead the global market in networking and communication solutions.
      </div>

      <TimeLine />

      <div className="ceo d-flex">
        <div className="ceo-text">
          <h1 className="fs-1 ceo-text-head mb-3" data-aos='fade-down'>Meet Our Managing Director </h1>
          <p className="ceo-text-p w-75" data-aos='fade-right'>
            Opportunities don’t come knocking at your door, you must build your own door
          </p>
        </div>
        <div className="ceo-photo" data-aos='fade-left'>
          <img className='ceo-photo-1' src={ceo} alt="" />
        </div>
      </div>

      <Managers />
      <div className='about-clients'>
        <h1 className='client-h1'>Clients</h1>
        <div className="slider-container" style={{ marginTop: '4rem', textAlign: '-webkit-center',  marginBottom: '5rem' }}>
          <Slider {...settings}>
            <div>
              <img src={aequs} alt="" />
            </div>
            <div>
              <img src={allergan} alt="" />
            </div>
            <div>
              <img src={ampath} alt="" />
            </div>
            <div>
              <img src={kia} alt="" />
            </div>
            <div>
              <img src={brigade} alt="" />
            </div>
            <div>
              <img src={esl} alt="" />
            </div>
            <div>
              <img src={gd} alt="" />
            </div>
            <div>
              <img src={akn} alt="" />
            </div>
            <div>
              <img src={hc} alt="" />
            </div>
            <div>
              <img src={itc} alt="" />
            </div>
            <div>
              <img src={indigo} alt="" />
            </div>
            <div>
              <img src={afio} alt="" />
            </div>
            <div>
              <img src={abg} alt="" />
            </div>
            <div>
              <img src={gm} alt="" />
            </div>
            <div>
              <img src={britannia} alt="" />
            </div>
            <div>
              <img src={vedanta} alt="" />
            </div>
            <div>
              <img src={itc} alt="" />
            </div>
            <div>
              <img src={hc} alt="" />
            </div>
          </Slider>
        </div>
      </div>

    </div>
  );
};