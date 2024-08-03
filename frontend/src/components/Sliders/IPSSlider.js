import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ips1 from '../../images/Services/Sliders/ips1.webp'
import ips2 from '../../images/Services/Sliders/ips2.webp'
import ips3 from '../../images/Services/Sliders/ips3.webp'

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
    outline: false
  };

  return (
    <div className="slider-images">
      <Slider {...settings}>
        <div>
          <img src={ips1} alt="" />
        </div>
        <div>
        <img src={ips2} alt="" />
        </div>
        <div>
        <img src={ips3}  alt="" />
        </div>
      </Slider>
      </div>
  );
}

export default SimpleSlider;
