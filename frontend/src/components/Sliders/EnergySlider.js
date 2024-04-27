import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import es1 from '../../images/Services/Sliders/es1.png'
import es2 from '../../images/Services/Sliders/es2.png'
import es3 from '../../images/Services/Sliders/es3.png'

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
          <img style={{width:'100%'}} src={es1} alt="" />
        </div>
        <div>
        <img style={{width:'100%'}} src={es2} alt="" />
        </div>
        <div>
        <img style={{width:'100%'}} src={es3} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
