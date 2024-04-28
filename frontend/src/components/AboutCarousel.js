import React from 'react'
import Slider from "react-slick";
import aboutbg from '../images/AboutUs/about-bg.jpg'
import aboutbg1 from '../images/AboutUs/about-bg1'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AboutCarousel() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <div className="slider-container" >
        <Slider {...settings}>
          <div>
            <img className='about-img' src={aboutbg} alt="" />
          </div>
          <div>
            <img className='about-img' src={aboutbg1} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default AboutCarousel;