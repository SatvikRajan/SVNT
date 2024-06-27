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
    image: wwdb1,
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
    image: wwdb3,
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
    image: wwdb7,
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
        <div className='services-container'>
          <Box sx={{ width: '81%' }}>
            
        <ThemeProvider theme={theme}>
        <Tabs
          value={value}
          onChange={handleChange}
              variant="scrollable"
              // className='menu'
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
              sx={{
                width: '100%',
                // backgroundColor: '#fff', // Example background color
                // Add more styles as needed
              }}
              className="custom-tabs"
        >
         {menuItems.map((item, index) => (
              <Tab
                key={item.id}
                label={item.name}
                iconPosition='start'
             icon={<Avatar alt={item.name} src={item.image}
             />}
             className='custom-tab'
             sx={{
              '&.Mui-selected': {
                 color: '#251741',
                fontWeight: 'bold',
              },
            }}
              />
            ))}
            </Tabs>
            </ThemeProvider>

            {menuItems.map((item, index) => (
              <TabPanel key={item.id} value={value} index={index} dir={theme.direction} id={item.name.toLowerCase().replace(/\s+/g, '-')}>
                <div className="details">
                  <div className='g1'>``
                    {[...Array(3)].map((_, i) => (
                      <div key={i}>
                        <h2>{item.name}</h2>
                        <p>{item.details}</p>
                      </div>
                    ))}
                  </div>
                  <div className='g2'>
                    {item.slider}
                  </div>
                </div>
              </TabPanel>
            ))}
          </Box>
        </div>

      </div>

    </div>
  );
}
