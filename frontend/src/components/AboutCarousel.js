import React from 'react';
import Slider from 'react-slick';
import aboutbg from '../images/AboutUs/about-bg.jpg';
import aboutbg1 from '../images/AboutUs/about-bg1';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AboutCarousel() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const headings = ["Heading 1", "Heading 2"]; // Add your desired headings here

  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          <div >
            <img className='about-img' src={aboutbg} alt="" />
            <h2 className='about-img-h'>{headings[0]}</h2>
          </div>
          <div style={{position: 'relative'}}>
            <img className='about-img'  src={aboutbg1} alt="" />
            <h2 style={{position: 'absolute'}} className='about-img-h'>{headings[1]}</h2>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default AboutCarousel;
