import wwdb2 from '../images/Home/IP-network.svg';
import wwdb4 from '../images/Home/audio-visual.svg';
import wwdb5 from '../images/Home/security-and-mgmt.svg';
import wwdb6 from '../images/Home/energy.svg';
import servicebg from "../images/Services/servicebg.webp";
import "../css/services2.css";
import { useTheme } from '@mui/material/styles';
import { useLayoutEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Avatar from "@material-ui/core/Avatar";
import energy1 from '../images/Services/energy1.svg'
import energy2 from '../images/Services/energy2.svg'
import ss1 from '../images/Services/ss1.svg'
import ss2 from '../images/Services/ss2.svg'
import is1 from '../images/Services/is1.svg'
import is2 from '../images/Services/is2.svg'
import wwdb1 from '../images/Services/wwdb1.svg'
import wwdb11 from '../images/Services/wwdb11.svg'
import wwdb21 from '../images/Services/wwdb21.svg'
import wwdb41 from '../images/Services/wwdb41.svg'
import wwdb61 from '../images/Services/wwdb61.svg'
import wwdb51 from '../images/Services/wwdb51.svg'
import { Helmet } from 'react-helmet';
import IPSlider from "../components/Sliders/IPSSlider";
import INSlider from "../components/Sliders/INSSlider";
import IntegrationSlider from "../components/Sliders/IntegrationSlider";
import AudioVisualSlider from "../components/Sliders/AudioVisualSlider";
import SecuritySlider from "../components/Sliders/SecuritySlider";
import SurveillanceSlider from "../components/Sliders/SurveillanceSlider";
import StorageSlider from "../components/Sliders/StorageSlider";
import EnergySlider from "../components/Sliders/EnergySlider";
import servicebgm from '../images/Services/servicebgm.jpg'
import React from "react";
import { useLocation } from 'react-router-dom';


const menuItems = [
  {
    id: 0,
    image: wwdb1,
    selectedImage: wwdb11,
    name: "Networking",
    details: [
      { header: "Network Size Flexibility", content: "The size of an IP network solution can vary, from a few devices to thousands in a large network." },
      { header: "Communication Support", content: "Supports communication systems like email, web browsing, and video streaming." },
      { header: "Effortless Information Exchange", content: "Allows easy exchange of information and resources." },
    ],
    slider: <INSlider />,
  },
  {
    id: 1,
    image: wwdb2,
    selectedImage: wwdb21,
    name: "Data Centers",
    details: [
      { header: "Disaster Recovery", content: "Ensures a swift recovery from potential disasters." },
      { header: "Scalability", content: "Effortlessly add or remove resources to match your changing needs." },
      { header: "Centralised Management", content: "Keep all IT operations and equipment in one place for easier management and upkeep." },
    ],
    slider: <IPSlider />,
  },
  {
    id: 2,
    image: energy1,
    selectedImage: energy2,
    name: "Electrical and Backup",
    details: [
      { header: "Power Backup", content: "Our UPS solution provides automatic backup power during outages." },
      { header: "Surge Protection", content: "Guards against voltage spikes and power surges help protect sensitive equipment and data." },
      { header: "Lightning Solution", content: "Advanced systems minimise damage from lightning strikes." },
    ],
    slider: <EnergySlider />,
  },
  {
    id: 3,
    image: ss1,
    selectedImage: ss2,
    name: "Surveillance and Safety Solutions",
    details: [
      { header: "Remote Video Access", content: "Easy access to video feeds on any device from any location" },
      { header: "Seamless Integration", content: "Customisable features and integrates effortlessly into existing IT networks" },
      { header: "Fault Detection", content: "Detects malfunctions, equipment failures, or evidence for accident investigations." },
    ],
    slider: <SurveillanceSlider />,
  },
  {
    id: 4,
    image: wwdb6,
    selectedImage: wwdb61,
    name: "Physical Security Automation",
    details: [
      { header: "Card Scanners", content: "Simplify who gets in and out with card scanners that quickly verify and allow access to the right people" },
      { header: "Actuators", content: "Automate your locks and gates with actuators that automatically respond when access is granted or denied" },
      { header: "Motion Detection", content: "Use motion sensors to spot and alert you to any unexpected movements in secure areas" },
    ],
    slider: <SecuritySlider />,
  },
  {
    id: 5,
    image: wwdb5,
    selectedImage: wwdb51,
    name: "Server Storage",
    details: [
      { header: "Resource Accessibility", content: "Resources are accessible, easy to use, and cost-effective." },
      { header: "Data Redundancy", content: "Ensures your data is always safe with strong backup systems that protect against loss and corruption" },
      { header: "Collaboration", content: "NAS and SAN aid in collaboration and quick response to customer needs." },
    ],
    slider: <StorageSlider />,
  },
  {
    id: 6,
    image: wwdb4,
    selectedImage: wwdb41,
    name: "Audio-Visual Solutions",
    details: [
      { header: "Multimedia Integration", content: "Integrate audio, video, display, lighting, and system controls." },
      { header: "Venue Application", content: "Perfect for conference rooms, auditoriums, cafeterias, classrooms, and more." },
      { header: "Digital Displays", content: "Use digital displays to create dynamic content ideal for entertainment, merchandise, and advertising." },
    ],
    slider: <AudioVisualSlider />,
  },
  {
    id: 7,
    image: is1,
    selectedImage: is2,
    name: "Integration Solutions",
    details: [
      { header: "Speedy Communication", content: "Boost productivity and quality by speeding up information flow and cutting costs." },
      { header: "Integration", content: "Easily connect new and existing hardware with our integration solutions." },
      { header: "Collaboration", content: "Simplify sharing info and collaboration with our machine integration." },
    ],
    slider: <IntegrationSlider />,
  },
];
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

const Services = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const location = useLocation();

  useLayoutEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = parseInt(params.get('tab'));
    if (!isNaN(tab)) {
      setValue(tab);
      const element = document.getElementById(`tab-${tab}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        const timeout = setTimeout(() => {
          const retryElement = document.getElementById(`tab-${tab}`);
          if (retryElement) {
            retryElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
        return () => clearTimeout(timeout);
      }
    }
  }, [location]);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Helmet>
        <title>Our Services – SVNT Infotech</title>
        <meta
          name="description"
          content="Explore our range of services including smart wearables, IoT solutions, and software development."
        />
        <link rel="canonical" href="https://svntech.com/services" />
      </Helmet>

      <div className="App">
        <picture>
          <source media="(max-width: 480px)" srcSet={servicebgm} />
          <source media="(min-width: 480px)" srcSet={servicebg} />
          <img
            style={{ position: "relative" }}
            src={servicebg}
            className="service-bg"
            alt=""
          />
        </picture>

        {/* <p className='service-text'>Expertise you can trust:<br /> Tailored solutions just for you!</p> */}
        <div className='services-main'>

          <p className='services-mainhead'>
            Gain a deeper insight into our{" "}
            <span style={{ fontWeight: "500", color: "black" }}>Services</span>
          </p>
          <div className='case-container'>
            <Box sx={{ width: '100%', height: 'auto', padding: 'auto' }}>
              <div className='services-parent-container'>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  // className='menu'
                  scrollButtons
                  allowScrollButtonsMobile
                  aria-label="scrollable auto tabs example"
                  sx={{
                    // backgroundColor:'pink',
                    width: '100%',
                    '& .MuiTab-root': {
                      textTransform: 'none', // Prevent uppercase transformation
                      color: 'inherit', // Default font color
                      minWidth: '300px !important',
                      // marginLeft:'3% !important',
                      maxWidth: '500px !important',
                      fontSize: '22px !important',
                      // marginRight: '3% !important',
                    },
                    '& .MuiTab-root.Mui-selected': {
                      backgroundColor: '#251741', // Background color when tab is selected
                      color: 'white', // Font color when tab is selected
                      // fontWeight: 'bold', // Font weight when tab is selected
                      minWidth: '300px !important',
                      fontSize: '22px !important',
                      marginRight: '3% !important',
                      // maxWidth: '500px !important',
                    },
                    '& .MuiTabs-indicator': {
                      display: 'none',// Hide the default indicator
                    },
                    '& .MuiSvgIcon-root': {
                      height: '3em',
                      width: '3em'
                    },
                    '& .MuiTabs-scrollButtons.Mui-disabled': {
                      opacity: 0.3,
                    }
                  }}
                  className="custom-tabs"
                >
                  {menuItems.map((item, index) => (
                    <Tab
                      key={item.id}
                      label={item.name}
                      iconPosition='start'
                      icon={
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
                      }
                      className='custom-services-tab custom-tab '
                      sx={{ minWidth: '50px', maxWidth: '50px' }} // Set the minWidth and maxWidth directly on Tab
                    />
                  ))}
                </Tabs>
                {menuItems.map((item, index) => (
                  <TabPanel key={item.id} value={value} index={index} dir={theme.direction}>
                    <div id={`tab-${item.id}`} className="services-details">
                      <div className='g1'>
                        {item.details.map((detail, index) => (
                          <div key={index} className="service-card">
                            <h2 className="card-header">{detail.header}</h2>
                            <p style={{ fontSize: "22px", paddingTop: '10px' }}>{detail.content}</p>
                          </div>
                        ))}
                      </div>
                      <div className='g2'>
                        {item.slider}
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </div>
            </Box>
          </div>

        </div>

      </div>
    </>
  );
}

export default Services;