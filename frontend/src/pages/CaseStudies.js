import React from 'react'
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

import itc1 from '../images/CaseStudies/itc1.png';
import itc2 from '../images/CaseStudies/itc2.png';
import jsw1 from '../images/CaseStudies/jsw1.png';
import jsw2 from '../images/CaseStudies/jsw2.png';
import kia1 from '../images/CaseStudies/kia1.png';
import kia2 from '../images/CaseStudies/kia2.png';
import oem1 from '../images/CaseStudies/oem1.png';
import oem2 from '../images/CaseStudies/oem2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLeftLong } from '@fortawesome/free-solid-svg-icons';

const ArrowRightIcon = ({ className }) => {
  return <FontAwesomeIcon icon={faArrowRight} className={className} />;
};


const cs = [['ITC Hotels Limited',
  [
  'Objective: To enhance security, communication, and network infrastructure and access control for ITC Royal Bengal, ensuring internet for guests and internal communication for staff.',
  'Installation Summary: 850 Cameras, Master and Door Controller, UPS System',
  'Requisites at Client End: Power Supply, Network Connectivity',
  'Scope of Work: Supply 850 cameras, integrate access control, guest and admin networks, implement power backup, set up NAC',
  'Implemented: Guest network infrastructure, Data Administration Network, UPS System, Cable Layout Route, EPABX Systems',
  ' Challenges: Coordinating surveillance cameras, maintaining data security across network & expanding infrastructure for future growth.'
], itc1, itc2],
  ['OEM BOOKS', [
    'Objective: To cover all Indoor & Semi outdoor areas of Good Shepherd Church & Pratigya Hostel at Hyderabad, under Surveillance System over cloud including steaming & recording.',
    'Installation Summary: 119 Cameras',
    'Requisites at Client End: Established CCTV Network, Internet connection with sufficient bandwidth based on camera quantity, Client work station & Firewall',
    'Team Size: 4 technicians, 1 Engineer, 1 Sr. Engineer & 1 Technical Expert.',
    'Scope of Work: To incorporate all the IP-Cameras from different locations into the Stratocast over cloud including streaming & Recording on subscription basis. ',
    'Challenges: GENETEC Compatible Camera makes & Model only suggested to be used for this solution.'
  ], oem1, oem2],
  ['JSW Steel Limited', [
    'Objective: To enhance security, communication, and network infrastructure and access control for ITC Royal Bengal, ensuring internet for guests and internal communication for staff.',
    'Installation Summary: 850 Cameras, Master and Door Controller, UPS System',
    'Requisites at Client End: Power Supply ,Network Connectivity',
    'Scope of Work: Supply 850 cameras, integrate access control, guest and admin networks, implement power backup, set up NAC',
    'Implemented: Guest network infrastructure, Data Administration Network, UPS System, Cable Layout Route, EPABX Systems',
    'Challenges: Coordinating surveillance cameras, maintaining data security across network & expanding infrastructure for future growth.'
  ], jsw1, jsw2],
  ['Kempegowda International Airport Limited ', [
    'Objective: To enhance security, communication, and network infrastructure and access control for ITC Royal Bengal, ensuring internet for guests and internal communication for staff.',
    'Installation Summary: 850 Cameras, Master and Door Controller, UPS System',
    'Requisites at Client End: Power Supply ,Network Connectivity',
    'Scope of Work: Supply 850 cameras, integrate access control, guest and admin networks, implement power backup, set up NAC',
    'Implemented: Guest network infrastructure, Data Administration Network, UPS System, Cable Layout Route, EPABX Systems',
    'Challenges: Coordinating surveillance cameras, maintaining data security across network & expanding infrastructure for future growth.'
  ], kia1, kia2]
  
]

const menuItems = [
  {
    'id': 1,
    'name': 'All Case Studies',
    'image': aviation1,
    'selectedImage': aviation2,
    'cs':cs,
  },
  {
    'id': 2,
    'name': 'Aviation',
    'image': aviation1,
    'selectedImage': aviation2,
    'cs':[cs[3]]
  },
  {
    'id': 3,
    'name': 'Manufacturing',
    'image': manufac1,
    'selectedImage': manufac2,
    'cs':[cs[2], cs[1]]
  },
  {
    'id': 4,
    'name': 'Hotel',
    'image': hotel1,
    'selectedImage': hotel2,
    'cs':[cs[0]]
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
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className='cs-body'>
      <div className='cs-hero'>
        <div>
          <img className="cs-hero-bg" src={bghero} alt="" />
          {/* <p className='image-text'>Empower your aspirations <br />at SVNT Infotech!</p> */}
        </div>
      </div>

      <div className='cs-list'>
      <div className='cs-main'>
        <div className='cs-search-bar'>
          <div>
            <p>Gain a deeper insight into our Case Studies</p>
          </div>
        </div>

        <div className='case-container'>
        <Box sx={{width:'90%', height:'auto'}}>
         
        <Tabs
          value={value}
          onChange={handleChange}
              variant="scrollable"
              // className='menu'
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
                sx={{
                // backgroundColor:'pink',
                  width: '100%',
                  // backgroundColor:'blue',
                '& .MuiTab-root': {
                  textTransform: 'none', // Prevent uppercase transformation
                  minWidth: '312px !important',
                  maxWidth: '312px !important',
                  marginRight: '4%',
                  color: 'inherit', // Default font color
                },
                '& .MuiTab-root.Mui-selected': {
                  backgroundColor: '#251741', // Background color when tab is selected
                  color: 'white', // Font color when tab is selected
                  // fontWeight: 'bold', // Font weight when tab is selected
                  minWidth: '312px !important',
                  maxWidth: '312px !important',
                  marginRight: '4%'
                },
                '& .MuiTabs-indicator': {
                  display: 'none', // Hide the default indicator
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
                        color: 'inherit', // Ensure the default font color
                        '&.Mui-selected': {
                          backgroundColor: 'purple', // Background color when tab is selected
                          color: 'white', // Font color when tab is selected
                        },
                        '&:hover': {
                          backgroundColor: 'purple', // Background color on hover (optional)
                        },
                      }}
                    />
                  ) : null
                }
             className='custom-tab'
             sx={{ minWidth: '50px', maxWidth: '50px' }} // Set the minWidth and maxWidth directly on Tab
              />
            ))}
          </Tabs>

          {menuItems.map((item, index) => (
            <TabPanel key={item.id} value={value} index={index} dir={theme.direction}>
              <div className="cs-details">
                
              {item.cs.map((caseStudy, csIndex) => (
                <div className='cs-container'>
                  <img className="image-bg" src={caseStudy[2]} alt='' />
                  <div key={csIndex} className='case-study'>
                    <h3 className='csd-heading'>{caseStudy[0]}</h3>
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
                        <img src={caseStudy[3]} alt='' />
                        <div className="wwdb-learn-more cs-learn-more" style={{width:'300px', fontSize:'30px !important'}}>
                          <button onClick={() => handleExpand(csIndex)} className="btn btn-primary cs-btn btn-arrow"
                          ><p className='cs-lm learnMore'><span style={{color:'white !important'}}> {expanded === csIndex ? 'Collapse' : 'Read more'}
                                        <ArrowRightIcon className="fas" />
                            </span></p>
                          </button>    
                        </div>
                      </div>
                    </div>

                    {expanded === csIndex && (
                            <div className='expanded-content'>
                              <p>Expanded content goes here...</p>
                              {/* Add the details you want to show when the div is expanded */}
                            </div>
                          )}
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
