import React from 'react';
import img1 from '../images/Home/ITC-Limited.svg'
import img2 from '../images/Home/aditya-birla.svg'
import img3 from '../images/Home/AEQUS.svg'
import img4 from '../images/Home/Ampath.svg'
import img5 from '../images/Home/Bharat-electronics.svg'
import img6 from '../images/Home/gm.svg'
import img7 from '../images/Home/AFiO.svg'
import img8 from '../images/Home/AKN.svg'
import img9 from '../images/Home/Allergen.svg'
import img10 from '../images/Home/Brigade.svg'
import img11 from '../images/Home/gd-waldener.svg'
import img12 from '../images/Home/gsl-steel-limited.svg'
import img13 from '../images/Home/heidelbergCement.svg'
import img14 from '../images/Home/indigo.svg'
import img15 from '../images/Home/Zuari-cement.svg'
import img16 from '../images/Home/KempegodwaIA.svg'
import img17 from '../images/Home/CAIRN.svg'
import img18 from '../images/Home/Brigade.svg'



export default function Clientele() {
  return (
    <div className="trusted">
      <div className="trustedtext">
        <h1>Clientele</h1>
        <p>
          Our partners are who make us who we are. We firmly believe that people are our greatest asset and through
          collaboration and exchange of ideas, the best ideas are brought to life. Our partners play a crucial role in
          helping us deliver exceptional solutions and services to our clients that push the boundary further. 
        </p>
      </div>
      {/* <div class="cont">
        <div class="caro">
          <div class="carousel__face">
            <span className="hi">Clients</span>
          </div>
          <div class="carousel__face"></div>
          <div class="carousel__face"></div>
          <div class="carousel__face"></div>
          <div class="carousel__face"></div>
          <div class="carousel__face"></div>
          <div class="carousel__face"></div>
          <div class="carousel__face"></div>
          <div class="carousel__face"></div>
          <div class="carousel__face"></div>
          <div class="carousel__face"></div>
          <div class="carousel__face"></div>
          <div class="carousel__face"></div>
          <div class="carousel__face"></div>
          <div class="carousel__face"></div>
          <div class="carousel__face"></div>
          <div class="carousel__face"></div>
          <div class="carousel__face"></div>
        </div>
      </div> */}

    <section id="slideshow">
          <div class="entire-content">
            <div class="content-carrousel">
              <figure class="shadow"><img src={img1}/></figure>
              <figure class="shadow"><img src={img2}/></figure>
              <figure class="shadow"><img src={img3}/></figure>
              <figure class="shadow"><img src={img4}/></figure>
            <figure class="shadow"><img src={img5} /></figure>
            <figure class="shadow"><img src={img6}/></figure>
            <figure class="shadow"><img src={img7}/></figure>
            <figure class="shadow"><img src={img8}/></figure>
            <figure class="shadow"><img src={img9}/></figure>
            <figure class="shadow"><img src={img10}/></figure>
            <figure class="shadow"><img src={img11}/></figure>
            <figure class="shadow"><img src={img12}/></figure>
            <figure class="shadow"><img src={img13}/></figure>
            <figure class="shadow"><img src={img14}/></figure>
            <figure class="shadow"><img src={img15}/></figure>
            <figure class="shadow"><img src={img16}/></figure>
            <figure class="shadow"><img src={img17}/></figure>
            <figure class="shadow"><img src={img18} /></figure>
            
        </div>
      </div>
    </section>
    </div>
  );
}
