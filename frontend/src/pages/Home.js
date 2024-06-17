import React, { useState } from 'react';
import '../css/carousel.css';
import Carosuel1 from '../components/Carosuel1';
import CaseStudiesCarousel from '../components/Carousel';
import MainStart from '../components/MainStart';
import WhyChooseUs from '../components/WhyChooseUs';
import WhyWeDoBest from '../components/WhyWeDoBest';
import Clientele from '../components/Clientele';
import LastContent from '../components/LastContent';
import '../css/home.css'
import Logo from '../images/svnt-logo-white-full.png';
import { Link } from 'react-router-dom'
import Partners from './Partners';

export default function Home() {


  return (
    <div className="home">
      {/* Carousel */}

      <div class="carousel1">
        <Carosuel1 />
      </div>

      <MainStart />

      <Clientele />
      <WhyWeDoBest />
      <WhyChooseUs />

      <div className="mainpage">
        <Partners/>
        <div className="case-studies">
          <h1>Case Studies</h1>
          <CaseStudiesCarousel />
          {/* <a className='ms-auto' href="">Read More</a> */}
        </div>
        <LastContent />
      </div>
    </div>
  );
}