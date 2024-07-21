import React from 'react'
import partners from '../images/Home/partners.jpg'
import genetec from '../images/Home/genetec.png'
export default function Partners() {
    return (
        <>
            <div className='d-flex partners container'>
                <img className='partners-img' src={partners} alt="" />
                <div className='partners-text'>
                    <img height={70} src={genetec} alt="" />
                    <h2>Meet our Global Partner</h2>
                    <p>Our trusted partner in delivering excellence.</p>

                    <p className='readmore rm-2 mt-5' style={{filter: 'invert(1)'}}>
                        <a href="/partners" className='text-white'>Read More</a>
                    </p>
                </div>
            </div>
        </>
    )
}
