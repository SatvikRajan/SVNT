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

const menuItems = [
  {
    'id': 1,
    'name': 'All Case Studies',
    'image': aviation1,
    'selectedImage' : aviation2,
  },
  {
    'id': 2,
    'name': 'Aviation',
    'image': aviation1,
    'selectedImage' : aviation2,
  },
  {
    'id': 3,
    'name': 'Manufacturing',
    'image': aviation1,
    'selectedImage' : aviation2,
  },
  {
    'id': 4,
    'name': 'Hotel',
    'image': aviation1,
    'selectedImage' : aviation2,
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
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

        <div className='services-container'>
        <Box sx={{width:'81%'}}>
         
        <Tabs
          value={value}
          onChange={handleChange}
              variant="scrollable"
              // className='menu'
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
                sx={{
                width: '100%',
                '& .MuiTab-root': {
                  textTransform: 'none', // Prevent uppercase transformation
                  // minWidth: '120px', // Ensure tabs have a minimum width
                  color: 'inherit', // Default font color
                },
                '& .MuiTab-root.Mui-selected': {
                  backgroundColor: '#251741', // Background color when tab is selected
                  color: 'white', // Font color when tab is selected
                  // fontWeight: 'bold', // Font weight when tab is selected
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
             icon={<Avatar alt={item.name} src={value === index ? item.selectedImage : item.image}
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
             />}
             className='custom-tab'
              />
            ))}
          </Tabs>

          {menuItems.map((item, index) => (
            <TabPanel key={item.id} value={value} index={index} dir={theme.direction}>
              <div className="cs-details">
              </div>
            </TabPanel>
          ))}
          </Box>
          </div>

      </div>

      </div>
      </div>
  )
}
