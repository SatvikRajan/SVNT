import React from 'react';
import '../css/card.css';
import image1 from '../images/Home/carousel-image-1.png';
import image1m from '../images/Home/carousel-image-1m.png';
import image2 from '../images/Home/carousel-image-2.webp';
import image2m from '../images/Home/carousel-image-2m.png';
import image3 from '../images/Home/carousel-image-3.png';
import image3m from '../images/Home/carousel-image-3m.png';
import image4 from '../images/Home/carousel-image-4.webp';
import image4m from '../images/Home/carousel-image-4m.png';
import { Link } from 'react-router-dom';
function Carosuel1() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators c-ind">
        <div type="button" id='carousel-button' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></div>
        <div type="button" id='carousel-button' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></div>
        <div type="button" id='carousel-button' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></div>
        <div type="button" id='carousel-button' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></div>
      </div>
      <div className="carousel-inner cinner">
        <div className="carousel-item ci active" >
          <picture>
            <source media="(max-width: 480px)" srcSet={image1m} />
            <source media="(min-width: 480px)" srcSet={image1} />
            <img
              src={image1}
              className="d-block w-100"
              alt="..."
            />
          </picture>
          <div className="carousel-caption cc1 d-none d-md-block">
            {/* <h1>First slide label</h1> */}
            <h1>Relax, We've Got Your Back Your Security is Our Priority!
            </h1>
            <p style={{ fontSize: '20px', marginTop: '1rem' }}><Link className='readmore text-white' style={{ width: '30%', marginLeft: 'auto', marginStartBLock: 'auto' }} to='/about'>Learn More About Us</Link>
            </p>
            {/* <Link to="/about"><p className='ccr readmore'>Read More</p></Link> */}
          </div>
        </div>
        <div className="carousel-item ci" >
          {/* <imsrc={image4} className="d-block w-100" style={{ backgroundSize: 'cover' }} alt="..." /> */}
          <picture>
            <source media="(max-width: 480px)" srcSet={image2m} />
            <source media="(min-width: 480px)" srcSet={image2} />
            <img
              src={image2}
              className="d-block w-100"
              alt="..."
            />
          </picture>
          <div className="carousel-caption cc1 d-none d-md-block">
            <h1>Join us in celebrating our
              awards and recognition over
              the years!
            </h1>
            <p style={{ fontSize: '20px', marginTop: '1rem' }}><Link className='readmore text-white' style={{ width: '28%', marginLeft: 'auto', marginStartBLock: 'auto' }} to='/contact'>Be an SVNTian</Link>
            </p>
          </div>
        </div>
        <div className="carousel-item ci" >
          <picture>
            <source media="(max-width: 480px)" srcSet={image3m} />
            <source media="(min-width: 480px)" srcSet={image3} />
            <img
              src={image3}
              className="d-block w-100"
              alt="..."
            />
          </picture>
          <div className="carousel-caption cc1 cc2 cc3 d-none d-md-block">
            <h1>Explore our many services designed to meet your needs.
            </h1>
            <p style={{ fontSize: '20px', marginTop: '1rem' }}><Link className='readmore text-white' style={{ width: '28%', marginLeft: 'auto', marginStartBLock: 'auto' }} to='/contact'>Send us a message</Link></p>
          </div>
        </div>
        <div className="carousel-item ci" >
          <picture>
            <source media="(max-width: 480px)" srcSet={image4m} />
            <source media="(min-width: 480px)" srcSet={image4} />
            <img
              src={image4}
              className="d-block w-100"
              alt="..."
            />
          </picture>
          <div className="carousel-caption cc1 cc3 d-none d-md-block">
            <h1>Dive into our case studies and see how we deliver results!
            </h1>
            <p style={{ fontSize: '20px', marginTop: '1rem' }}><Link className='readmore text-white' style={{ width: '60%', marginStartBLock: 'auto' }} to='/about'>Learn more about us</Link></p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev ccb" id='carousel-control-prev' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" id='carousel-control-prev-icon' aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next ccb" id='carousel-control-next' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" id='carousel-control-next-icon' aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carosuel1;
