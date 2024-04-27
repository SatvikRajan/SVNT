import React, { useEffect } from 'react';
import '../css/about.css';
import ceo from '../images/AboutUs/ceo-image.png';
import '../css/slider.css';
import Managers from '../components/Managers';
import TimeLine from '../components/Timeline'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../images/svnt-logo-white-full.png';
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

export const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 300,
      delay: 200
    });
  }, []);

  return (
    <div className="about-us-page">
      <Link className="logo-brand" to="/">
          <img src={Logo} alt="SVNT Tech" height={30} />
      </Link>
      <div className="about-us-head">
        <AboutCarousel />
        {/* <img className='about-img' src={aboutbg} style={{ height: '100%', width: '100vw', objectFit: 'scale-down', marginTop: '1rem' }} alt="" /> */}
        <p className="about-us-head-name">
          Integrated Solutions,
          <br /> Empowered Choices
        </p>
        <p className="about-us-head-name1">We are the Blueprint</p>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. nisi ut aliquip exmmodo consequat. Duis aute irure dolor.
          </p>
        </div>
        <div className="ceo-photo" data-aos='fade-left'>
          <img className='ceo-photo-1' src={ceo} alt="" /> 
        </div>
      </div>

      <Managers />
      <div className="slides" data-aos='fade-down'>
        <div class="slider">
          <div class="slide-track">
            <div class="slide-1">
              <img className="me" src={aequs} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={allergan} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={ampath} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={kia} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={brigade} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={esl} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={gd} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={akn} alt="" />
            </div>
          </div>
          <br/>
        <br/>
        <br/>
        </div>
       
        <div class="slider">
          <div class="slide-track">
            <div class="slide-1">
              <img className="me" src={hc} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={itc} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={indigo} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={afio} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={abg} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={gm} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={britannia} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={vedanta} alt="" />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        {/* <div class="slider">
          <div class="slide-track">
            <div class="slide-1">
              <img className="me" src={itc} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={gm} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={itc} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={gm} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={itc} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={gm} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={itc} alt="" />
            </div>
            <div class="slide-1">
              <img className="me" src={gm} alt="" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};