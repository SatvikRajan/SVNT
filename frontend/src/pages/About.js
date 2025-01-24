import React, { useEffect, useState } from 'react';
import '../css/about.css';
import ceo from '../images/AboutUs/ceo-image.png';
import '../css/slider.css';
import Managers from '../components/Managers';
import TimeLine from '../components/Timeline';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aequs from '../images/AboutUs/client-aequs.svg';
import allergan from '../images/AboutUs/client-allergan.svg';
import ampath from '../images/AboutUs/client-ampath.svg';
import kia from '../images/AboutUs/client-kia.svg';
import brigade from '../images/AboutUs/client-brigade.svg';
import esl from '../images/AboutUs/client-esl.svg';
import gd from '../images/AboutUs/client-gd.svg';
import akn from '../images/AboutUs/client-akn.svg';
import hc from '../images/AboutUs/client-hc.svg';
import itc from '../images/AboutUs/client-itc.svg';
import indigo from '../images/AboutUs/client-indigo.svg';
import gm from '../images/AboutUs/client-gm.svg';
import britannia from '../images/AboutUs/client-britannia.svg';
import vedanta from '../images/AboutUs/client-vedanta.svg';
import jsw from '../images/AboutUs/jsw.svg';
import jcb from '../images/AboutUs/jcb.svg';
import lat from '../images/AboutUs/lat.svg';
import mahindra from '../images/AboutUs/mahindra.svg';
import abh from '../images/AboutUs/abh.svg';
import access from '../images/AboutUs/access.svg';
import act from '../images/AboutUs/act.svg';
import aragen from '../images/AboutUs/aragen.svg';
import buhler from '../images/AboutUs/buhler.svg';
import cargill from '../images/AboutUs/cargill.svg';
import cfcl from '../images/AboutUs/cfcl.svg';
import dufri from '../images/AboutUs/dufri.svg';
import ec from '../images/AboutUs/ec.svg';
import edb from '../images/AboutUs/edb.svg';
import genpact from '../images/AboutUs/genpact.svg';
import harista from '../images/AboutUs/harista.svg';
import intox from '../images/AboutUs/intox.svg';
import iti from '../images/AboutUs/iti.svg';
import isro from '../images/AboutUs/client-isro.svg';
import laurus from '../images/AboutUs/laurus.svg';
import natco from '../images/AboutUs/natco.svg';
import ntpc from '../images/AboutUs/ntpc.svg';
import opc from '../images/AboutUs/opc.svg';
import petrofac from '../images/AboutUs/petrofac.svg';
import pidilite from '../images/AboutUs/pidilite.svg';
import prdc from '../images/AboutUs/prdc.svg';
import proconnect from '../images/AboutUs/proconnect.svg';
import reliance from '../images/AboutUs/reliance.svg';
import selec from '../images/AboutUs/selec.svg';
import techser from '../images/AboutUs/techser.svg';
import uday from '../images/AboutUs/uday.svg';
import ultratech from '../images/AboutUs/ultratech.svg';
import vaaman from '../images/AboutUs/vaaman.svg';
import zinc from '../images/AboutUs/zinc.svg';
import zuari from '../images/AboutUs/zuari.svg';
import cae from '../images/AboutUs/client-cae.svg';
import temp from '../images/AboutUs/client-temp.svg';
import nst from '../images/AboutUs/client-nst.svg';
import elcita from '../images/AboutUs/client-elcita.svg';
import infopark from '../images/AboutUs/client-infopark.svg';
import tata from '../images/AboutUs/client-tata.svg';
import matrix from '../images/AboutUs/matrix.svg';
import nexus from '../images/AboutUs/nexus.svg';
import om from '../images/AboutUs/om.svg';
import opme from '../images/AboutUs/opme.svg';
import placid from '../images/AboutUs/placid.svg';
import railtel from '../images/AboutUs/railtel.svg';
import sau from '../images/AboutUs/sau.svg';
import seehawk from '../images/AboutUs/seehawk.svg';
import source from '../images/AboutUs/source.svg';
import thump from '../images/AboutUs/thump.svg';
import aboutbg from '../images/AboutUs/about-bg-video.mp4';
import Slider from "react-slick";

const About = () => {
  const [activeClientType, setActiveClientType] = useState('All');
  const clients = {
    All: [
      { src: aequs, alt: 'Aequs' },
      { src: allergan, alt: 'Allergan' },
      { src: lat, alt: 'LAT' },
      { src: jcb, alt: 'JCB' },
      { src: vedanta, alt: 'vedanta' },
      { src: britannia, alt: 'britannia' },
      { src: gm, alt: 'gm' },
      { src: brigade, alt: 'brigade' },
      { src: gd, alt: 'gd' },
      { src: akn, alt: 'akn' },
      { src: hc, alt: 'hc' },
      { src: mahindra, alt: 'mahindra' },
      { src: itc, alt: 'itc' },
      { src: abh, alt: 'abh' },
      { src: access, alt: 'access' },
      { src: act, alt: 'act' },
      { src: aragen, alt: 'aragen' },
      { src: buhler, alt: 'buhler' },
      { src: cargill, alt: 'cargill' },
      { src: cfcl, alt: 'cfcl' },
      { src: dufri, alt: 'dufri' },
      { src: ec, alt: 'ec' },
      { src: edb, alt: 'edb' },
      { src: genpact, alt: 'genpact' },
      { src: harista, alt: 'harista' },
      { src: intox, alt: 'intox' },
      { src: iti, alt: 'iti' },
      { src: natco, alt: 'natco' },
      { src: opc, alt: 'opc' },
      { src: petrofac, alt: 'petrofac' },
      { src: pidilite, alt: 'pidilite' },
      { src: prdc, alt: 'prdc' },
      { src: proconnect, alt: 'proconnect' },
      { src: reliance, alt: 'reliance' },
      { src: selec, alt: 'selec' },
      { src: techser, alt: 'techser' },
      { src: uday, alt: 'uday' },
      { src: ultratech, alt: 'ultratech' },
      { src: vaaman, alt: 'vaaman' },
      { src: zinc, alt: 'zinc' },
      { src: zuari, alt: 'zuari' },
      { src: indigo, alt: 'indigo' },
      { src: hc, alt: 'hc' },
      { src: prdc, alt: 'prdc' },
      { src: abh, alt: 'abh' },
      { src: matrix, alt: 'matrix' },
      { src: nexus, alt: 'nexus' },
      { src: om, alt: 'om' },
      { src: opme, alt: 'opme' },
      { src: placid, alt: 'placid' },
      { src: railtel, alt: 'railtel' },
      { src: sau, alt: 'sau' },
      { src: seehawk, alt: 'seehawk' },
      { src: source, alt: 'source' },
      { src: thump, alt: 'thump' },
    ],
    Power: [
      { src: kia, alt: 'kia' },
      { src: act, alt: 'act' },
      { src: iti, alt: 'iti' },
      { src: jsw, alt: 'jsw' },
      { src: ec, alt: 'ec' },
      { src: uday, alt: 'uday' },
      { src: techser, alt: 'techser' },
      { src: reliance, alt: 'reliance' },
      { src: petrofac, alt: 'petrofac' },
      { src: prdc, alt: 'prdc' },
      { src: ntpc, alt: 'ntpc' },
      { src: laurus, alt: 'laurus' },
      { src: access, alt: 'access' },
    ],
    Pharma: [
      { src: ampath, alt: 'ampath' },
      { src: allergan, alt: 'Allergan' },
      { src: aragen, alt: 'aragen' },
      { src: cfcl, alt: 'cfcl' },
      { src: gd, alt: 'gd' },
      { src: intox, alt: 'intox' },
      { src: natco, alt: 'natco' },
      { src: pidilite, alt: 'pidilite' },
    ],
    Hotels: [
      { src: itc, alt: 'itc' },
    ],
    Techno: [
      { src: akn, alt: 'itc' },
      { src: cargill, alt: 'cargill' },
      { src: genpact, alt: 'genpact' },
      { src: harista, alt: 'harista' },
      { src: reliance, alt: 'reliance' },
      { src: infopark, alt: 'infopark' },
      { src: matrix, alt: 'matrix' },
      { src: nexus, alt: 'nexus' },
      { src: om, alt: 'om' },
      { src: opme, alt: 'opme' },
      { src: placid, alt: 'placid' },
      { src: railtel, alt: 'railtel' },
    ],
    Agro: [
      { src: buhler, alt: 'buhler' },
      { src: itc, alt: 'itc' },
      { src: edb, alt: 'edb' },
      { src: indigo, alt: 'indigo' },
    ],
    Industrial: [
      { src: aequs, alt: 'Aequs' },
      { src: zuari, alt: 'zuari' },
      { src: dufri, alt: 'dufri' },
      { src: esl, alt: 'esl' },
      { src: vedanta, alt: 'vedanta' },
      { src: hc, alt: 'hc' },
      { src: abh, alt: 'abh' },
      { src: jcb, alt: 'jcb' },
      { src: zinc, alt: 'zinc' },
      { src: selec, alt: 'selec' },
      { src: opc, alt: 'opc' },
      { src: proconnect, alt: 'proconnect' },
      { src: ultratech, alt: 'ultratech' },
      { src: vaaman, alt: 'vaaman' },
    ],
    Transport: [
      { src: kia, alt: 'kia' },
      { src: cae, alt: 'cae' },
      { src: isro, alt: 'isro' },
      { src: mahindra, alt: 'mahindra' },
      { src: tata, alt: 'tata' },
      { src: nst, alt: 'nst' },
    ],
    Realty: [
      { src: brigade, alt: 'brigade' },
      { src: temp, alt: 'temp' },
      { src: elcita, alt: 'elcita' },
      { src: nexus, alt: 'nexus' },
      { src: om, alt: 'om' },
      { src: opme, alt: 'opme' },
    ]
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
      delay: 500
    });
  }, []);

  const settings = {
    arrows: false,
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    autoplaySpeed: 0,
    speed: 10000,
    rows: 3,
    slidesPerRow: 2,
    cssEase: "linear",
    outline: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesPerRow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  };

  return (
    <div className="about-us-page">
      <div className="about-us-head">
        <video style={{ width: '100%', height: '100%' }} autoPlay playsInline muted preload="auto">
          <source src={aboutbg} type="video/mp4" />
        </video>
      </div>
      <div className="svnt-info container" data-aos='fade-up'>
        <h1 style={{ paddingBottom: '2rem' }}>About Us</h1>
        <p align="justify"> Established in 2003, SVNT Infotech Pvt Ltd set out on a mission to revolutionize IT infrastructure solutions.
          Our philosophy is to combine international technology with local expertise to tailor solutions to clients needs. Driven by excellence, we aim to lead the global market in networking and communication solutions.</p>
      </div>

      <TimeLine />

      <div className="ceo d-flex">
        <div className="ceo-text">
          <h1 className="fs-1 ceo-text-head" style={{ marginBottom: '2rem' }} data-aos='fade-down'>Meet Our Managing Director </h1>
          <p className="ceo-text-p w-75" style={{ marginBottom: '2rem' }} data-aos='fade-right'>
            “User experience is everything. It always has been, but it's still undervalued and under-invested in. If you don't know user-centered design, study it. Hire people who know it. Obsess over it. Live and breathe it. ”
          </p>
          <h1 style={{ float: 'inline-end' }} data-aos='fade-right'>- Mr. V G Salimath</h1>
        </div>
        <div className="ceo-photo" data-aos='fade-left'>
          <img className='ceo-photo-1' src={ceo} alt="" />
        </div>
      </div>

      <Managers />
      <div className='about-clients'>
        <h1 className='client-h1'>Clients</h1>
        <div className="client-container">
          <div className="about-client-type">
            {Object.keys(clients).map((clientType) => (
              <p
                key={clientType}
                onClick={() => setActiveClientType(clientType)}
                className={activeClientType === clientType ? 'active' : ''}
              >
                {clientType}
              </p>
            ))}
          </div>

          <div className="slider-container">
            <Slider
              key={activeClientType}
              {...settings}
            >
              {clients[activeClientType].map((client, index) => (
                <div key={index}>
                  <img
                    className="about-client-logo"
                    height={200}
                    src={client.src}
                    alt={client.alt}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', padding: '0' }}>
        <iframe
          loading='lazy'
          title='map'
          src="https://www.google.com/maps/d/embed?mid=1GUq8xtiTqXd5ZvPKLOG7-MMCGwsDuiM&ehbc=2E312F"
          style={{ border: 'none', width: '100%', height: '640px'}}
        />
      </div>
    </div>
  );
};

export default About;