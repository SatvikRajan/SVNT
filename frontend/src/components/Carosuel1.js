import React from 'react';
import '../css/card.css';
import image1 from '../images/Home/carousel-image-1.jpg';
import image1m from '../images/Home/carousel-image1m.jpg';
import image2 from '../images/Home/carousel-image-2.png';

function Carosuel1() {
  return (
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators c-ind">
        <div type="button" id='carousel-button' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></div>
        <div type="button" id='carousel-button' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></div>
        <div type="button" id='carousel-button' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></div>
        <div type="button" id='carousel-button' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></div>
      </div>
      <div class="carousel-inner cinner">
        <div class="carousel-item ci active" >
          <picture>
            <source media="(max-width: 425px)" srcSet={image1m} />
            <source media="(min-width: 426px)" srcSet={image1} />
            <img
              src={image1}
              className="d-block w-100"
              alt="..."
            />
          </picture>
          <div class="carousel-caption cc1 d-none d-md-block">
            {/* <h1>First slide label</h1> */}
            <h1 style={{ width: '60%', fontSize: '40px', lineHeight: '4rem' }}>Relax, We've Got Your Back
              Your Security is Our Priority!
            </h1>
            <p style={{ fontSize: '20px', marginTop: '2rem' }}><a className='readmore text-white' style={{ width: '30%' }} href='/contact'>Send us a message</a>
            </p>
            {/* <a href="/about"><p className='ccr text-white readmore'>Read More</p></a> */}
          </div>
        </div>
        <div class="carousel-item ci" >
          {/* <img src={image4} class="d-block w-100" style={{ backgroundSize: 'cover' }} alt="..." /> */}
          <picture>
            <source media="(max-width: 425px)" srcSet={image2} />
            <source media="(min-width: 426px)" srcSet={image2} />
            <img
              src={image2}
              className="d-block w-100"
              alt="..."
            />
          </picture>
          <div class="carousel-caption cc1 d-none d-md-block">
            <h1 style={{ width: '60%', fontSize: '40px', color: 'black', lineHeight: '4rem' }}>Join us in celebrating our
              awards and recognition over
              the years!
            </h1>
            <p style={{ fontSize: '20px', marginTop: '1rem' }}><a className='readmore text-white' style={{ width: '30%', filter: 'invert(1)' }} href='/contact'>Send us a message</a>
            </p>
          </div>
        </div>
        <div class="carousel-item ci" >
          {/* <img src={image4} class="d-block w-100" style={{ backgroundSize: 'cover' }} alt="..." /> */}
          <picture>
            <source media="(max-width: 425px)" srcSet={image1m} />
            <source media="(min-width: 426px)" srcSet={image1} />
            <img
              src={image1}
              className="d-block w-100"
              alt="..."
            />
          </picture>
          <div class="carousel-caption cc1 d-none d-md-block">
            <h1 style={{ width: '60%', lineHeight: '4rem' }}>Relax, We've Got Your Back
              Your Security is Our Priority!
            </h1>
            <p>Send us a message
            </p>
          </div>
        </div>
        <div class="carousel-item ci" >
          {/* <img src={image4} class="d-block w-100" style={{ backgroundSize: 'cover' }} alt="..." /> */}
          <picture>
            <source media="(max-width: 425px)" srcSet={image1m} />
            <source media="(min-width: 426px)" srcSet={image1} />
            <img
              src={image1}
              className="d-block w-100"
              alt="..."
            />
          </picture>
          <div class="carousel-caption cc1 d-none d-md-block">
            <h1 style={{ width: '60%', lineHeight: '4rem' }}>Relax, We've Got Your Back
              Your Security is Our Priority!
            </h1>
            <p>Send us a message
            </p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev ccb" id='carousel-control-prev' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" id='carousel-control-prev-icon' aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next ccb" id='carousel-control-next' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" id='carousel-control-next-icon' aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carosuel1;
