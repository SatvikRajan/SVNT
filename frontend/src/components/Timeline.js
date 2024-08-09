import '../css/timeline.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from 'react';
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
                <svg className='arrows' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
                    style={{
                        color: onClick ? 'white' : '#251741',
                        cursor: onClick ? 'pointer' : 'default'
                    }}><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>

            </div>

        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`arrow ${className} `}
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
                <svg className='arrows' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{
                    color: onClick ? 'white' : '#251741',
                    cursor: onClick ? 'pointer' : 'default'
                }} ><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg>
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
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
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
                {/* <div className="line"></div>  */}
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