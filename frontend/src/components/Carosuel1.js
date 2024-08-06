import React from 'react';
import '../css/card.css';
import image1 from '../images/Home/carousel-image-1.webp';
import image1m from '../images/Home/carousel-image-1m.webp';
import image2 from '../images/Home/carousel-image-2.webp';
import image2m from '../images/Home/carousel-image-2m.webp';
import image3 from '../images/Home/carousel-image-3.webp';
import image3m from '../images/Home/carousel-image-3m.webp';
import image4 from '../images/Home/carousel-image-4.webp';
import image4m from '../images/Home/carousel-image-4m.webp';
import { Link } from 'react-router-dom';
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
            <source media="(max-width: 480px)" srcSet={image1m} />
            <source media="(min-width: 480px)" srcSet={image1} />
            <img
              src={image1}
              className="d-block w-100"
              alt="..."
            />
          </picture>
          <div class="carousel-caption cc1 d-none d-md-block">
            {/* <h1>First slide label</h1> */}
            <h1 style={{ width: '60%', fontSize: '40px', lineHeight: '4rem', color: 'white' }}>Relax, We've Got Your Back Your Security is Our Priority!
            </h1>
            <p style={{ fontSize: '20px', marginTop: '1rem' }}><Link className='readmore text-white' style={{ width: '30%', marginLeft: 'auto', marginStartBLock: 'auto' }} to='/contact'>Send us a message</Link>
            </p>
            {/* <Link to="/about"><p className='ccr readmore'>Read More</p></Link> */}
          </div>
        </div>
        <div class="carousel-item ci" >
          {/* <imsrc={image4} class="d-block w-100" style={{ backgroundSize: 'cover' }} alt="..." /> */}
          <picture>
            <source media="(max-width: 480px)" srcSet={image2m} />
            <source media="(min-width: 480px)" srcSet={image2} />
            <img
              src={image2}
              className="d-block w-100"
              alt="..."
            />
          </picture>
          <div class="carousel-caption cc1 d-none d-md-block">
            <h1 style={{ width: '60%', fontSize: '40px', color: 'white', lineHeight: '4rem' }}>Join us in celebrating our
              awards and recognition over
              the years!
            </h1>
            <p style={{ fontSize: '20px', marginTop: '1rem' }}><Link className='readmore text-white' style={{ width: '28%', marginLeft: 'auto', marginStartBLock: 'auto' }} to='/contact'>Send us a message</Link>
            </p>
          </div>
        </div>
        <div class="carousel-item ci" >
          <picture>
            <source media="(max-width: 480px)" srcSet={image3m} />
            <source media="(min-width: 480px)" srcSet={image3} />
            <img
              src={image3}
              className="d-block w-100"
              alt="..."
            />
          </picture>
          <div class="carousel-caption cc1 cc2 d-none d-md-block">
            <h1 style={{ width: '50%', lineHeight: '4rem', color: 'white', marginBottom: '1rem' }}>Explore our many services designed to meet your needs.
            </h1>
            <p style={{ fontSize: '20px', marginTop: '1rem' }}><Link className='readmore text-white' style={{ width: '28%', marginLeft: 'auto', marginStartBLock: 'auto' }} to='/contact'>Send us a message</Link></p>
          </div>
        </div>
        <div class="carousel-item ci" >
          <picture>
            <source media="(max-width: 480px)" srcSet={image4m} />
            <source media="(min-width: 480px)" srcSet={image4} />
            <img
              src={image4}
              className="d-block w-100"
              alt="..."
            />
          </picture>
          <div class="carousel-caption cc1 d-none d-md-block">
            <h1 style={{ width: '60%', lineHeight: '4rem', color: 'white' }}>Dive into our case studies and see how we deliver results!
            </h1>
            <p style={{ fontSize: '20px', marginTop: '1rem' }}><Link className='readmore text-white' style={{ width: '28%', marginLeft: 'auto', marginStartBLock: 'auto' }} to='/about'>Learn more about us</Link></p>
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
