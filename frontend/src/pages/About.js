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
import jsw from '../images/AboutUs/jsw.svg'
import jcb from '../images/AboutUs/jcb.svg'
import lat from '../images/AboutUs/lat.svg'
import mahindra from '../images/AboutUs/mahindra.svg'

import aboutbg from '../images/AboutUs/about-bg.jpg';

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
    autoplaySpeed: 10,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 6000,
    rows: 2,
    slidesPerRow: 2,
    cssEase: "linear",
    outline: false
  };



  return (
    <div className="about-us-page">
      <div className="about-us-head">
        {/* <AboutCarousel /> */}
        <img className='about-img' src={aboutbg} style={{ height: '100%', width: '100%', objectFit: 'scale-down', marginTop: '0.2rem' }} alt="" />
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
          <h1 className="fs-1 ceo-text-head" style={{marginBottom: '2rem'}} data-aos='fade-down'>Meet Our Managing Director </h1>
          <p className="ceo-text-p w-75" style={{marginBottom: '2rem'}} data-aos='fade-right'>
            “User experience is everything. It always has been, but it's still undervalued and under-invested in. If you don't know user-centered design, study it. Hire people who know it. Obsess over it. Live and breathe it. ”
          </p>
          <h1 style={{float: 'inline-end'}}>- Mr. V G Salimath</h1>
        </div>
        <div className="ceo-photo" data-aos='fade-left'>
          <img className='ceo-photo-1' src={ceo} alt="" />
        </div>
      </div>

      <Managers />
      <div className='about-clients'>
        <h1 className='client-h1'>Clients</h1>
        <div className="slider-container" style={{ marginTop: '4rem', textAlign: '-webkit-center', marginBottom: '5rem' }}>
          <Slider {...settings}>
            <div>
              <img height={300} src={aequs} alt="" />
            </div>
            <div>
              <img height={300} src={allergan} alt="" />
            </div>
            <div>
              <img height={300} src={ampath} alt="" />
            </div>
            <div>
              <img height={300} src={kia} alt="" />
            </div>
            <div>
              <img height={300} src={brigade} alt="" />
            </div>
            <div>
              <img height={300} src={esl} alt="" />
            </div>
            <div>
              <img height={300} src={gd} alt="" />
            </div>
            <div>
              <img height={300} src={akn} alt="" />
            </div>
            <div>
              <img height={300} src={hc} alt="" />
            </div>
            <div>
              <img height={300} src={itc} alt="" />
            </div>
            <div>
              <img height={300} src={indigo} alt="" />
            </div>
            <div>
              <img height={300} src={afio} alt="" />
            </div>
            <div>
              <img height={300} src={abg} alt="" />
            </div>
            <div>
              <img height={300} src={gm} alt="" />
            </div>
            <div>
              <img height={300} src={britannia} alt="" />
            </div>
            <div>
              <img height={300} src={vedanta} alt="" />
            </div>
            <div>
              <img height={300} src={jsw} alt="" />
            </div>
            <div>
              <img height={300} src={mahindra} alt="" />
            </div>
            <div>
              <img height={300} src={jcb} alt="" />
            </div>
            <div>
              <img height={300} src={lat} alt="" />
            </div>
          </Slider>
        </div>
      </div>

    </div>
  );
};