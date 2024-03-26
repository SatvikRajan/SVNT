import React, { useState } from 'react';
import '../css/carousel.css';
import image1 from '../images/Home/carousel-image1.png';
import image2 from '../images/Home/carousel-image2.png';
import image3 from '../images/Home/carousel-image3.png';
import image4 from '../images/Home/carousel-image4.png';
import Carosuel1 from '../components/Carosuel1';
import CaseStudiesCarousel from '../components/Carousel';
import MainStart from '../components/MainStart';
import WhyChooseUs from '../components/WhyChooseUs';
import WhyWeDoBest from '../components/WhyWeDoBest';
import Clientele from '../components/Clientele';
import LastContent from '../components/LastContent';
export default function Home() {

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
