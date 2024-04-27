import React from 'react'
import Slider from "react-slick";
import aboutbg from '../images/AboutUs/about-bg.jpg'
import aboutbg1 from '../images/AboutUs/about-bg1'

function AboutCarousel() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000, 
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <div className="slider-container" >
        <Slider {...settings}>
          <div>
            <img style={{ height: '100%', width: '100vw', objectFit: 'scale-down', marginTop: '1rem' }} className='about-img' src={aboutbg} alt="" />
          </div>
          <div>
            <img style={{ height: '100%', width: '100vw', objectFit: 'scale-down', marginTop: '1rem' }} className='about-img' src={aboutbg1} alt="" />
          </div>
        </Slider>
      </div></div>
  )
}

export default AboutCarousel