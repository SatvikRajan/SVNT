import React,{useEffect} from 'react';
import aequs from '../images/AboutUs/client-aequs.svg'
import allergan from '../images/AboutUs/client-allergan.svg'
import ampath from '../images/AboutUs/client-ampath.svg'
import kia from '../images/AboutUs/client-kia.svg'
import brigade from '../images/AboutUs/client-brigade.svg'
import esl from '../images/AboutUs/client-esl.svg'
import gd from '../images/AboutUs/client-gd.svg'
import akn from '../images/AboutUs/client-akn.svg'
import hc from '../images/AboutUs/client-hc.svg'
import itc from '../images/AboutUs/client-itc.svg'
import indigo from '../images/AboutUs/client-indigo.svg'
import afio from '../images/AboutUs/client-afio.svg'
import abg from '../images/AboutUs/client-abg.svg'
import gm from '../images/AboutUs/client-gm.svg'
import britannia from '../images/AboutUs/client-britannia.svg'
import vedanta from '../images/AboutUs/client-vedanta.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Clientele() {
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
      <h1 className='clientele' >Clientele</h1>
      <div className="trusted">
        <div className="trustedtext">

          <p data-aos='fade-right'>
          Our most invaluable resource lies within our people, and it is collaboration that sparks the best ideas into life.
          </p>
        </div>

        <section id="slideshow" data-aos='fade-left'>
          <div class="entire-content">
            <div class="content-carrousel">
              <figure class="shadow"><img src={aequs} /></figure>
              <figure class="shadow"><img src={allergan} /></figure>
              <figure class="shadow"><img src={ampath} /></figure>
              <figure class="shadow"><img src={kia} /></figure>
              <figure class="shadow"><img src={brigade} /></figure>
              <figure class="shadow"><img src={esl} /></figure>
              <figure class="shadow"><img src={gd} /></figure>
              <figure class="shadow"><img src={akn} /></figure>
              <figure class="shadow"><img src={hc} /></figure>
              <figure class="shadow"><img src={itc} /></figure>
              <figure class="shadow"><img src={indigo} /></figure>
              <figure class="shadow"><img src={afio} /></figure>
              <figure class="shadow"><img src={abg} /></figure>
              <figure class="shadow"><img src={gm} /></figure>
              <figure class="shadow"><img src={britannia} /></figure>
              <figure class="shadow"><img src={vedanta} /></figure>
              <figure class="shadow"><img src={akn} /></figure>
              <figure class="shadow"><img src={hc} /></figure>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}
