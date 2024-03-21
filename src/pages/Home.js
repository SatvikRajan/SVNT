import React, { useEffect, useRef, useState } from 'react';
import '../css/carousel.css';

import image1 from '../images/carousel-image1.png';
import image2 from '../images/carousel-image2.png';
import image3 from '../images/carousel-image3.png';
import image4 from '../images/carousel-image4.png';
import Carosuel1 from '../components/Carosuel1';
import CaseStudiesCarousel from '../components/Carousel';
import MainStart from '../components/MainStart';
import WhyChooseUs from '../components/WhyChooseUs';
import WhyWeDoBest from '../components/WhyWeDoBest';
import Clientele from '../components/Clientele';
import LastContent from '../components/LastContent';
export default function Home() {
  function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const timeElapsed = timestamp - startTimestamp;
      const progress = easeInOutQuad(Math.min(timeElapsed / duration, 1));
      element.textContent = Math.floor(progress * (end - start) + start);
      if (timeElapsed < duration) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  // useEffect(() => {
  // const handleScroll = () => {
  //   const logoCircle = document.getElementById('logo-circle');
  //   const rect = logoCircle.getBoundingClientRect();
  //   const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  //   if (rect.top <= viewHeight * 0.75) {
  //     setIsVisible(true);
  //     setTimeout(() => {
  //       setShowNames(true);
  //     }, 2000); // Delay of 2 seconds
  //   }
  // };
  // }, []);

  const [selected, setSelected] = useState(0);
  const cards = [
    {
      id: 1,
      image: image1,
      text: 'To infinity and beyond!One small step for man, One giant leap for mankind Joining forces with ISRO',
    },
    {
      id: 2,
      image: image2,
      text: 'Sky High! See firsthand our collaborative efforts to provide advances surveillance solutions at Kempagowda International Airport',
    },
    { id: 3, image: image3, text: 'Behind the Scenes: Our Role in Safeguarding ITC Royal Bengal' },
    { id: 4, image: image4, text: 'Nestled in the Heart of Hyderabad, where Innovation Meets Culture' },
    {
      id: 5,
      image: image1,
      text: 'To infinity and beyond!One small step for man, One giant leap for mankind Joining forces with ISRO',
    },
    {
      id: 6,
      image: image2,
      text: 'Sky High! See firsthand our collaborative efforts to provide advances surveillance solutions at Kempagowda International Airport',
    },
  ];
  const currentImage = cards[selected] ? cards[selected].image : '';

  return (
    <div className="home">
      {/* Carousel */}
      <div class="carousel1">
        <Carosuel1 currentImage={currentImage} setSelected={setSelected} />
      </div>

      <MainStart />

      <WhyChooseUs />

      <div className="mainpage">
        <WhyWeDoBest />
        <div className="partners">Partners</div>
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
