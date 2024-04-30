
import { color, motion, px, useScroll } from 'framer-motion';
import img1 from '../images/Home/ip-surveillance-img.png'
import img0 from '../images/Home/ip-net-sol-img.png'
import img2 from '../images/Home/energy-sol-img.png'
import img3 from '../images/Home/surveillance-safety-sol-img.png'
import img4 from '../images/Home/sec-mgmt-img.png'
import img5 from '../images/Home/storage-img.svg'
import img7 from '../images/Home/integration-sol-img.svg'
import img6 from '../images/Home/audio-vis-img.svg'
import logo3 from '../images/Home/surveillance-safety-white.svg';
import logo1 from '../images/Home/ip-surveillance-white.svg';
import logo2 from '../images/Home/energy-white.svg';
import logo0 from '../images/Home/ip-net-white.svg';
import logo4 from '../images/Home/security-mgmt-white.svg';
import logo7 from '../images/Home/integration-white.svg';
import logo5 from '../images/Home/storage-white.svg';
import logo6 from '../images/Home/audio-vis-white.svg';
import close from '../images/Home/cross.svg'
import '../css/wwdb.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLeftLong } from '@fortawesome/free-solid-svg-icons';

const ArrowRightIcon = ({ className }) => {
    return <FontAwesomeIcon icon={faArrowRight} className={className} />;
};




export default function WwdbDetails({ click, index, setClick, topPos, leftPos }) {
    const names = [
        'IP Networking Solution',
        'IP Surveillance Solution',
        'Energy Solutions',
        'Surveillance and Safety Solutions',
        'Security & Management Services',
        'Storage and Archives',
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
        'IP networks ensure smooth device interaction, vital for home and corporate setups, integrating seamlessly for uninterrupted data transmission.',
        'IP camera systems revolutionise security with customisable surveillance accessible anywhere, integrating with existing systems for coverage and effectiveness.',
        'Empower your organisation with energy solutions, optimising usage, cutting costs, and minimising environmental impact through custom sustainable plans.',
        'Our systems offer thorough monitoring, ensuring swift responses to threats.  From runway monitoring to fire alarm systems, we prioritise safety in any environment.',
        'Explore key security solutions for businesses, from network audits to advanced access control systems, ensuring robust protection and efficiency',
        'NAS and SAN services simplify data storage, allowing collaboration and prompt customer response, ensuring accessibility, affordability, and quick recovery.',
        'Enhance communication and engagement with our tailored audio-visual solutions, perfect for presentations, events, and meetings covering displays to sound systems.',
        'Boost efficiency with our integration solutions, merging systems for seamless communication. Simplify processes, reduce complexity, and automate tasks effectively.',
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
            width: '90%',
            height: '780px',
            borderRadius: '100px',
            zIndex: '100',
            cursor: 'pointer'
        }}
            onClick={handleClickOutside}
            initial={{ opacity: 0 }}
            animate={{ opacity: '1', zIndex: 10 }}
            exit={{ opacity: 0, zIndex: -1, transition: { duration: 0.5, delay: 0.4 } }}
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
                <motion.img onClick={handleClickOutside} src={close}>
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
                    left: '36%',
                }}

                transition={{ duration: 0.8 }}
            >
                <motion.img
                    src={logo[index]}></motion.img>
                <motion.p
                    style={{
                        // fontSize: '42px',
                        fontSize: '42px',
                        fontFamily: 'poppins',
                        margin: 0,
                        padding: 0,
                        width: 'fit-content',
                        color: 'white'
                    }}
                >{names[index]}</motion.p>

            </motion.div>

            <motion.div
                style={{
                    position: 'absolute',
                    left: '178px',
                    width: '436px',
                    height: '267px',
                    borderRadius: '20px',
                    zIndex: '101'
                }}
                initial={{ top: '300px', opacity: 0 }}
                animate={{ top: '208px', opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                <motion.img style={{ width: '600px', height: '400px' }}
                    src={images[index]}

                >
                </motion.img>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, top: '260px' }}
                animate={{ opacity: 1, top: '270px' }}
                transition={{ delay: 0.3, duration: 0.8 }}
                style={{
                    textAlign: 'left',
                    position: 'absolute',
                    width: '559px',
                    height: '150px',
                    left: '858px',
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
                initial={{ opacity: '0', top: '673px', left: '1126px' }}
                animate={{ opacity: '1', top: '536px', left: '1140px', width: '240px' }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                <motion.a href="/services" class="btn btn-primary btn-arrow"><motion.p className='learnMore' style={{ color: 'white' }}><motion.span>Read More
                    <ArrowRightIcon className="fas" />
                </motion.span></motion.p></motion.a>
            </motion.div>





        </motion.div>
    )


}