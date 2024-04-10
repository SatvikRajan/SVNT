import React, { useEffect, useState } from 'react';
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

function Carosuel1() {
  return (
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={image4} class="d-block w-100" style={{backgroundSize: 'contain'}} alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h1>First slide label</h1>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
        </div>
        <div class="carousel-item">
          <img src={image2} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h1>Second slide label</h1>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
        </div>
        <div class="carousel-item">
          <img src={image3} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h1>Third slide label</h1>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carosuel1;
