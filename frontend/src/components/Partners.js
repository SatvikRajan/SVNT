import React, { useEffect } from 'react'
import partners from '../images/Home/partners.jpg'
import genetec from '../images/Home/genetec.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Partners() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
            delay: 500,
            once: true
        });
    }, []);
    return (
        <>
            <div className='d-flex partners'>
                <img className='partners-img' data-aos='fade-right' src={partners} alt="" />
                <div className='partners-text' data-aos='fade-left'>
                    <img height={70} src={genetec} alt="" />
                    <h2>Meet our Global Partner</h2>
                    <p>Our trusted partner in delivering excellence.</p>

                    <p className='readmore rm-2 mt-5' style={{ filter: 'invert(1)', width: '35%' }}>
                        <a href="/partners" className='text-white'>Read More</a>
                    </p>
                </div>
            </div>
        </>
    )
}
