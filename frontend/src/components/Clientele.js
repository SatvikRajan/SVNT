import React,{useEffect} from 'react';
import abh from '../images/AboutUs/abh.svg'
import act from '../images/AboutUs/client-act.svg'
import brigade from '../images/AboutUs/client-brigade.svg'
import cargill from '../images/AboutUs/cargill.svg'
import be from '../images/AboutUs/client-be.svg'
import jsw from '../images/AboutUs/jsw.svg'
import jcb from '../images/AboutUs/jcb.svg'
import aragen from '../images/AboutUs/aragen.svg'
import cfcl from '../images/AboutUs/cfcl.svg'
import pidilite from '../images/AboutUs/pidilite.svg'
import petrofac from '../images/AboutUs/petrofac.svg'
import ultratech from '../images/AboutUs/ultratech.svg'
import isro from '../images/AboutUs/client-isro.svg'
import ec from '../images/AboutUs/ec.svg'
import edb from '../images/AboutUs/edb.svg'
import zinc from '../images/AboutUs/zinc.svg'
import kia from '../images/AboutUs/client-kia.svg'
import itc from '../images/AboutUs/client-itc.svg'
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
              <figure className="shadow"><img src={abh} alt='client'/></figure>
              <figure className="shadow"><img src={itc} alt='client'/></figure>
              <figure className="shadow"><img src={isro} alt='client'/></figure>
              <figure className="shadow"><img src={cargill} alt='client'/></figure>
              <figure className="shadow"><img src={brigade} alt='client'/></figure>
              <figure className="shadow"><img src={jsw} alt='client'/></figure>
              <figure className="shadow"><img src={jcb} alt='client'/></figure>
              <figure className="shadow"><img src={aragen} alt='client'/></figure>
              <figure className="shadow"><img src={cfcl} alt='client'/></figure>
              <figure className="shadow"><img src={pidilite} alt='client'/></figure>
              <figure className="shadow"><img src={petrofac} alt='client'/></figure>
              <figure className="shadow"><img src={ultratech} alt='client'/></figure>
              <figure className="shadow"><img src={be} alt='client'/></figure>
              <figure className="shadow"><img src={ec} alt='client'/></figure>
              <figure className="shadow"><img src={edb} alt='client'/></figure>
              <figure className="shadow"><img src={zinc} alt='client'/></figure>
              <figure className="shadow"><img src={kia} alt='client'/></figure>
              <figure className="shadow"><img src={act} alt='client'/></figure>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}
