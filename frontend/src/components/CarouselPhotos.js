import React from 'react'
import service1 from '../images/Services/service1.png'
import service2 from '../images/Services/service2.png'
import service3 from '../images/Services/service3.png'
export default function CarouselPhotos() {
   
    return (
        <>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner" style={{marginTop: 0}}>
                    <div class="carousel-item active" data-bs-ride='2000'>
                        <img src={service1} style={{objectFit: 'cover',width:'100%',height: '100%'}} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item" >
                        <img src={service2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={service3} class="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
        </>
    )
}
