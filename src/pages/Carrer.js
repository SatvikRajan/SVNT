import React from "react";
import career from '../images/careerimage.png';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';
import invite from '../images/invite.png';

const DomainCard = ({ imgSrc, title, description }) => (
  <div className="d-flex mb-3">
    <div className="p-2">
      <img style={{ maxWidth: '100%', height: 'auto' }} src={imgSrc} alt="" />
    </div>
    <div className="p-2 text-start">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);
export const CareersPage = () => {
  return (
    <div className="careers-page">
      <div className="career-start">
        <div className="career-image">

          <img src={career} style={{ maxWidth: '100%' }} alt="" />
          <div className="image-text"></div>
          <div className="career-text1">
            Empower your aspirations at SVNT Infotech!
          </div>
          <div className="career-text2">
            We believe in your Ideas, We believe in You
          </div>
          <div className="explore">
            Explore Now
          </div>
        </div>
        <div className="domain">
          <h1 className="domain-head mt-5 fw-bold">Shape our Future Together!</h1>
          <p className="domain-text mt-3">With over 32 locations, SVNT presents limitless prospects while fostering growth,<br/> leadership, innovation, and showing appreciation for its dedicated workforce.</p>
        </div>
        <div className="d-flex flex-row invite">
          <div>
            <img style={{ maxWidth: '100%', borderRadius: '20px' }} src={invite} alt="" />
          </div>
          <div style={{alignSelf: 'center'}}>
            <h1 style={{ color: '#0F2F64', fontWeight: '600', marginBottom: '25px' }}>We invite you to join us.</h1>
            <p>If you have innovative ideas and a genuine passion to<br /> execute them at an organization that will provide you with<br /> boundless, diverse, and profound experiences.</p>
            <p style={{marginTop: '30px', fontSize: '22px', textDecoration: 'underline'}}>Explore Now</p>
            </div>
        </div>
      </div>
    </div>
  );
};
