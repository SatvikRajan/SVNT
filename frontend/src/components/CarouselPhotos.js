import React from 'react'
import service1 from '../images/Services/service1.png'
export default function CarouselPhotos() {
   
    return (
        <>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner" style={{marginTop: 0}}>
                    <div class="carousel-item active">
                        <img src={service1} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={service1} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={service1} class="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
        </>
    )
}
