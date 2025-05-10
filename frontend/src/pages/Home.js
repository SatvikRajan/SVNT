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
import { Helmet } from 'react-helmet';
const Home = () => {
  return (
    <>
      <Helmet>
        <title>SVNT Infotech – Innovative Technology Solutions</title>
        <meta
          name="description"
          content="Welcome to SVNT Infotech, your partner for smart wearable and digital technology solutions."
        />
        <link rel="canonical" href="https://svntech.com/" />
      </Helmet>

      <div className="home">
        <div className="carousel1">
          <Carosuel1 />
        </div>

        <MainStart />

        <Clientele />
        <WhyWeDoBest />

        <div className="mainpage">
          <Partners />
          <div className="case-studies">

            <CaseStudiesCarousel />
          </div>
          <WhyChooseUs />
          <LastContent />
        </div>
      </div>
    </>
  );
}
export default Home;