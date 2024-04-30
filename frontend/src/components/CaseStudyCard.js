import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import bg from '../images/CaseStudies/cs-bangaloreIA-2.png'
import bgMain from '../images/CaseStudies/cs-bangaloreIA-3.png'
import jsw from '../images/CaseStudies/cs-JSW-1.png'
import jswback from '../images/CaseStudies/cs-JSW-2.png'
import cross from '../images/CaseStudies/cross.png'

const items = [
    {
        id: 1,
        bgImg: bg,
        bg1:bgMain,
        title: "Bangalore International Airport",
        subtitle: "How SVNT implements Security Measures in Kempagowda international Airport",
        desc: [
            "In response to the growing demand for enhanced security, communication, and surveillance systems, ITC Royal Bengal and SVNT undertook three key projects: implementing surveillance systems, integrating access control components, and implementing a network infrastructure for both admin and guest network. This comprehensive approach, making use of 850 cameras, aims to elevate security standards, enhance communication capabilities, and ensure seamless operations across ITC Royal Bengal.",
            "The first objective, being the guest network infrastructure, is to ensure reliable internet access for hotel guests. This involved implementing fibre and cabling structures and utilising a star topology for efficient data routing and seamless connectivity.",
            "In a star topology, every device is connected to a central switch, enhancing the network's security against data loss and simplifying management and troubleshooting processes. This centralised structure allows for easy expansion of the network as the hotel grows and provides scalability to meet increasing guest demands.",
            "Moreover, the implementation of a guest network significantly enhances security.In response to the growing demand for enhanced security, communication, and surveillance systems, ITC Royal Bengal and SVNT undertook three key projects: implementing surveillance systems, integrating access control components, and implementing a network infrastructure for both admin and guest network. This comprehensive approach, making use of 850 cameras, aims to elevate security standards, enhance communication capabilities, and ensure seamless operations across ITC Royal Bengal.",
            "The first objective, being the guest network infrastructure, is to ensure reliable internet access for hotel guests. This involved implementing fibre and cabling structures and utilising a star topology for efficient data routing and seamless connectivity.",
            "In a star topology, every device is connected to a central switch, enhancing the network's security against data loss and simplifying management and troubleshooting processes. This centralised structure allows for easy expansion of the network as the hotel grows and provides scalability to meet increasing guest demands.",
            "Moreover, the implementation of a guest network significantly enhances security.",
        ],
        top: '1153px',
        
    },
    {
        id: 2,
        bg1:jswback,
        bgImg: jsw,
        title: "Bangalore International Airport",
        subtitle: "How SVNT implements Security Measures in Kempagowda international Airport",
        desc: [
            "In response to the growing demand for enhanced security, communication, and surveillance systems, ITC Royal Bengal and SVNT undertook three key projects: implementing surveillance systems, integrating access control components, and implementing a network infrastructure for both admin and guest network. This comprehensive approach, making use of 850 cameras, aims to elevate security standards, enhance communication capabilities, and ensure seamless operations across ITC Royal Bengal.",
            "The first objective, being the guest network infrastructure, is to ensure reliable internet access for hotel guests. This involved implementing fibre and cabling structures and utilising a star topology for efficient data routing and seamless connectivity.",
            "In a star topology, every device is connected to a central switch, enhancing the network's security against data loss and simplifying management and troubleshooting processes. This centralised structure allows for easy expansion of the network as the hotel grows and provides scalability to meet increasing guest demands.",
            "Moreover, the implementation of a guest network significantly enhances security.In response to the growing demand for enhanced security, communication, and surveillance systems, ITC Royal Bengal and SVNT undertook three key projects: implementing surveillance systems, integrating access control components, and implementing a network infrastructure for both admin and guest network. This comprehensive approach, making use of 850 cameras, aims to elevate security standards, enhance communication capabilities, and ensure seamless operations across ITC Royal Bengal.",
            "The first objective, being the guest network infrastructure, is to ensure reliable internet access for hotel guests. This involved implementing fibre and cabling structures and utilising a star topology for efficient data routing and seamless connectivity.",
            "In a star topology, every device is connected to a central switch, enhancing the network's security against data loss and simplifying management and troubleshooting processes. This centralised structure allows for easy expansion of the network as the hotel grows and provides scalability to meet increasing guest demands.",
            "Moreover, the implementation of a guest network significantly enhances security.",],
        top: '1153px',
    },
    {
        id: 3,
        bgImg: bg,
        bg1:bgMain,
        title: "Bangalore International Airport",
        subtitle: "How SVNT implements Security Measures in Kempagowda international Airport",
        desc:[
            "In response to the growing demand for enhanced security, communication, and surveillance systems, ITC Royal Bengal and SVNT undertook three key projects: implementing surveillance systems, integrating access control components, and implementing a network infrastructure for both admin and guest network. This comprehensive approach, making use of 850 cameras, aims to elevate security standards, enhance communication capabilities, and ensure seamless operations across ITC Royal Bengal.",
            "The first objective, being the guest network infrastructure, is to ensure reliable internet access for hotel guests. This involved implementing fibre and cabling structures and utilising a star topology for efficient data routing and seamless connectivity.",
            "In a star topology, every device is connected to a central switch, enhancing the network's security against data loss and simplifying management and troubleshooting processes. This centralised structure allows for easy expansion of the network as the hotel grows and provides scalability to meet increasing guest demands.",
            "Moreover, the implementation of a guest network significantly enhances security.In response to the growing demand for enhanced security, communication, and surveillance systems, ITC Royal Bengal and SVNT undertook three key projects: implementing surveillance systems, integrating access control components, and implementing a network infrastructure for both admin and guest network. This comprehensive approach, making use of 850 cameras, aims to elevate security standards, enhance communication capabilities, and ensure seamless operations across ITC Royal Bengal.",
            "The first objective, being the guest network infrastructure, is to ensure reliable internet access for hotel guests. This involved implementing fibre and cabling structures and utilising a star topology for efficient data routing and seamless connectivity.",
            "In a star topology, every device is connected to a central switch, enhancing the network's security against data loss and simplifying management and troubleshooting processes. This centralised structure allows for easy expansion of the network as the hotel grows and provides scalability to meet increasing guest demands.",
            "Moreover, the implementation of a guest network significantly enhances security.",
        ],
        top: '2017px',
    },
    {
        id: 4,
        bgImg: bg,

        bg1:bgMain,
        title: "Bangalore International Airport",
        subtitle: "How SVNT implements Security Measures in Kempagowda international Airport",
        desc: [
            "In response to the growing demand for enhanced security, communication, and surveillance systems, ITC Royal Bengal and SVNT undertook three key projects: implementing surveillance systems, integrating access control components, and implementing a network infrastructure for both admin and guest network. This comprehensive approach, making use of 850 cameras, aims to elevate security standards, enhance communication capabilities, and ensure seamless operations across ITC Royal Bengal.",
            "The first objective, being the guest network infrastructure, is to ensure reliable internet access for hotel guests. This involved implementing fibre and cabling structures and utilising a star topology for efficient data routing and seamless connectivity.",
            "In a star topology, every device is connected to a central switch, enhancing the network's security against data loss and simplifying management and troubleshooting processes. This centralised structure allows for easy expansion of the network as the hotel grows and provides scalability to meet increasing guest demands.",
            "Moreover, the implementation of a guest network significantly enhances security.In response to the growing demand for enhanced security, communication, and surveillance systems, ITC Royal Bengal and SVNT undertook three key projects: implementing surveillance systems, integrating access control components, and implementing a network infrastructure for both admin and guest network. This comprehensive approach, making use of 850 cameras, aims to elevate security standards, enhance communication capabilities, and ensure seamless operations across ITC Royal Bengal.",
            "The first objective, being the guest network infrastructure, is to ensure reliable internet access for hotel guests. This involved implementing fibre and cabling structures and utilising a star topology for efficient data routing and seamless connectivity.",
            "In a star topology, every device is connected to a central switch, enhancing the network's security against data loss and simplifying management and troubleshooting processes. This centralised structure allows for easy expansion of the network as the hotel grows and provides scalability to meet increasing guest demands.",
            "Moreover, the implementation of a guest network significantly enhances security.",
        ],
        top: '2017px',
    },
]

export default function CaseStudyCard({props}) {
    const [selectedId, setSelectedId] = useState(null)
    const [currTop, setCurrTop] = useState('');
    

    return (
        <motion.div className={'cs-set'}> 
            {items.map(item => (
                <motion.div className="cs-card" id={`cs-card-${item.id}`} layoutId={item.id}
                    onClick={() => {
                        setSelectedId(item.id);
                        setCurrTop(item.top);
                    }}>
                        {<motion.div className="cs-sub-img"><motion.img src={bg} /></motion.div>}
                        {
                            <motion.div className="cs-sub-text">  
                            <motion.p className="cs-head">{item.title}</motion.p>
                            <motion.p className="cs-info">{item.subtitle}</motion.p>
                        </motion.div>}
                        {
                        <motion.div className="cs-read-more" onClick={() => setSelectedId(item.id)}>
                            <motion.p style={{ textAlign: 'right' }}className="readmore cs-readmore" >
                                Read More
                            </motion.p>
                        </motion.div>}
                    
                </motion.div>
            ))}
            
            <AnimatePresence>
                {selectedId && (
                    <>
                        <motion.div
                            className="background-blur"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}

                        />
                        <motion.div layoutId={selectedId}
                        className="expanded-card"
                        style={{top:currTop, left: '246px', backgroundImage:`url(${items.find(item => item.id === selectedId).bg1})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}
                    >
                        <motion.div className="expanded-head">
                            <motion.h2 className="expanded-head-h2">{items.find(item => item.id === selectedId).title}</motion.h2>
                            <motion.div className="expanded-head-img"><motion.img onClick={() => setSelectedId(null)} src = {cross}/></motion.div>
                        </motion.div>
                        
                        <motion.div className="expanded-info">
                            {items.find(item => item.id === selectedId).desc.map(info => (
                                <motion.p className="expanded-info-p">{info}</motion.p>
                            ))}
                        </motion.div>
                        </motion.div>
                    </>
            )}
            </AnimatePresence >
    </motion.div>
    )
}