import '../css/timeline.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from 'react';
// import FontAwesome from 'react-fontawesome'
// import faStyles from 'font-awesome/css/font-awesome.css'
// import styled from 'styled-components';


export default function Timeline() {
    const [backgroundPosition, setBackgroundPosition] = useState(0);

    const handleNextArrowClick = () => {
        // Increment background position by 10%
        setBackgroundPosition(prevPosition => prevPosition + 10);
    };

    const handlePrevArrowClick = () => {
        // Decrement background position by 10%
        setBackgroundPosition(prevPosition => prevPosition - 10);
    };
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
                className={`arrow ${className}`}
                style={{
                    ...style,
                    width: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                // onClick={onClick}
                onClick={() => {
                    if (onClick) {
                        onClick();
                        handleNextArrowClick();
                    }
                }}
    
            >
                <IoIosArrowForward className='arrows'
                style={{
                    color: onClick? 'white':'#251741',
                    cursor: onClick? 'pointer':'default'
               }}/>
        </div>
            
        );
      }
      
      function SamplePrevArrow(props) {
          const { className, style, onClick } = props;
        return (
          <div
            className={`arrow ${className}`}
                style={{
                    ...style,
                    width:'60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onClick={() => {
                    if (onClick) {
                        onClick();
                        handlePrevArrowClick();
                    }
                }}
            >
                <IoIosArrowBack className='arrows' style={{
                    color: onClick? 'white':'#251741',
                    cursor: onClick? 'pointer':'default'
               }}/>
            </div>
        );
    }
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className="timeline">
            <div className="timeline-container" style={{ backgroundPositionX: `${backgroundPosition}%` }}>
                <div><h1 className="timeline-head">Comapany TimeLine</h1></div>
                {/* <div class="line"></div>  */}
                <div className="timeline-carousel">
                    <Slider {...settings}>
                        
                        {/* display grid 50% 50% for each with bottom border and 50% of left border for the text div */}
                    <div className='info'>

                    </div>

                    <div className='info'>
                        
                    </div>

                    <div className='info'>
                        
                    </div>

                    <div className='info'>
                        
                    </div>

                    <div className='info'>
                        
                    </div>

                    <div className='info'>
                        
                    </div>
                </Slider>
                </div>
            </div>
        </div>
    )    
}