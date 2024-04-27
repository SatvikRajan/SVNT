import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from '../../images/Services/Sliders/s1.png'
import s2 from '../../images/Services/Sliders/s2.png'
import s3 from '../../images/Services/Sliders/s3.png'

function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000, 
  };

  const sliderStyle = {
    width: '35%', 
    margin: '0 auto' 
  };

  return (
    <div className="slider-container" style={sliderStyle}>
      <Slider {...settings}>
        <div>
          <img style={{width:'100%'}} src={s1} alt="" />
        </div>
        <div>
        <img style={{width:'100%'}} src={s2} alt="" />
        </div>
        <div>
        <img style={{width:'100%'}} src={s3} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
