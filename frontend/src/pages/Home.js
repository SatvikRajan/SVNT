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

export default function Home() {


  return (
    <div className="home">
      {/* Carousel */}
      <div class="carousel1">
        <Carosuel1/>
      </div>

      <MainStart />

      <WhyChooseUs />

      <div className="mainpage">
        <WhyWeDoBest />
        <div className="partners" style={{fontSize: '42px'}}>Partners</div>
        <div className="case-studies">
          <h1>Case Studies</h1>
          <CaseStudiesCarousel />
        </div>
        <Clientele />
        <LastContent />
      </div>
    </div>
  );
}
