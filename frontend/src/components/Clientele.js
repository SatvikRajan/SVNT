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
          <div className="entire-content">
            <div className="content-carrousel">
              <figure className="shadow"><img src={aequs} alt='client'/></figure>
              <figure className="shadow"><img src={allergan} alt='client'/></figure>
              <figure className="shadow"><img src={ampath} alt='client'/></figure>
              <figure className="shadow"><img src={kia} alt='client'/></figure>
              <figure className="shadow"><img src={brigade} alt='client'/></figure>
              <figure className="shadow"><img src={esl} alt='client'/></figure>
              <figure className="shadow"><img src={gd} alt='client'/></figure>
              <figure className="shadow"><img src={akn} alt='client'/></figure>
              <figure className="shadow"><img src={hc} alt='client'/></figure>
              <figure className="shadow"><img src={itc} alt='client'/></figure>
              <figure className="shadow"><img src={indigo} alt='client'/></figure>
              <figure className="shadow"><img src={afio} alt='client'/></figure>
              <figure className="shadow"><img src={abg} alt='client'/></figure>
              <figure className="shadow"><img src={gm} alt='client'/></figure>
              <figure className="shadow"><img src={britannia} alt='client'/></figure>
              <figure className="shadow"><img src={vedanta} alt='client'/></figure>
              <figure className="shadow"><img src={akn} alt='client'/></figure>
              <figure className="shadow"><img src={hc} alt='client'/></figure>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}
