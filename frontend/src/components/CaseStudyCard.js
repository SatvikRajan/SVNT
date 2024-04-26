import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import bg from '../images/CaseStudies/cs-bangaloreIA-2.png'

const items = [
    {
        id: 1,
        bgImg: bg,
        title: "Bangalore International Airport",
        subtitle: "How SVNT implements Security Measures in Kempagowda international Airport",
        desc: "In response to the growing demand for enhanced security, communication, and surveillance systems, ITC Royal Bengal and SVNT undertook three key projects: implementing surveillance systems, integrating access control components, and implementing a network infrastructure for both admin and guest network. This comprehensive approach, making use of 850 cameras, aims to elevate security standards, enhance communication capabilities, and ensure seamless operations across ITC Royal Bengal.\nThe first objective, being the guest network infrastructure, is to ensure reliable internet access for hotel guests. This involved implementing fibre and cabling structures and utilising a star topology for efficient data routing and seamless connectivity.\nIn a star topology, every device is connected to a central switch, enhancing the network's security against data loss and simplifying management and troubleshooting processes. This centralised structure allows for easy expansion of the network as the hotel grows and provides scalability to meet increasing guest demands.\nMoreover, the implementation of a guest network significantly enhances security.\nIn response to the growing demand for enhanced security, communication, and surveillance systems, ITC Royal Bengal and SVNT undertook three key projects: implementing surveillance systems, integrating access control components, and implementing a network infrastructure for both admin and guest network. This comprehensive approach, making use of 850 cameras, aims to elevate security standards, enhance communication capabilities, and ensure seamless operations across ITC Royal Bengal.\nThe first objective, being the guest network infrastructure, is to ensure reliable internet access for hotel guests. This involved implementing fibre and cabling structures and utilising a star topology for efficient data routing and seamless connectivity.\nIn a star topology, every device is connected to a central switch, enhancing the network's security against data loss and simplifying management and troubleshooting processes. This centralised structure allows for easy expansion of the network as the hotel grows and provides scalability to meet increasing guest demands.\nMoreover, the implementation of a guest network significantly enhances security"
    },
    {
        id: 2,
        bgImg: bg,
        title: "Bangalore International Airport",
        subtitle: "How SVNT implements Security Measures in Kempagowda international Airport",
        desc: "In response to the growing demand for enhanced security, communication, and surveillance systems, ITC Royal Bengal and SVNT undertook three key projects: implementing surveillance systems, integrating access control components, and implementing a network infrastructure for both admin and guest network. This comprehensive approach, making use of 850 cameras, aims to elevate security standards, enhance communication capabilities, and ensure seamless operations across ITC Royal Bengal.\nThe first objective, being the guest network infrastructure, is to ensure reliable internet access for hotel guests. This involved implementing fibre and cabling structures and utilising a star topology for efficient data routing and seamless connectivity.\nIn a star topology, every device is connected to a central switch, enhancing the network's security against data loss and simplifying management and troubleshooting processes. This centralised structure allows for easy expansion of the network as the hotel grows and provides scalability to meet increasing guest demands.\nMoreover, the implementation of a guest network significantly enhances security.\nIn response to the growing demand for enhanced security, communication, and surveillance systems, ITC Royal Bengal and SVNT undertook three key projects: implementing surveillance systems, integrating access control components, and implementing a network infrastructure for both admin and guest network. This comprehensive approach, making use of 850 cameras, aims to elevate security standards, enhance communication capabilities, and ensure seamless operations across ITC Royal Bengal.\nThe first objective, being the guest network infrastructure, is to ensure reliable internet access for hotel guests. This involved implementing fibre and cabling structures and utilising a star topology for efficient data routing and seamless connectivity.\nIn a star topology, every device is connected to a central switch, enhancing the network's security against data loss and simplifying management and troubleshooting processes. This centralised structure allows for easy expansion of the network as the hotel grows and provides scalability to meet increasing guest demands.\nMoreover, the implementation of a guest network significantly enhances security"
    },
    {
        id: 3,
        bgImg: bg,
        title: "Bangalore International Airport",
        subtitle: "How SVNT implements Security Measures in Kempagowda international Airport",
        desc: "In response to the growing demand for enhanced security, communication, and surveillance systems, ITC Royal Bengal and SVNT undertook three key projects: implementing surveillance systems, integrating access control components, and implementing a network infrastructure for both admin and guest network. This comprehensive approach, making use of 850 cameras, aims to elevate security standards, enhance communication capabilities, and ensure seamless operations across ITC Royal Bengal.\nThe first objective, being the guest network infrastructure, is to ensure reliable internet access for hotel guests. This involved implementing fibre and cabling structures and utilising a star topology for efficient data routing and seamless connectivity.\nIn a star topology, every device is connected to a central switch, enhancing the network's security against data loss and simplifying management and troubleshooting processes. This centralised structure allows for easy expansion of the network as the hotel grows and provides scalability to meet increasing guest demands.\nMoreover, the implementation of a guest network significantly enhances security.\nIn response to the growing demand for enhanced security, communication, and surveillance systems, ITC Royal Bengal and SVNT undertook three key projects: implementing surveillance systems, integrating access control components, and implementing a network infrastructure for both admin and guest network. This comprehensive approach, making use of 850 cameras, aims to elevate security standards, enhance communication capabilities, and ensure seamless operations across ITC Royal Bengal.\nThe first objective, being the guest network infrastructure, is to ensure reliable internet access for hotel guests. This involved implementing fibre and cabling structures and utilising a star topology for efficient data routing and seamless connectivity.\nIn a star topology, every device is connected to a central switch, enhancing the network's security against data loss and simplifying management and troubleshooting processes. This centralised structure allows for easy expansion of the network as the hotel grows and provides scalability to meet increasing guest demands.\nMoreover, the implementation of a guest network significantly enhances security"
    },
    {
        id: 4,
        bgImg: bg,
        title: "Bangalore International Airport",
        subtitle: "How SVNT implements Security Measures in Kempagowda international Airport",
        desc: "In response to the growing demand for enhanced security, communication, and surveillance systems, ITC Royal Bengal and SVNT undertook three key projects: implementing surveillance systems, integrating access control components, and implementing a network infrastructure for both admin and guest network. This comprehensive approach, making use of 850 cameras, aims to elevate security standards, enhance communication capabilities, and ensure seamless operations across ITC Royal Bengal.\nThe first objective, being the guest network infrastructure, is to ensure reliable internet access for hotel guests. This involved implementing fibre and cabling structures and utilising a star topology for efficient data routing and seamless connectivity.\nIn a star topology, every device is connected to a central switch, enhancing the network's security against data loss and simplifying management and troubleshooting processes. This centralised structure allows for easy expansion of the network as the hotel grows and provides scalability to meet increasing guest demands.\nMoreover, the implementation of a guest network significantly enhances security.\nIn response to the growing demand for enhanced security, communication, and surveillance systems, ITC Royal Bengal and SVNT undertook three key projects: implementing surveillance systems, integrating access control components, and implementing a network infrastructure for both admin and guest network. This comprehensive approach, making use of 850 cameras, aims to elevate security standards, enhance communication capabilities, and ensure seamless operations across ITC Royal Bengal.\nThe first objective, being the guest network infrastructure, is to ensure reliable internet access for hotel guests. This involved implementing fibre and cabling structures and utilising a star topology for efficient data routing and seamless connectivity.\nIn a star topology, every device is connected to a central switch, enhancing the network's security against data loss and simplifying management and troubleshooting processes. This centralised structure allows for easy expansion of the network as the hotel grows and provides scalability to meet increasing guest demands.\nMoreover, the implementation of a guest network significantly enhances security"
    },
]

export default function CaseStudyCard({props}) {
    const [selectedId, setSelectedId] = useState(null)
    const [currTop, setCurrTop] = useState(0);
    const [topPos, setTopPos] = useState('0px');

    function setTop() {
        const ele = document.getElementById(`cs-card-${currTop}`);
        setTopPos(''+ele.offsetTop+'px');
    }
    

    return (
        <motion.div className='cs-set'> 
            {items.map(item => (
                <motion.div className="cs-card" id={`cs-card-${item.id}`} layoutId={item.id}
                    onClick={() => {
                        setSelectedId(item.id);
                        setCurrTop(item.id);
                    }}>
                    <motion.div className="cs-sub-img"><motion.img src={bg} /></motion.div>
                    <motion.div className="cs-sub-text">
                            <motion.p className="cs-head">{item.title}</motion.p>
                            <motion.p className="cs-info">{item.subtitle}</motion.p>
                    </motion.div>
                    <motion.div className="cs-read-more" onClick={() => setSelectedId(item.id)}>
                        <motion.p style={{ textAlign: 'right' }}className="readmore cs-readmore" >
                            Read More
                        </motion.p>
                    </motion.div>
                </motion.div>
            ))}
            
            <AnimatePresence>
            {selectedId && (
                        <motion.div layoutId={selectedId}
                            // className="cs-card"
                            initial={{width: '600px', height: '690px', top:topPos}}
                            animate={{width: '1431px', height: '80vh', backgroundColor:'white', zIndex:10, left:'0px', top:topPos, position:'absolute'}}
                        >
                <motion.h5>{items.find(item => item.id === selectedId).subtitle}</motion.h5>
                <motion.h2>{items.find(item => item.id === selectedId).title}</motion.h2>
                <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
                
                </motion.div>
            )}
            </AnimatePresence >
    </motion.div>
    )
}