import React from 'react';
import '../css/carousel.css';
import Carosuel1 from '../components/Carosuel1';
import CaseStudiesCarousel from '../components/Carousel';
import MainStart from '../components/MainStart';
import WhyChooseUs from '../components/WhyChooseUs';
import WhyWeDoBest from '../components/WhyWeDoBest';
import Clientele from '../components/Clientele';
import LastContent from '../components/LastContent';
import '../css/home.css'
import Partners from '../components/Partners';

const Home = () => {
  return (
    <div className="home">
      <div className="carousel1">
        <Carosuel1 />
      </div>

      <MainStart />

      <Clientele />
      <WhyWeDoBest />

      <WhyChooseUs />
      <div className="mainpage">
        <Partners />
        <div className="case-studies">

          <CaseStudiesCarousel />
        </div>
        <LastContent />
      </div>
    </div>
  );
}
export default Home;