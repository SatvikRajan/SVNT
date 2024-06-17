import React from 'react'
import partners from '../images/Home/partners.jpg'

export default function Partners() {
    return (
        <>
            <div className='d-flex partners container'>
                <img src={partners} alt="" />
                <div>
                    <h2>Meet our Global Partner</h2>
                    <p>Our most invaluable resource lies within our people, and it is collaboration that sparks the best ideas into life.</p>
                    <a href="readmore">Read More</a>
                </div>
            </div>
        </>
    )
}
