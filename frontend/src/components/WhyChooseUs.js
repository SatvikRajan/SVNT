import React, { useEffect } from 'react'
import wcu1 from '../images/Home/whychoose-1.svg'
import wcu1m from '../images/Home/whychoose-1m.svg'
import wcu2 from '../images/Home/whychoose-2.svg'
import wcu2m from '../images/Home/whychoose-2m.svg'
import wcu4 from '../images/Home/whychoose-4.svg'
import wcu4m from '../images/Home/whychoose-4m.svg'
import wcu3 from '../images/Home/whychoose-3.svg'
import wcu3m from '../images/Home/whychoose-3m.svg'
import wcu5 from '../images/Home/whychoose-5.svg'
import wcu5m from '../images/Home/whychoose-5m.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function WhyChooseUs() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      delay: 500,
      once: true
    });
  }, []);

  return (
    <div className='whyus'>
      <p className='why-choose-head'>Why Choose Us</p>
      <div className="d-flex why-choose-main">
        <div className='whyus-details' data-aos="fade-up">
          <picture>
            <source media="(max-width: 480px)" height={70} srcSet={wcu1m} />
            <source media="(min-width: 480px)" srcSet={wcu1} />
            <img src={wcu1} height={200} alt="" />
          </picture>
          <p>Tailored Technical Expertise</p>
        </div>
        <div className='whyus-details-1' data-aos="fade-down">
          <picture>
            <source media="(max-width: 480px)" height={70} srcSet={wcu2m} />
            <source media="(min-width: 480px)" srcSet={wcu2} />
            <img src={wcu2} height={200} alt="" />
          </picture>
          <p>Excellent Product
            & Quality Services</p>
        </div>
        <div className='whyus-details' data-aos="fade-up">
          <picture>
            <source media="(max-width: 480px)" height={70} srcSet={wcu3m} />
            <source media="(min-width: 480px)" srcSet={wcu3} />
            <img src={wcu3} height={200} alt="" />
          </picture>
          <p>Cost Effective solutions</p>
        </div>
        <div className='whyus-details-1' data-aos="fade-down">
          <picture>
            <source media="(max-width: 480px)" height={70} srcSet={wcu4m} />
            <source media="(min-width: 480px)" srcSet={wcu4} />
            <img src={wcu4} height={200} alt="" />
          </picture>
          <p>OEM Certified Engineers</p>
        </div>
        <div className='whyus-details' data-aos="fade-up">
          <picture>
            <source media="(max-width: 480px)" height={70} srcSet={wcu5m} />
            <source media="(min-width: 480px)" srcSet={wcu5} />
            <img src={wcu5} height={200} alt="" />
          </picture>
          <p>On-time Project Delivery</p>
        </div>
      </div>
    </div>
  )
}
