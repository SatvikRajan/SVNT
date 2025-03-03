import { motion } from 'framer-motion';
import img1 from '../images/Home/ip-surveillance-img.webp'
import img0 from '../images/Home/ip-net-sol-img.webp'
import img2 from '../images/Home/energy-sol-img.webp'
import img3 from '../images/Home/surveillance-safety-sol-img.webp'
import img4 from '../images/Home/sec-mgmt-img.webp'
import img5 from '../images/Home/storage-img.webp'
import img7 from '../images/Home/integration-sol-img.webp'
import img6 from '../images/Home/audio-vis-img.webp'
import logo3 from '../images/Home/surveillance-safety-white.svg';
import logo1 from '../images/Home/ip-surveillance-white.svg';
import logo2 from '../images/Home/energy-white.svg';
import logo0 from '../images/Home/ip-net-white.svg';
import logo4 from '../images/Home/security-mgmt-white.svg';
import logo7 from '../images/Home/integration-white.svg';
import logo5 from '../images/Home/storage-white.svg';
import logo6 from '../images/Home/audio-vis-white.svg';
import close from '../images/Home/cross.svg';
import '../css/wwdb-inside.css';

export default function WwdbDetails({ click, index, setClick, topPos, leftPos }) {
    const names = [
        'Networking',
        'Data Centers',
        'Electrical and Backup',
        'Surveillance and Safety',
        'Physical Security Automation',
        'Server Storage',
        'Audio and Visual',
        'Integration',
    ];

    const images = [img0, img1, img2, img3, img4, img5, img6, img7];
    const logo = [logo0, logo1, logo2, logo3, logo4, logo5, logo6, logo7];
    const details = [
        'IP networks ensure smooth device interaction, vital for home and corporate setups, integrating seamlessly for uninterrupted data transmission.',
        'We help you keep your data safe and sound, while making sure it’s always available and easy to scale as you grow.',
        'Ensure uninterrupted power and safeguard your equipment with our all-encompassing backup solutions.',
        'Our systems revolutionise security with customisable surveillance accessible anywhere, integrating with existing systems for coverage and effectiveness.',
        'Explore key security solutions for businesses, from network audits to advanced access control systems, ensuring robust protection and efficiency.',
        'We make it easy to access what you need, work together effortlessly, and keep your data safe and sound.',
        'Enhance communication and engagement with our tailored audio-visual solutions, perfect for presentations, events, and meetings covering displays to sound systems.',
        'Boost efficiency with our integration solutions, merging systems for seamless communication. Simplify processes, reduce complexity, and automate tasks effectively.',
    ];

    const handleClickOutside = (e) => {
        setClick(false)
    };

    return (
        click && (
            <motion.div
                className="wwdb-details-overlay"
                onClick={handleClickOutside}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, zIndex: 10 }}
                exit={{ opacity: 0, zIndex: -1, transition: { duration: 0.5, delay: 0.4 } }}
                transition={{ duration: 0.5 }}
            >
                <div className='d-flex justify-around m-4 pt-4 wwdb-overlay-title'>
                    <motion.div
                        className="wwdb-logo-title"
                        initial={{ top: `${topPos}px`, left: `${leftPos}px` }}
                        animate={{ top: '89px', left: '0', width: '100%' }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.img src={logo[index]} />
                        <motion.p>{names[index]}</motion.p>
                    </motion.div>
                    <motion.div className="wwdb-close-button" onClick={handleClickOutside}>
                        <motion.img height={50} src={close} />
                    </motion.div>
                </div>
                <div className='d-flex flex-row justify-content-center wwdb-overlay-container'>
                    <motion.div
                        className="wwdb-image-container"
                        initial={{ top: '300px', opacity: 0 }}
                        animate={{ top: '208px', opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <motion.img src={images[index]} />
                    </motion.div>

                    <motion.div
                        className="wwdb-details-text"
                        initial={{ opacity: 0, top: '260px' }}
                        animate={{ opacity: 1, top: '270px' }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <motion.p>{details[index]}</motion.p>
                    </motion.div>

                </div>

                <motion.div
                    className="wwdb-learn-more wwdb-lm2"
                    initial={{ opacity: 0, top: '673px', }}
                    animate={{ opacity: 1, top: '536px', width: '240px' }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <button
                        onClick={() => {
                            window.location.href = `/services?tab=${index}`
                        }} className="btn btn-primary btn-arrow w-100">
                        <motion.p className="learnMore lm-2">
                            <motion.span>Read More
                                <svg className='fas' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                            </motion.span>
                        </motion.p>
                    </button>
                </motion.div>
            </motion.div>
        )
    );
}
