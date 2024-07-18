import React from 'react'
import wcu1 from '../images/Home/whychoose-1.svg'
import wcu2 from '../images/Home/whychoose-2.svg'
import wcu4 from '../images/Home/whychoose-4.svg'
import wcu3 from '../images/Home/whychoose-3.svg'
import wcu5 from '../images/Home/whychoose-5.svg'
export default function WhyChooseUs() {
  return (
    <div className='whyus'>
      <p className='why-choose-head'>Why Choose Us</p>
      <div className="d-flex why-choose-main">
        <div className='whyus-details'>
          <img src={wcu1} height={200} alt="" />
          <p>Tailored Technical Expertise</p>
        </div>
        <div className='whyus-details-1'>
          <img src={wcu2} height={200} alt="" />
          <p>Excellent Product
          & Quality Services</p>
        </div>
        <div className='whyus-details'>
          <img src={wcu3} height={200} alt="" />
          <p>Cost Effective solutions</p>
        </div>
        <div className='whyus-details-1'>
          <img src={wcu4} height={200} alt="" />
          <p>OEM Certified Engineers</p>
        </div>
        <div className='whyus-details'>
          <img src={wcu5} height={200} alt="" />
          <p>On-time Project Delivery</p>
        </div>
      </div>
    </div>
  )
}
