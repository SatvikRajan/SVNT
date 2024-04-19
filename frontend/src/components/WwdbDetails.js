
import { color, motion, px, useScroll } from 'framer-motion';
import img1 from '../images/Home/ip-surveillance-img.svg'
import img0 from '../images/Home/ip-net-img.png'
import img2 from '../images/Home/energy-img.svg'
import img3 from '../images/Home/surveillance-safety-img.svg'
import img4 from '../images/Home/security-mgmt-img.svg'
import img5 from '../images/Home/storage-img.svg'
import img7 from '../images/Home/integration-sol-img.svg'
import img6 from '../images/Home/audio-vis-img.svg'

import companyLogo from '../images/Home/companyLogo.svg';
import logo3 from '../images/Home/surveillance-safety-white.svg';
import logo1 from '../images/Home/ip-surveillance-white.svg';
import logo2 from '../images/Home/energy-white.svg';
import logo0 from '../images/Home/ip-net-white.svg';
import logo4 from '../images/Home/security-mgmt-white.svg';
import logo7 from '../images/Home/integration-white.svg';
import logo5 from '../images/Home/storage-white.svg';
import logo6 from '../images/Home/audio-vis-white.svg';
import { useState } from 'react';

import close from '../images/Home/cross.svg'
import '../css/wwdb.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLeftLong } from '@fortawesome/free-solid-svg-icons';

const ArrowRightIcon = ({ className }) => {
  return <FontAwesomeIcon icon={faArrowRight} className={className} />;
};




export default function WwdbDetails({click, index, setClick, topPos, leftPos}) {
    const names = [
        'IP Networking Solution',
        'IP Surveillance Solution',
        'Energy Solutions',
        'Surveillance and Safety Solutions',
        'Security & Management Services',
        'Storage',
        'Audio-Visual Solutions',  
        'Integration Solutions',
          
            
      ];
    
      const images = [img0,
          img1,
          img2,
          img3,
          img4,
          img5,
          img6,
          img7,
        
      ]
        
    const logo = [
        logo0,
        logo1,
        logo2,
        logo3,
        logo4,
        logo5,
        logo6,
        logo7,
    ]
    
        const details = [
            'IP camera systems revolutionize security by providing customizable video surveillance accessible from any location. ',
            'IP camera systems revolutionize security by providing customizable video surveillance accessible from any location. ',
            'IP camera systems revolutionize security by providing customizable video surveillance accessible from any location. ',
            'IP camera systems revolutionize security by providing customizable video surveillance accessible from any location. ',
            'IP camera systems revolutionize security by providing customizable video surveillance accessible from any location. ',
            'IP camera systems revolutionize security by providing customizable video surveillance accessible from any location. ',
            'IP camera systems revolutionize security by providing customizable video surveillance accessible from any location. ',
            'IP camera systems revolutionize security by providing customizable video surveillance accessible from any location. ',
    ];

    
    const handleClickOutside = (e) => {
        if (e.target === e.currentTarget) {
          // Clicked on the parent div, trigger exit animation
          setClick(false);
        }
    };

    let topVal = '' + topPos;
    let leftVal = '' + leftPos;
    topVal += 'px';
    leftVal += 'px';
    

    return (
        click &&
        
        <motion.div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0,0,0,0.9)',
            width: '1724px',
            height: '780px',
            borderRadius: '100px',
                zIndex: '100',
            cursor: 'pointer'
        }}
            initial={{ opacity: 0 }}
            animate={{ opacity: '1' , zIndex: 10}}
            exit={{ opacity: 0, zIndex: -1, transition: { duration: 0.5, delay:0.4} }}
            transition={{ duration: 0.5 }}
            
            
            >

                <motion.div style={{
                position: 'absolute',
                top: '10%',
                left: '1546px',
                cursor: 'pointer',
                // zIndex:'100'
                }}
                    
                onClick={handleClickOutside}
                >
                    <motion.img onClick={handleClickOutside}src={close}>
                    </motion.img>
                </motion.div>    

                <motion.div
                    style={{
                        position: 'absolute',
                        width: 'fit-content'
                    }}
                    initial={{
                        textAlign: 'center', top: topVal, left: leftVal
                    }}
                    animate={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        
                        top: '89px',
                        left: '113px',
                    }}

                    transition={{duration:0.5}}
                >
                    <motion.p
                        style={{
                            // fontSize: '42px',
                            fontSize: '28px',
                            fontFamily: 'poppins',
                            margin: 0,
                            padding: 0,
                            width: 'fit-content',
                            color: 'white'
                        }}
                    >{names[index]}</motion.p>
                    <motion.img src={logo[index]}></motion.img>
                </motion.div>

                <motion.div
                    style={{
                        position: 'absolute',
                        left: '291px',
                        width: '436px',
                        height: '267px',
                        borderRadius: '20px',
                        zIndex: '101'
                    }}
                    initial={{ top: '300px', opacity: 0 }}
                    animate={{ top: '286px', opacity: 1 }}
                    transition={{ delay: 0.3, duration:0.5  }}
                >
                    <motion.img
                        src={images[index]}
                        
                    >
                    </motion.img>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, top: '260px' }}
                    animate={{ opacity: 1, top: '286px' }}
                    transition={{ delay: 0.3, duration:0.5  }}
                    style={{
                        textAlign: 'left',
                        position: 'absolute',
                        width: '559px',
                        height: '150px',
                        top: '286px',
                        left: '1018px',
                        color: 'white'

                        }}>
                    <motion.p
                        style={{
                        fontSize: '24px',
                        lineHeight: '50px',
                        letterSpacing: '5%',
                        color: 'white',
                        margin: '0',
                        padding: '0%'
                        
                        }}
                        
                    >
                        {details[index]}
                    </motion.p>
                </motion.div>

                <motion.div className="wwdb-learn-more"
                    initial={{ opacity:'0',  top: '673px', left: '1126px' }}
                    animate={{  opacity:'1',top: '508px', left: '1108px', width: '471px' }}
                    transition={{ delay: 0.3, duration:0.5 }}
                >
          <motion.a href="/services" class="btn btn-primary btn-arrow"><motion.p className='learnMore' style={{color:'white'}}><motion.span>Read More
            <ArrowRightIcon className="fas"/>
            </motion.span></motion.p></motion.a> 
        </motion.div>
                

        
        
        
        </motion.div>
    )
    

}