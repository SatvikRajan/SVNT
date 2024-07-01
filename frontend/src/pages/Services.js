import wwdb1 from '../images/Home/IP-surveillance.svg';
import wwdb2 from '../images/Home/IP-network.svg';
import wwdb3 from '../images/Home/integration.svg';
import wwdb4 from '../images/Home/audio-visual.svg';
import wwdb5 from '../images/Home/security-and-mgmt.svg';
import wwdb6 from '../images/Home/energy.svg';
import wwdb7 from '../images/Home/surveillance-and-safety.svg';
import servicebg from "../images/Services/servicebg.jpg";
import "../css/services2.css";
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Avatar from "@material-ui/core/Avatar";
// import SwipeableViews from 'react-swipeable-views';
// import SwipeableViews from 'react-swipeable-views';
import energy1 from '../images/Services/energy1.svg'
import energy2 from '../images/Services/energy2.svg'
import ss1 from '../images/Services/ss1.svg'
import ss2 from '../images/Services/ss2.svg'
import is1 from '../images/Services/is1.svg'
import is2 from '../images/Services/is2.svg'

import IPSlider from "../components/Sliders/IPSSlider";
import INSlider from "../components/Sliders/INSSlider";
import IntegrationSlider from "../components/Sliders/IntegrationSlider";
import AudioVisualSlider from "../components/Sliders/AudioVisualSlider";
import SecuritySlider from "../components/Sliders/SecuritySlider";
import SurveillanceSlider from "../components/Sliders/SurveillanceSlider";
import StorageSlider from "../components/Sliders/StorageSlider";


import React from "react";

import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: 'purple',
            fontWeight: '100',
          },
        },
      },
    },
  },
});

const menuItems = [
  {
    id: 1,
    image: ss1,
    selectedImage: ss2,
    name: "IP Surveillance Solution",
    details:
      "Enhance operational productivity and elevate quality standards by accelerating information flow and reducing costs within your organization. Our system integration solutions seamlessly integrate with both new and existing hardware, ensuring a cohesive environment. We simplify sharing information, communication, and collaboration among different machines with our machine ",
    slider: <IPSlider />,
  },

  {
    id: 2,
    image: wwdb2,
    name: "IP Networking Solution",
    details:
      "Enhance operational productivity and elevate quality standards by accelerating information flow and reducing costs within your organization. Our system integration solutions seamlessly integrate with both new and existing hardware, ensuring a cohesive environment. We simplify sharing information, communication, and collaboration among different machines with our machine ",
    slider: <INSlider />,
  },
  {
    id: 3,
    image: is1,
    selectedImage: is2,
    name: "Integration Solutions",
    details:
      "Enhance operational productivity and elevate quality standards by accelerating information flow and reducing costs within your organization. Our system integration solutions seamlessly integrate with both new and existing hardware, ensuring a cohesive environment. We simplify sharing information, communication, and collaboration among different machines with our machine ",
    slider: <IntegrationSlider />,
  },
  {
    id: 4,
    image: wwdb4,
    name: "Audio-Visual",
    details:
      "Enhance operational productivity and elevate quality standards by accelerating information flow and reducing costs within your organization. Our system integration solutions seamlessly integrate with both new and existing hardware, ensuring a cohesive environment. We simplify sharing information, communication, and collaboration among different machines with our machine ",
    slider: <AudioVisualSlider />,
  },
  {
    id: 5,
    image: wwdb6,
    name: "Security & Management",
    details:
      "Enhance operational productivity and elevate quality standards by accelerating information flow and reducing costs within your organization. Our system integration solutions seamlessly integrate with both new and existing hardware, ensuring a cohesive environment. We simplify sharing information, communication, and collaboration among different machines with our machine ",
    slider: <SecuritySlider />,
  },

  {
    id: 6,
    image: ss1,
    selectedImage: ss2,
    name: "Surveillance and Safety",
    details:
      "Enhance operational productivity and elevate quality standards by accelerating information flow and reducing costs within your organization. Our system integration solutions seamlessly integrate with both new and existing hardware, ensuring a cohesive environment. We simplify sharing information, communication, and collaboration among different machines with our machine ",
    slider: <SurveillanceSlider />,
  },

  {
    id: 7,
    image: wwdb5, 
    name: "Storage",
    details:
      "Enhance operational productivity and elevate quality standards by accelerating information flow and reducing costs within your organization. Our system integration solutions seamlessly integrate with both new and existing hardware, ensuring a cohesive environment. We simplify sharing information, communication, and collaboration among different machines with our machine ",
    slider: <StorageSlider />,
  },

  {
    id: 8,
    image: energy1,
    selectedImage: energy2,
    name: "Energy Solutions",
    details:
      "Enhance operational productivity and elevate quality standards by accelerating information flow and reducing costs within your organization. Our system integration solutions seamlessly integrate with both new and existing hardware, ensuring a cohesive environment. We simplify sharing information, communication, and collaboration among different machines with our machine ",
      slider: <SurveillanceSlider/>,
  }
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

export default function Services() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <img
        style={{ position: "relative", marginTop: "-0.5rem" }}
        src={servicebg}
        className="service-bg"
        alt=""
      />
      {/* <p className='service-text'>Expertise you can trust:<br /> Tailored solutions just for you!</p> */}
      <div className='services-main'>

        <p className='services-mainhead'>
          Gain a deeper insight into our{" "}
          <span style={{ fontWeight: "500", color: "black" }}>Services</span>
        </p>
        <div className='case-container'>
        <Box sx={{width:'100%', height:'auto', padding:'auto'}}>
         <div className='services-parent-container'>
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
                '& .MuiTab-root': {
                  textTransform: 'none', // Prevent uppercase transformation
                  color: 'inherit', // Default font color
                  minWidth: '500px !important',
                  // marginLeft:'3% !important',
                  maxWidth: '500px !important',
                  // marginRight: '3% !important',
                },
                '& .MuiTab-root.Mui-selected': {
                  backgroundColor: '#251741', // Background color when tab is selected
                  color: 'white', // Font color when tab is selected
                  // fontWeight: 'bold', // Font weight when tab is selected
                  minWidth: '500px !important',
                  marginRight: '3% !important',
                  // maxWidth: '500px !important',
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
              <div className="services-details">
                <div className='g1'>
                  {[...Array(3)].map((_, i) => (
                    <div className='sub-service-detail' key={i}>
                      <h2 className='sh'>{item.name}</h2>
                      <p className='sd'>{item.details}</p>
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
  );
}
