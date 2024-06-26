import React from 'react'
import partners from '../images/Home/partners.jpg'
import genetec from '../images/Home/genetec.png'
export default function Partners() {
    return (
        <>
            <div className='d-flex partners container'>
                <img className='partners-img' src={partners} alt="" />
                <div className='partners-text'>
                    <img src={genetec} alt="" />
                    <h2>Meet our Global Partner</h2>
                    <p>Our most invaluable resource lies within our people, and it is collaboration that sparks the best ideas into life.</p>
                    <a href="readmore">Read More</a>
                </div>
            </div>
        </>
    )
}
