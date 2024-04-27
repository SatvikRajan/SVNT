import React, { useEffect, useState } from 'react';
import '../css/card.css';
import image1 from '../images/Home/carousel-image1.png';
import image2 from '../images/Home/carousel-image2.png';
import image3 from '../images/Home/carousel-image3.png';
import image4 from '../images/Home/carousel-image4.png';

function Carosuel1() {
  return (
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" id='carousel-button' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" id='carousel-button' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" id='carousel-button' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" id='carousel-button' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" >
          <img src={image1} class="d-block w-100" style={{ backgroundSize: 'cover' }} alt="..." />
          <div class="carousel-caption cc1 d-none d-md-block">
            {/* <h1>First slide label</h1> */}
            <p>Behind the Scenes: Our Role in<br /> Safeguarding ITC Royal Bengal</p>
          </div>
        </div>
        <div class="carousel-item" >
          <img src={image2} class="d-block w-100" alt="..." />
          <div class="carousel-caption cc2 d-none d-md-block">
            {/* <h1>Second slide label</h1> */}
            <p >Nestled in the Heart of Hyderabad ,<br /> where Innovation Meets Culture.</p>
          </div>
        </div>
        <div class="carousel-item" >
          <img src={image3} class="d-block w-100" alt="..." />
          <div class="carousel-caption cc3 d-none d-md-block">
            {/* <h1>Third slide label</h1> */}
            <p>Sky High!<br/>
              Discover our vital contribution to ensuring<br/> security at Kempagowda International Airport</p>
          </div>
        </div>
        <div class="carousel-item" >
          <img src={image3} class="d-block w-100" alt="..." />
          <div class="carousel-caption cc4 d-none d-md-block">
            {/* <h1>Third slide label</h1> */}
            <p>Sky High! Discover our vital contribution to ensuring security at Kempagowda International Airport</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" id='carousel-control-prev' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" id='carousel-control-prev-icon' aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" id='carousel-control-next' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" id='carousel-control-next-icon' aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carosuel1;
