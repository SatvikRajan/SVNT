import '../css/timeline.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useState,useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
                        color: onClick ? 'white' : '#251741',
                        cursor: onClick ? 'pointer' : 'default'
                    }} />
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
                    width: '60px',
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
                    color: onClick ? 'white' : '#251741',
                    cursor: onClick ? 'pointer' : 'default'
                }} />
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

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 300,
            delay: 500,
            outline: false
        });
    }, []);

    return (
        <div className="timeline" data-aos='fade-up'>
            <div className="timeline-container" style={{ backgroundPositionX: `${backgroundPosition}%` }}>
                <div><h1 className="timeline-head">Company TimeLine</h1></div>
                {/* <div class="line"></div>  */}
                <div className="timeline-carousel">
                    <Slider {...settings}>

                        {/* display grid 50% 50% for each with bottom border and 50% of left border for the text div */}
                        <div className='info'>
                            <div className='info-set info-set-up'>
                                <p className='year'>2003 - 2006</p>
                                <p className='sub-head'>Birth of SVNT</p>
                                <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                            </div>
                            <div className='gap'>

                            </div>
                        </div>

                        <div className='info'>
                            <div className='gap'>

                            </div>
                            <div className='info-set info-set-down'>
                                <p className='year'>2006 - 2009</p>
                                <p className='sub-head'>Company Spinout</p>
                                <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                            </div>
                        </div>

                        <div className='info'>
                            <div className='info-set info-set-up'>
                                <p className='year'>2009 - 2012</p>
                                <p className='sub-head'>Company Spinout</p>
                                <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                            </div>
                            <div className='gap'>

                            </div>
                        </div>

                        <div className='info'>
                            <div className='gap'>

                            </div>
                            <div className='info-set info-set-down'>
                                <p className='year'>2012 - 2015</p>
                                <p className='sub-head'>Company Spinout</p>
                                <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                            </div>
                        </div>


                        <div className='info'>
                            <div className='info-set info-set-up'>
                                <p className='year'>2015 - 2018</p>
                                <p className='sub-head'>Company Spinout</p>
                                <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                            </div>
                            <div className='gap'>

                            </div>
                        </div>

                        <div className='info'>
                            <div className='gap'>

                            </div>
                            <div className='info-set info-set-down'>
                                <p className='year'>2018 - 2021</p>
                                <p className='sub-head'>Company Spinout</p>
                                <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                            </div>
                        </div>

                        <div className='info'>
                            <div className='info-set info-set-up'>
                                <p className='year'>2021 - Present</p>
                                <p className='sub-head'>Company Spinout</p>
                                <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                            </div>
                            <div className='gap'>

                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
        </div>
    )
}