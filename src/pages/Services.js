import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import service1 from '../images/Services/service1.png';
import service1bg from '../images/Services/service1bg.png';
import service2 from '../images/Services/service2.png';
import service2bg from '../images/Services/service2bg.png';
import service3 from '../images/Services/service3.png';
import service3bg from '../images/Services/service3bg.png';
import service4 from '../images/Services/service4.png';
import service4bg from '../images/Services/service4bg.png';
import service5 from '../images/Services/service5.png';
import service5bg from '../images/Services/service5bg.png';
import service6 from '../images/Services/service6.png';
import service6bg from '../images/Services/service6bg.png';
import service7 from '../images/Services/service7.png';
import service7bg from '../images/Services/service7bg.png';
import service8 from '../images/Services/service8.png';
import service8bg from '../images/Services/service8bg.png';

const ServiceBox = ({ title, description, image, imagePosition, backgroundImage }) => {
  const content = (
    <div className="service-box1" data-aos= 'fade-up'>
      <h1 className="service-boxhead">{title}</h1>
      <p style={{ lineHeight: '47px' }}>{description}</p>
    </div>
  );
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 200 // Offset (in px) from the original trigger point
    });
  }, []);
  return (
    <div
      className="service-box d-flex"
      data-aos= 'fade-right'
      data-aos-offset="200"
      data-aos-duration="1000"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
    >
      {imagePosition === 'after' ? content : null}
      <div className="service-box2">
        {/* Size of image is resized  */}
        <img src={image} alt="" />
      </div>
      {imagePosition === 'before' ? content : null}
    </div>
  );
};

export default function Services() {
  return (
    <div className="services">
      <h1 style={{ marginLeft: '5rem' }}>Services</h1>
      <ServiceBox
        id="sbox1"
        backgroundImage={service1bg}
        title="IP Survillence Solution"
        description="An IP camera system is a closed-circuit TV (CCTV) that is network attached. IP camera systems can be utilized to enhance security measures and elevate safety in any sector ranging from healthcare, schools and businesses to industrial, military, and government organizations. Moreover, IP cameras also make it incredibly easy to access video feeds, which may be saved, modified or examined using a PC. Video feeds from IP cameras can be monitored from any location on multiple devices simultaneously. These surveillance systems can have features customized to their requirements and be integrated into any organisation's existing IT network effortlessly, thereby making it effective and hassle-free."
        imagePosition="after"
        image={service1}
      />
      <ServiceBox
        id="sbox2"
        backgroundImage={service2bg}
        title="IP Networking Solution"
        description="Every device connected to the internet has its own unique IP address. An IP network refers to any group of devices, each with their own IP address, connected under the same network where information can be sent and received. Different organisations have different priorities. The scope of an IP network can greatly vary. It can range from being used to describe a small network of a few linked devices in a home or office as well as a big corporate network with thousands of devices. IP networks not only support various communication infrastructures, such as email services and web browsing video streaming but also seamlessly facilitate the transfer of information and resources, becoming an essential part of our daily digital interactions."
        imagePosition="before"
        image={service2}
      />
      <ServiceBox
        id="sbox3"
        backgroundImage={service3bg}
        title="Storage"
        description="When it comes to data storage, services such as NAS(Network Attached Storage) and SAN(Storage Area Network) make it easy for employees to collaborate and respond promptly to customer needs efficiently. Ensuring accessibility to these resources at a cost-effective rate and being able to utilize these facilities at ease are major priorities for any service that is to be used constantly. Having a plan to deal with any unforeseen circumstances and backing up data is also crucial for an organization to continue to function with as little disruption as possible. Implementing a business continuity strategy prior to any potential disasters not only saves valuable time and resources but also ensures a swift recovery."
        imagePosition="after"
        image={service3}
      />
      <ServiceBox
        id="sbox4"
        title="Security & Management Services"
        description="Conducting a thorough network audit is will expose potential security vulnerabilities that could have long-term repercussions for the business. Various web caching and bandwidth management techniques can be utilised to improve the responsiveness of a website as well. In the realm of security, access control as well as a perimeter intrusion system plays a pivotal role in managing and authorising individuals to access corporate data and resources.Tyre Killers are particularly suitable for environments requiring heightened security to prevent unauthorised intrusions at entry/exit points. Furthermore, a firewall is essential in monitoring incoming and outgoing network traffic, making decisions based on the company's priorities to either allow or block specific data streams."
        imagePosition="before"
        image={service4}
        backgroundImage={service4bg}
      />
      <ServiceBox
        id="sbox5"
        title="Integration Solutions"
        description="Enhance operational productivity and elevate quality standards by accelerating information flow and minimising operational costs within your organisation. Our system integration solutions are adept at seamlessly integrating with both new and existing hardware, ensuring a cohesive and efficient environment. We make sharing information, communicating and collaborating different machines much easier for you by utilising our machine integration solutions, eliminating any unnecessary complications. Computer Telephony Integration (CTI) automates call handling processes, providing valuable insights for continuous improvement. Bridge the communication gap between telephone and computer systems through our telephone integration services."
        imagePosition="after"
        image={service5}
        backgroundImage={service5bg}
      />
      <ServiceBox
        id="sbox6"
        title="Surveillance and Safety Solutions"
        description="Runway monitoring includes meticulously recording all aircraft movements and paths during take-off and landing thereby ensuring a thorough and accurate overview of airport activities. Designed to detect malfunctions, equipment failures, or any evidence crucial for investigating accidents, the system comprises strategically positioned video cameras along the runway. On the other hand, a fire alarm system serves as an essential component to ensuring safety to occupants in any environment. Tailored to detect and promptly alert occupants, it functions solely to detect and alert occupants to to potential threats like smoke, fire, etc."
        imagePosition="before"
        image={service6}
        backgroundImage={service6bg}
      />
      <ServiceBox
        id="sbox7"
        title="Audio-Visual Solutions"
        description="We provide state-of-the-art audio-visual products and solutions to seamlessly integrate audio, video, display, lighting equipment, and system controls. Our AV solutions cater to various applications, including conference rooms, auditoriums, cafeterias, classrooms, etc. Our process automation solutions leverage technology to automate repetitive and routine work through optimised processes, increasing productivity and saving time. In addition, our digital signage solutions provide a dynamic, versatile and attention-grabbing approach utilising a network of digital displays and diverse mounting systems. They are an unquestionable asset to the entertainment, merchandise, and advertising industries."
        imagePosition="after"
        image={service7}
        backgroundImage={service7bg}
      />
      <ServiceBox
        id="sbox8"
        title="Energy Solutions"
        description="Our UPS solution, uninterruptible power supply solution, provides automated backup electric power to devices in the event of a power failure. This ensures that your servers and computers are fit to operate without disturbance in the case of a power outage. With the help of our lightning solution, we help you implement sophisticated lightning protection systems that minimise the risk of damage in the event of a lightning strike. When it comes to solar solutions, our technology allows you to generate electricity and significantly reduce your carbon footprint. By harnessing the power of the sun, you not only contribute to a cleaner environment by actively preventing the emission of CO2, but also generate substantial savings on your electric bill."
        imagePosition="before"
        image={service8}
        backgroundImage={service8bg}
      />
    </div>
  );
}
