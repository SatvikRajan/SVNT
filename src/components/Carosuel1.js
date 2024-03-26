import React, { useEffect, useState } from 'react';
import Card from './Card';
import '../css/card.css';
import image1 from '../images/Home/carousel-image1.png';
import image2 from '../images/Home/carousel-image2.png';
import image3 from '../images/Home/carousel-image3.png';
import image4 from '../images/Home/carousel-image4.png';

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

function Carosuel1({ currentImage }) {
  const [cardsState, setCardsState] = useState(cards);
  const [selected, setSelected] = React.useState(1);

  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setSelected((s) => s + 1);
    setTimeout(() => {
      setCardsState((c) => {
        const arr = [...c];
        return [...c.slice(1, c.length), arr[0]];
      });
      setSelected((s) => s - 1);
    }, 500);
  };

  const prevSlide = () => {
    setSelected((s) => s - 1);
    setTimeout(() => {
      setCardsState((c) => {
        const arr = [...c];
        return [arr[arr.length - 1], ...c.slice(0, arr.length - 1)];
      });
      setSelected((s) => s + 1);
    }, 500);
  };

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(autoplayInterval);
  }, []);

  return (
    <div className="outer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="container10">
        <div
          className="carousellll"
          style={{
            transform: `translate(${selected * (-55.5 / cards.length)}%)`,
          }}
        >
          {cardsState.map((card, i) => (
            <Card key={card.id + '-' + i} current={i === selected} image={card.image} text={card.text} />
          ))}
        </div>
        {isHovered && (
          <>
            <div className="left-button" onClick={prevSlide}></div>
            <div className="right-button" onClick={nextSlide}></div>
          </>
        )}
      </div>
    </div>
  );
}

export default Carosuel1;
