import React, { useState } from 'react'
import '../css/caseStudies.css';
import bghero from '../images/CaseStudies/casestudiesbg.jpg';
import CaseStudyCard from '../components/CaseStudyCard';
import comingSoon from '../images/CaseStudies/coming-soon-bg.png'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Avatar from "@material-ui/core/Avatar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from '@mui/material/styles';

import aviation1 from '../images/CaseStudies/aviation-logo-color.svg';
import aviation2 from '../images/CaseStudies/aviation-logo-white.svg';
import manufac1 from '../images/CaseStudies/manufac1.svg';
import manufac2 from '../images/CaseStudies/manufac2.svg';
import hotel1 from '../images/CaseStudies/hotel1.svg';
import hotel2 from '../images/CaseStudies/hotel2.svg';

import itc from '../images/CaseStudies/itc-1.png';
import itc1 from '../images/CaseStudies/itc1.png';
import itc2 from '../images/CaseStudies/itc2.png';
import itc3 from "../images/CaseStudies/itc3.png";
import itc4 from "../images/CaseStudies/itc4.png";
import jsw1 from '../images/CaseStudies/jsw1.png';
import jsw2 from '../images/CaseStudies/jsw2.png';
import jsw3 from '../images/CaseStudies/jsw3.png';
import jsw4 from '../images/CaseStudies/jsw4.png';
import kia1 from '../images/CaseStudies/kia1.png';
import kia2 from '../images/CaseStudies/kia2.png';
import kia3 from '../images/CaseStudies/kia3.png';
import oem1 from '../images/CaseStudies/oem1.png';
import oem2 from '../images/CaseStudies/oem2.png';
import oem3 from '../images/CaseStudies/oem3.png';
import agr1 from "../images/CaseStudies/agr1.png";
import agr2 from "../images/CaseStudies/agr2.png";
import agr3 from "../images/CaseStudies/agr3.jpg";
import agr4 from "../images/CaseStudies/agr4.jpg";
import cfcl1 from '../images/CaseStudies/cfcl1.png'
import herobgm from '../images/CaseStudies/hero-bgm.png'
import sch from "../images/CaseStudies/sch.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLeftLong } from '@fortawesome/free-solid-svg-icons';

const ArrowRightIcon = ({ className }) => {
  return <FontAwesomeIcon icon={faArrowRight} className={className} />;
};


const cs = [
  ['ITC Hotels Limited',
    [
      'Objective: To enhance security, communication, and network infrastructure and access control for ITC Royal Bengal, ensuring internet for guests and internal communication for staff.',
      'Installation Summary: 850 Cameras, Master and Door Controller, UPS System',
      'Requisites at Client End: Power Supply, Network Connectivity',
      'Scope of Work: Supply 850 cameras, integrate access control, guest and admin networks, implement power backup, set up NAC',
      'Implemented: Guest network infrastructure, Data Administration Network, UPS System, Cable Layout Route, EPABX Systems',
      ' Challenges: Coordinating surveillance cameras, maintaining data security across network & expanding infrastructure for future growth.'
    ], itc1, itc2, `Info`,
    [[`ITC is one of India's top private companies and is a clear market leader in Indian Fast Moving Consumer Goods, Hotels, Paperboards and Packaging, Agri Business and Information Technology. Its pre-eminent hotel chain in India is a trailblazer in 'Responsible Luxury’.


`], [`With over 130 hotels in 80 locations, ITC is committed to creating lasting value for the nation and its stakeholders. ITC Hotels offer unique, luxurious experiences that are environmentally friendly. With a strong dedication to guests and the planet, ITC sets a high standard for sustainability and corporate responsibility.`
    ], [

      `But how does the world's largest hotel chain manage to keep all their hotels secure and well-monitored? Managing a large hotel involves creating advanced security and communication systems. ITC Royal Bengal teamed up with SVNT to accomplish this ambitious goal.
`]], `Relying on expert support`,
    [[`
ITC Royal Bengal needed a way to monitor all areas of the hotel for security and to manage entry and exit points, especially during emergencies. They also required a strong network for both staff and guests. Implementing these systems would mean higher security, better communication, and smooth operations, making everything safer and easier for everyone at ITC Royal Bengal.`

    ], [
      `The first goal is to make sure hotel guests have reliable internet. SVNT utilised fibre and cabling structures in a star topology, where all devices connect to a central switch. This setup ensures that information moves quickly and effectively to its destination. All devices and systems within the hotel can now communicate with each other easily and reliably, while also keeping data safe. Managing and fixing problems is made easier. This setup also lets the hotel add more to the network as they get bigger and handle more guests.`
    ],

    [`Internally hotel staff stay connected through a specialised network that operates on a ring topology, where devices are connected in a circular path. This setup not only keeps information flowing even if a part of the network goes down but also speeds up how quickly messages get through.`]
      , [`A key role in boosting security  is the access control network, which includes door controllers, master controllers, and CCTV cameras to manage who can enter different areas. For example, the door controller handles locking and unlocking doors based on authorised personnel, enhancing security in rooms and buildings. Behind  the scenes, a central control unit acts as the main hub, overseeing and coordinating multiple devices to keep things running smoothly throughout the hotel. Network access control (NAC) solutions keep an eye on who gets access to the hotel's network and makes sure that both  guests and staff are safe and secure.
`]], `Keeping Things Running Smoothly`,
    [
      [`It is crucial for information to flow smoothly throughout different parts of the hotel. During power outages, backup systems kick in to keep everything working, so there is no interruption or loss of information. Inside the hotel, all the calls and messages between rooms are managed by a centralised system making it easy for guests to communicate. `],
      [`Meanwhile, Genetec's Security Desk brings together different security systems like cameras, doors, alarms, and access controls into one easy-to-use platform, simplifying operations across different areas. You can watch live or recorded camera footage, control cameras that can move and zoom, unlock doors, adjust schedules, and handle alarms—all from one place.`],
      [`The collaboration between ITC Royal Bengal and SVNT reflects a commitment to excellence and enhancing guest experiences. This is a significant move from ITC towards modernising security and improving guest experiences in luxury hotels. By setting new standards in hospitality, ITC Royal Bengal solidifies its position as a leader in luxury accommodations and guest services.
`]], itc3, itc4, itc2, itc, sch],
  ['OM BOOKS', [
    'Objective: To cover all Indoor & Semi outdoor areas of Good Shepherd Church & Pratigya Hostel at Hyderabad, under Surveillance System over cloud including steaming & recording.',
    'Installation Summary: 119 Cameras',
    'Requisites at Client End: Established CCTV Network, Internet connection with sufficient bandwidth based on camera quantity, Client work station & Firewall',
    'Team Size: 4 technicians, 1 Engineer, 1 Sr. Engineer & 1 Technical Expert.',
    'Scope of Work: To incorporate all the IP-Cameras from different locations into the Stratocast over cloud including streaming & Recording on subscription basis.',
    'Challenges: GENETEC Compatible Camera makes & Model only suggested to be used for this solution.'
  ], oem1, oem2, `Info`, [[`Om Books International is one of the largest book publishing platforms with a huge collection of books from top selling authors. With 1,500 books already published and many more on the way, Om Books International has versions of its titles in over 28 languages.

`],

  [`To ensure comprehensive security for Good Shepherd Church and Pratigya Hostel in Hyderabad, we embarked on an ambitious project. Our goal was to cover every corner, from indoor halls to semi-outdoor areas, with a state-of-the-art cloud-based surveillance system. `]],
    `A Silver Lining`, [[`Genetec's Stratocast makes setting up a network video security system a breeze. Since it is cloud-based, accessing and managing surveillance footage is super easy—you can do it from anywhere using your laptop, tablet, or smartphone. This setup means security teams can quickly respond to any issues and resolve incidents faster, ensuring everything runs smoothly and safely. So, Stratocast not only simplifies but also enhances efficiency in handling security footage and incidents.
`], [`Utilising IP cameras, the system records video continuously, storing the footage securely in the cloud. The setup can expand effortlessly without requiring major changes. Security staff can watch live feeds from any device, ensuring constant oversight.`]
    ], `Unified in Harmony`, [[`
'We connected all the cameras from different areas into the Stratocast cloud system. This setup allows for both live streaming and recording, which you can access through a subscription service, ensuring everything is covered and easy to reach. We made sure to use only cameras that work with Genetec, so careful selection and compatibility checks were essential. By bringing these cameras together on one cloud platform, our surveillance system now covers all the critical spots.

`,],
    [`By integrating advanced IP cameras and leveraging the power of cloud technology, we created a seamless and accessible security network that keeps a vigilant eye on the entire premises, ensuring safety and peace of mind for everyone on site.`
    ]], oem3, oem2, oem3, oem1, sch],
  ['JSW Steel Limited', [
    'Objective: To provide real-time monitoring of pellet size at each disc level, enabling timely adjustments to enhance production efficiency and quality control.',
    'Scope of Work: Customising parameters for real-time pellet size monitoring, & enabling data-driven operational adjustments. The system ensures accurate reporting, minimises rejects, & enhances production efficiency with robust software and precise measuring tools.',
    'Challenges: Precise pellet size monitoring, compatibility and integration with plant infrastructure',
    'Implemented: Disk Efficiency analysis, fixing the plant operating parameters for new ores.'
  ], jsw1, jsw2, `Info`, [[`New materials are the heart of all technological advancements, making everything from phones and computers to cars and buildings better, faster, and more efficient. One company leading the charge in India is the JSW Group. They are known for excelling in large, complex projects with advanced technology and a strong commitment to sustainable growth. When JSW was faced with the challenge of modernising pelletization plants to utilise modern technology capabilities, they couldn’t refuse. Partnering with SVNT and CSI IMMT, made the transformative process that turns raw materials into the backbone of various industries, more of a reality.`],
  [`Teaming up with CSI IMMT was a no-brainer. When it comes to research and innovation, no one does it better than CSI IMMT. This institute excels in basic research and technology programs, particularly in solving challenges for mining, mineral, and metals industries. Sustainability is key, and zero-waste processes are crucial here. 
`]], `What is pelletization exactly?`, [[`


Pelletization turns raw materials like iron ore, biomass, or coal fines into small, uniform pellets. These pellets are used in industries like iron and steel, renewable energy, and agriculture. Making pellets requires precision to ensure they're all uniform in size and shape. This uniformity makes them easier to use in machines and transport without any waste. Additionally, their consistency improves the quality of products they're used in, making them easier to work with overall.`
    ]], `The Eve of Change`, [[`


'Eye-on-Pellet' is a game-changer in pellet production. It keeps a close watch on pellet size in real time as they're forming on the disc. This means operators get instant updates on how things are shaping up without any delays. This system allows operators to make quick adjustments to improve pellet quality. It uses smart camera tech and clever algorithms to measure pellet size accurately, making sure every pellet is just right and cutting down on mistakes. It is easy to install and customise for specific needs. 'Eye-on-Pellet' promises smoother production and better quality control for pellets.
`],

    [`The "Eye-on-Pellet" system has been put to the test in real pelletization plants to see how well it performs. It is designed to be super flexible and adaptable, fitting into all sorts of different situations and uses. What's cool about 'Eye-on-Pellet' is its versatility. Operators can choose to use one camera or multiple cameras depending on what they need to monitor. Plus, there are portable handheld systems if they need to keep an eye on things on the go. For a deeper dive into the data, the system can switch to offline mode in a lab, making it easy to dig deep into how those pellets are forming.
`], [`Eye-on-Pellet has proven that it is the real-deal for boosting efficiency and productivity in pelletization. With its high-tech monitoring and easy adjustments, operators can keep things running smoothly and churn out top-quality pellets. Flexible and effective, "Eye-on-Pellet" is setting a new standard for how pelletization plants operate.`]]
    , jsw3, jsw2, jsw4, jsw1, sch],
  ['Kempegowda International Airport Limited ', [
    'Objective: To enhance video surveillance at terminals, runways & parking areas, strengthen access control measures at Kempegowda International Airport.',
    'Installation Summary: T1 - 308 cameras, 47 ANPR, and 112 horn speakers; T2 - 2820 cameras',
    'Scope of Work: Migration of 1786 Bosch camera from VRM to Genetec, SITC of camera for MAR, SITC of ANPR Camera Integrations, Tyco ACS integration',
    'Client Requisites: CCTV network, internet connectivity',
    'Challenges: Camera compatibility with Genetec',
  ], kia1, kia2, `Info`,
    [[`
      Kempegowda International Airport (BLR) is Bangalore’s gateway to the world, sprawling over 4,000 acres just 35 kilometres north of the city in Devanahalli. It is one of India’s busiest airports, offering connections to all six inhabited continents and direct flights to five. Terminal 1 is a bustling hub for domestic flights, covering a whopping 150,556 square metres and handling up to 20 million passengers a year. Terminal 2, known as the "Garden Terminal," is a nod to Bangalore’s famous greenery. This stunning terminal was inaugurated by Prime Minister Narendra Modi in November 2022 and started welcoming passengers in January 2023.
      `],
    [`Owned and operated by Bengaluru International Airport Limited (BIAL), the airport teamed up with SVNT to enhance security and streamline operations`]],
    `Enhancing Airport Safety`,
    [[`
We enhanced video surveillance to keep a watchful eye on the two terminals, runways, and parking areas in real-time. Our focus on strengthening access control ensures that only authorised individuals could enter sensitive zones. Adding strong backup systems meant that these systems would run at all times, even during emergencies. By integrating all security functions into a single hub, from monitoring passenger flow to tracking vehicles, we've created a cohesive system that's easier to manage, boosting our security's strength and efficiency. Plus, our flexible infrastructure grows with the airport, securely handling and swiftly distributing vital information wherever it's needed. Managing everything from one place also made things run smoother, so they could respond quickly to any issues and solve problems faster. 
`]], `360 Vision`, [[`
At Kempegowda International Airport, we've enhanced security by linking cameras, that store video recordings, with Genetec's platform. This connection lets us efficiently gather data and manage surveillance footage. Integrating these cameras into Genetec's system gives us better visibility and control over our security setup. This setup demonstrates how Genetec's platform can adapt and work seamlessly with other systems, making our security operations more efficient and effective.
`],
    [`By adopting advanced technology and innovative solutions, Kempegowda International Airport has enhanced both security measures and operational efficiency. This commitment highlights their dedication to ensuring airports remain secure and well-prepared for future challenges.
`]], kia3, kia2, kia3, kia1, sch]

  , ['Chambal Fertilizers Limited ', [
    'Objective: To strengthen the security setup of CFCL Gadepan in plant and township area ',
    'Installation Summary: 79nos Licence for Cameras, 7nos Workstation licence for Monitoring PC, 78 cameras',
    'Scope of Work: Erection & Commissioning of IP Based CCTV System & Panic Alarm System',
    `Challenges:Chambal Fertilisers and Chemicals Limited (CFCL), founded in 1985 by Zuari Industries Limited, has become a major player in India's private sector fertiliser industry. Situated in the Gadepan area of Rajasthan's Kota district, CFCL operates two cutting-edge nitrogenous fertiliser plants. Together, these plants produce around 2 million metric tons of urea each year. Over the years, CFCL has not only bolstered its presence in the fertiliser market but has also emerged as a leader in North India's pesticide business.`,

  ], cfcl1, cfcl1, ` `,
    [],
    `Cameras That Think`,
    [[`
The CCTV system uses advanced IP cameras with Intelligent Video Analytics (IVA) to cover the entire area. These smart cameras automatically detect and analyse events in real-time, identifying any suspicious activities, movements, or objects. We installed night vision cameras in key spots, enabling visibility up to 150-170 metres even in low light. To top it off, fixed cameras at all gates and drains ensure our surveillance system is thorough and reliable.`]
    ], `Heads Up!`, [[`
The township, divided into blocks A, B, C, and D with a total of 540 houses, has been equipped with a panic alarm system. These systems feature panic buttons in every bedroom and bright rooftop LEDs for clear visibility. This battery-backed system immediately alerts the security control room during emergencies. When a panic alarm is activated, it sends a notification to the Control Room, where an alert message pops up. A GSM SIM installed in the controller then sends SMS alerts to designated mobile numbers in the security department. A GSM(Global System for Mobile Communications) SIM is a tiny, removable card that keeps your phone connected to the network for calls and internet.`],
    [`Our control room is the heart of our security system. Here, five powerful PCs are linked to 55-inch LED screens, keeping a close eye on cameras and alarms with uninterrupted power backup. In our server hub, all network connections and vital equipment are centralised, ensuring we capture 30 days of high-resolution video footage. This helps us analyse incidents in detail and gather evidence if needed.The security and plant staff are well-trained in using the CCTV system, with three levels of access: Viewers, Operators and Administrators.Our network uses fibre optics spread across a 20km area, connected in a loop to ensure backup if needed.
`], [`Partnering with SVNT has fortified CFCL’s commitment to security, ensuring every resident in their township feels protected. With advanced surveillance and a responsive panic alarm system, CFCL guarantees the safety of both their plant and the community it serves.As CFCL continues to grow and explore new opportunities, they do so with the confidence that their security measures are top-notch and that their operations are safeguarded against any threat.`]],
    , agr2, agr4, agr1, sch]
]

const menuItems = [
  {
    'id': 1,
    'name': 'All Case Studies',
    'image': aviation1,
    'selectedImage': aviation2,
    'cs': cs,
  },
  {
    'id': 2,
    'name': 'Aviation',
    'image': aviation1,
    'selectedImage': aviation2,
    'cs': [cs[3]]
  },
  {
    'id': 3,
    'name': 'Manufacturing',
    'image': manufac1,
    'selectedImage': manufac2,
    'cs': [cs[2], cs[1]]
  },
  {
    'id': 4,
    'name': 'Hotel',
    'image': hotel1,
    'selectedImage': hotel2,
    'cs': [cs[0]]
  },
  {
    'id': 5,
    'name': 'Agriculture',
    'image': hotel1,
    'selectedImage': hotel2,
    'cs': [cs[0]]
  },
  {
    'id': 6,
    'name': 'Space',
    'image': hotel1,
    'selectedImage': hotel2,
    'cs': [cs[0]]
  }
]

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function CaseStudies() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [expanded, setExpanded] = React.useState({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [sbg, setSbg] = useState('none'); // Default background image

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleReadMore = (index) => {
    setExpanded(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='cs-body'>
      <div className='cs-hero'>
        <picture>
          <source media="(max-width: 425px)" srcSet={herobgm} />
          <source media="(min-width: 426px)" srcSet={bghero} />
          <img className="cs-hero-bg" src={bghero} alt="" />
        </picture>
      </div>

      <div className='cs-list'>
        <div className='cs-main'>
          <div className='cs-search-bar'>
            <div>
              <p>Gain a deeper insight into our Case Studies</p>
            </div>
          </div>

          <div className='case-container'>
            <Box sx={{ width: '90%', height: 'auto' }}>
              <Tabs
                scrollButtons
                allowScrollButtonsMobile
                value={value}
                onChange={handleChange}
                variant="scrollable"
                aria-label="scrollable auto tabs example"
                sx={{
                  width: '100%',
                  '& .MuiTab-root': {
                    textTransform: 'none',
                    minWidth: '300px !important',
                    maxWidth: '312px !important',
                    marginRight: '4%',
                    color: 'inherit',
                  },
                  '& .MuiTab-root.Mui-selected': {
                    backgroundColor: '#251741',
                    color: 'white',
                    minWidth: '300px !important',
                    maxWidth: '312px !important',
                    marginRight: '4%'
                  },
                  '& .MuiTabs-indicator': {
                    display: 'none',
                  },
                }}
                className="custom-tabs"
              >
                {menuItems.map((item, index) => (
                  <Tab
                    key={item.id}
                    label={item.name}
                    iconPosition='start'
                    icon={
                      item.name !== 'All Case Studies' ? (
                        <Avatar
                          alt={item.name}
                          src={value === index ? item.selectedImage : item.image}
                          sx={{
                            color: 'inherit',
                            '&.Mui-selected': {
                              backgroundColor: 'purple',
                              color: 'white',
                            },
                            '&:hover': {
                              backgroundColor: 'purple',
                            },
                          }}
                        />
                      ) : null
                    }
                    className='custom-tab'
                    sx={{ minWidth: '50px', maxWidth: '50px' }}
                  />
                ))}
              </Tabs>

              {menuItems.map((item, index) => (
                <TabPanel key={item.id} value={value} index={index} dir={theme.direction}>
                  <div className="cs-details" >
                    {item.cs.map((caseStudy, csIndex) => (
                      <div key={csIndex} className={`cs-container ${expanded[csIndex] ? 'expanded abc top-to-bottom-fade-animation  ' : ''}`}>
                        {!isDropdownOpen && <img className="image-bg" src={caseStudy[2]} alt='' />}
                        {expanded[csIndex]}
                        <div className={`case-study ${isDropdownOpen ? 'dropdown-open' : ''}`} style={{ backgroundColor: isDropdownOpen ? '#0e1513' : 'inherit' }}>

                          <div className='csd-head' onClick={toggleDropdown}>
                            <h3 className='csd-heading'>{caseStudy[0]}</h3>
                            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg" className={isDropdownOpen ? 'rotate-180' : ''}
                            >
                              <path d="M27.0672 10.137L25.2932 8.34216L14.9999 18.7565L4.70662 8.34216L2.93262 10.137L14.9999 22.3463L27.0672 10.137Z" fill="#F1FAFF" />
                            </svg>
                          </div>
                          {isDropdownOpen && (
                            <div className='cs-wrapper'>
                              <ul className='csd-points'>
                                {caseStudy[1].map((detail, detailIndex) => {
                                  const parts = detail.split(':');
                                  return (
                                    <li className='csd-point' key={detailIndex}>
                                      <strong>{parts[0]}</strong>{parts.length > 1 && ':' + parts[1]}
                                    </li>
                                  );
                                })}
                              </ul>
                              <div className='cs-image'>
                                <img src={caseStudy[3]} alt='' className='only-desktop' />
                                {!expanded[csIndex] && (
                                  <button
                                    onClick={() => handleReadMore(csIndex)}
                                    className="read_btn def"
                                    style={{
                                      textDecoration: "underline", /* Enable underline */
                                      textUnderlinePosition: "under", /* Ensure underline is below text */
                                      paddingRight: "1em", /* Add padding to create whitespace */
                                    }}
                                  >
                                    Read More&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  </button>
                                )}
                              </div>
                            </div>
                          )}
                          {expanded[csIndex] && (
                            <div className='expanded-content'>
                              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img src={sch} alt="schematic image" className=' exp-img' style={{ width: "100%" }}></img>
                                <div className='expand-inner'>
                                  <div>

                                    <h2>{caseStudy[4]}</h2><br></br>

                                    <ul>
                                      {caseStudy[5].map((item) => (
                                        <li key={item}>{item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                  <img src={caseStudy[10]} className="expand-img only-desktop" ></img>
                                </div>

                                <br></br><br></br>
                              </div>
                              <div className='expand-inner'>
                                <div>
                                  <h2>{caseStudy[6]}</h2><br></br>
                                  <ul>
                                    {caseStudy[7].map((item) => (
                                      <li key={item}>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                                <img src={caseStudy[11]} className="expand-img only-desktop"></img>
                                <br></br><br></br>
                              </div>
                              <br></br><br></br>
                              <div className='expand-inner'>
                                <div>
                                  <h2>{caseStudy[8]}</h2><br></br>
                                  <ul>
                                    {caseStudy[9].map((item) => (
                                      <li key={item}>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                                <img src={caseStudy[12]} className="expand-img only-desktop"></img>
                                <br></br><br></br>
                              </div>

                            </div>
                          )}
                          <div className="cs-learn-more" style={{ bottom: "5%" }}>
                            {expanded[csIndex] && <button onClick={() => handleReadMore(csIndex)} className="read_btn"
                              style={{
                                position: "absolute",
                                right: "20%",
                                bottom: "10px",
                                color: "white",
                                /* Added styles for whitespace and underline extension */
                                textDecoration: "underline", /* Enable underline */
                                textUnderlinePosition: "under", /* Ensure underline is below text */
                                paddingRight: "1em", /* Add padding to create whitespace */
                              }}>Collapse&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>}


                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabPanel>
              ))}
            </Box>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}
