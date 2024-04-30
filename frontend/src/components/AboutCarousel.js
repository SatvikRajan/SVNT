import React from 'react';
import Slider from 'react-slick';
import aboutbg from '../images/AboutUs/about-bg.webp';
import aboutbg1 from '../images/AboutUs/about-bg1.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AboutCarousel() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    outline: false
  };

  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img   className='about-img' src={aboutbg} alt="" />
            {/* <h2 style={{position: 'absolute', top: '70%', left: '42%', fontSize: '42px', fontWeight: '400'}}>Integrated Solutions,<br/> Empowered Choices</h2> */}
          </div>
          <div >
            <img style={{position: 'relative'}} className='about-img'  src={aboutbg1} alt="" />
            <h2 style={{position: 'absolute', top: '70%', left: '42%'}}>Integrated Solutions,<br/> Empowered Choices</h2>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default AboutCarousel;
