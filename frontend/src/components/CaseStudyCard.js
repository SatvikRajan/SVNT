import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from 'framer-motion';


import bangaloreIA1 from '../images/CaseStudies/bangaloreIA-1.png'
import bangaloreIA2 from '../images/CaseStudies/bangaloreIA-2.png'

import jsw1 from '../images/CaseStudies/jsw-1.png'
import jsw2 from '../images/CaseStudies/jsw-2.png'

import itc1 from '../images/CaseStudies/itc-1.png'
import itc2 from '../images/CaseStudies/itc-2.png'

import delhiP1 from '../images/CaseStudies/delhiP-1.png'
import delhiP2 from '../images/CaseStudies/delhiP-2.png'

// import jswback from '../images/CaseStudies/cs-JSW-2.png'
import cross from '../images/CaseStudies/cross.png'

const items = [
    {
        id: 1,
        bg1: bangaloreIA1,
        bg2: bangaloreIA2,
        title: "Bangalore International Airport",
        subtitle: "How SVNT implements Security Measures in Kempagowda international Airport",
        desc: [
            "Kempegowda International Airport (BLR) serves Bangalore, India's capital city. Spanning 4,000 acres, it sits approximately 35 kilometres north of Bangalore, near the Devanahalli suburb and is owned and operated by Bengaluru International Airport Limited (BIAL). To undertake a strategic initiative to deploy advanced security solutions aimed at addressing evolving security challenges and optimising operational efficiency.",
            "The project aimed to achieve several key objectives. Firstly, it sought to implement a comprehensive video surveillance system covering critical areas such as terminals, runways, and parking facilities, facilitating real-time monitoring. Additionally, robust access control measures are deployed to regulate entry and exit points, secure restricted areas, and protect sensitive facilities. The integration of various security systems, including video management, access control, and licence plate recognition, into a centralised management platform is a priority. Furthermore, it is important to ensure system reliability and fault tolerance through the implementation of redundant architectures and failover mechanisms. Lastly, the security infrastructure needs to be scalable, accommodating future growth and expansion of the airport.",
            "The integration of Bosch VRM cameras into Genetec's platform is as a pivotal aspect of the security solution implemented at Kempegowda International Airport. This integration allows for seamless data fetching from Bosch VRM to Genetec, enabling comprehensive monitoring and management of surveillance footage. By incorporating Bosch VRM cameras into Genetec's unified security platform, the airport gains enhanced visibility and control over its security infrastructure. This integration highlights the flexibility of Genetec's solution, showcasing its capability to integrate with third-party systems for enhanced functionality and operational efficiency.",
            "The solution also comprises the deployment of Axis Communications' IP cameras across the airport premises, providing high-definition video coverage of key areas. Tyco's access control system was deployed to manage entry points, secure zones, and regulate access permissions for personnel. Genetec's unified security platform was leveraged for centralised management and monitoring, integrating video management, access control, and licence plate recognition solutions. Redundant architectures and failover mechanisms were implemented for critical components such as servers and storage to ensure continuous operation and data availability. Additionally, the security infrastructure was designed to scale seamlessly with the airport's expansion plans, accommodating additional cameras, access points, and users. Our system utilises Genetec for the frontend, providing users with seamless access to its features. Behind the scenes, Tyco's  backend handles access control functionalities discreetly, ensuring seamless operations without any visibility to end-users.",
            "The implementation of the advanced security solutions yielded significant results. Firstly, it enhanced security by providing comprehensive coverage and real-time monitoring capabilities, bolstering the overall security posture of Kempegowda International Airport. Secondly, operational efficiency was improved through centralised management and monitoring, enabling quick responses to incidents and improved incident resolution times. Thirdly, reliability and redundancy were ensured through redundant architectures and failover mechanisms, minimising the risk of data loss or downtime. Fourthly, scalability allowed for future expansion and adaptation to evolving security needs without significant disruptions. Lastly, compliance with industry regulations and standards was achieved, enhancing the airport's reputation as a secure and reliable transportation hub.",
            "By leveraging advanced security technologies and implementing integrated solutions, Kempagowda International Airport successfully addressed its security challenges while improving operational efficiency and reliability. The deployment of scalable and redundant architectures ensures the airport's ability to adapt to future security requirements, positioning it as a leader in aviation security."
,
        ],
        top: '1153px',
        
    },
    {
        id: 2,
        bg1: itc1,
        bg2: itc2,
        title: "ITC",
        subtitle: "A Close Examination of how SVNT implements Security Protocols at ITC",
        desc: [
            "In response to the growing demand for enhanced security, communication, and surveillance systems, ITC Royal Bengal and SVNT undertook three key projects: implementing surveillance systems, integrating access control components, and implementing a network infrastructure for both admin and guest network. This comprehensive approach, making use of 850 cameras, aims to elevate security standards, enhance communication capabilities, and ensure seamless operations across ITC Royal Bengal.",
            "The first objective, being the guest network infrastructure, is to ensure reliable internet access for hotel guests. This involved implementing fibre and cabling structures and utilising a star topology for efficient data routing and seamless connectivity",
            "Moreover, the implementation of a guest network significantly enhances security by segregating internet access. By maintaining a separate guest network, we ensure the isolation of company data from guest access, thereby negating the risk of malware and viruses infiltrating the internal network, thus enhancing security measures and safeguarding sensitive information. Additionally, multicore processors are employed to enhance performance and energy efficiency. These processors act like the powerhouse of your computer, boosting its speed and efficiency, almost like having multiple hands to juggle tasks, making everything run smoother and faster. With faster processing speeds, guests experience smoother internet browsing, quicker check-in processes, and seamless streaming services, leading to higher guest satisfaction ratings.",
            "Moving on to the next objective of our project at ITC Royal Bengal : the data administration network. This network is vital for internal communication among hotel employees. Operating on a ring topology, this network prioritises organised cable management and efficient data routing to ensure seamless communication throughout the hotel. The ring topology, a network setup where device connections form a closed circular data path, offers several benefits. It ensures redundancy and fault tolerance within the network, allowing data to travel in both directions around the ring. This topology also minimises the number of hops required for data transmission, leading to efficient data transfer and reduced latency.In addition to the ring topology, the data administration network utilises layer 2 switches and patch panels to optimise communication and data management. Layer 2 switches learn the MAC addresses of connected devices and use this information to forward data to the right destination ports. Patch panels serve as central connection points for network cables, ensuring a structured and easily manageable network setup.",
            "Now let us turn our attention is on the access control network, aimed at boosting security within the hotel premises. This network incorporates vital components like door controllers, master controllers, and CCTV cameras essential for regulating access to different areas.This network played a crucial role in controlling access to various areas within the hotel, ensuring only authorised personnel could enter restricted zones.For instance, the door controller manages the locking and unlocking of doors based on the authentication of authorised personnel, providing an extra layer of security to secured areas such as buildings, rooms, or facilities.Additionally, the central control unit serves as the backbone of the access control network, coordinating and managing the operation of multiple subsystems or devices. This centralised management ensures efficient and synchronised operation, enhancing the overall security posture of the hotel. Network access control, or NAC, solutions support network visibility and access management through policy enforcement on devices and users of corporate networks.With organisations now having to account for exponential growth of mobile devices accessing their networks and the security risks they bring, it is critical to have the tools that provide the visibility, access control, and compliance capabilities that are required to strengthen your network security infrastructure.",
            "To ensure seamless connectivity between different networks within the hotel environment, understanding the cable layout route in the data centre is crucial. This organised layout ensures efficient data flow and connectivity, essential for smooth operations across all networks. UPS systems provide backup power during power failure. This ensures that all systems keep running smoothly, preventing any data loss or downtime. Service provider racks, server racks, and MDF panels offer a structured interface for connecting incoming and outgoing cables, facilitating efficient cable management and troubleshooting, while the deployment of EPABX systems manages the internal communications within the hotel. They route incoming and outgoing calls, manage extensions, and provide features such as voicemail and call forwarding. By streamlining communication processes, EPABX systems enhance guest experience and operational efficiency, ensuring seamless communication across the hotel premises. Centralising all previous network infrastructures at the data centre streamlines management processes and enhances overall system performance.",
            "In alignment with ITC Hotels' objective of centralising surveillance management, the network infrastructure upgrade at ITC Royal Bengal represents a significant step towards modernising security protocols and enhancing guest experiences across luxury hotel environments. Through meticulous planning, strategic hardware selection, and expert implementation, the project aimed to set new benchmarks in hospitality industry standards.",
            "Genetec's Security Desk offers a comprehensive solution, allowing users to manage various security operations seamlessly.Federated entities in Security Desk refer to the integration of different security systems, such as cameras, doors, alarms, and access control devices, into a unified platform. This integration enables users to access and manage these entities from a single interface, streamlining security operations across various locations.",
            "Security Desk offers an array of functionalities for managing federated entities. Users can view live or recorded video from federated cameras, add bookmarks, export video and even control PTZ (Pan-Tilt-Zoom) cameras, which are built with mechanical parts that allow them to swivel left to right, tilt up and down, and zoom in and out of a scene. Federated entities allow users to unlock doors, override schedules, set doors in maintenance mode, and control reader buzzers. Users can receive, acknowledge, and manage alarms, as well as configure alarm properties and associated actions. Security Desk supports monitoring people count and tracking cardholders and visitors in federated areas. Federated entities in Security Desk provide a robust solution for integrating and managing different security systems. By using federated entities, security operations are made more efficient and can effectively manage security across various locations, promoting safety and peace of mind.With a focus on guest network infrastructure, data administration networks, and access control mechanisms, the collaborative efforts between ITC Royal Bengal and SVNT exemplify a commitment to excellence and a dedication to providing guests with unparalleled experiences",
            "With a focus on guest network infrastructure, data administration networks, and access control mechanisms, the collaborative efforts between ITC Royal Bengal and SVNT exemplify a commitment to excellence and a dedication to providing guests with unparalleled experiences. This transformative initiative sets a new benchmark for hospitality industry standards, reinforcing ITC Royal Bengal's position as a leader in luxury accommodation and guest services.",
],
        top: '1153px',
    },
    {
        id: 3,
        bg1: jsw1,
        bg2: jsw2,
        title: "JSW Eye On Pellet",
        subtitle: "Delve into the revolutionary world of pelletization plants through real time system integration",
        desc:[
            "Step into the world of pelletization plants, where innovation meets necessity. Pelletization, the transformative process that turns raw materials into the backbone of various industries, demands precision and efficiency. Yet, traditional methods often fall short, hindered by manual inspections and human errors. Enter 'Eye-on-Pellet,' a beacon of technological advancement developed to revolutionise pelletization plant operations.",
            "Identifying Operational Gaps",
            "Pelletization turns raw materials like iron ore, biomass, or coal fines into small, uniform pellets, demands precision and efficiency. These pellets are used in industries like iron and steel, renewable energy, and agriculture. They improve efficiency, reduce waste, and enhance product quality by making the materials easier to handle, transport, and use in various applications. In the realm of pelletization, the reliance on manual inspection by operators has led to inconsistent pellet sizes and suboptimal throughput. The human element introduces errors and compromises the plant's performance, operating at only 60%-70% of its potential. It's evident that a transformative solution is needed, one that transcends traditional limitations and ushers in a new era of efficiency and productivity.",
            "Revolutionising Pelletization Operation",
            "'Eye-on-Pellet' emerges as the game - changer, offering real - time monitoring and analysis of pellet size distribution during the crucial formation phase on the disc.Real - time monitoring means that the system provides instantaneous and continuous updates on the pellet size distribution as pellets are being formed on the disc.This means that operators can see the data as it happens, without delays, allowing them to make immediate adjustments or interventions if needed to optimise the pelletization process.Developed in collaboration with CSIR IMMT Bhubaneswar, this groundbreaking system provides operators with instantaneous updates, enabling swift adjustments and interventions to optimise the pelletization process.This camera- based system, with an accuracy of 1mm, employs advanced image processing algorithms to accurately estimate pellet size, eliminating human error and ensuring consistent quality.By leveraging advanced image processing algorithms, 'Eye-on-Pellet' eliminates human error and ensures consistent pellet sizing, laying the foundation for enhanced quality control and reliability.The system is plug - and - play, with quick and easy installation as well as customisable features to meet specific client requirements.",
            "System Deployment and Versatility",
            "The 'Eye-on-Pellet' system was deployed across various pelletization plants and the system has undergone rigorous testing and evaluation to assess its performance and effectiveness in real-world operating conditions. The versatility of the system extends to its adaptability in different settings and applications. The hallmark of 'Eye-on-Pellet' lies in its versatility and adaptability. With options for single or multiple camera configurations, operators can tailor the system to meet their specific monitoring needs having a standard processing speed from 100 to 300ms. Furthermore, the availability of handheld portable systems empowers operators to conduct instant monitoring on the move, delivering unparalleled flexibility and convenience. For deeper insights and analysis, the system seamlessly transitions to offline mode in a laboratory environment, facilitating comprehensive examination and study of pellet formation characteristics. The data collected can also be stored and utilised to prepare for an analysis of the monthly outputs.",
            "Realising Results:",
            "The Impact of 'Eye-on-Pellet' The implementation of 'Eye-on-Pellet' yields a myriad of benefits, transforming the landscape of pelletization plant operations. Real-time monitoring not only enhances quality control but also reduces rejected pellets, ensuring optimal utilisation of resources. Operators can swiftly adjust parameters, optimising plant performance and maximising throughput. And the best part? Our customisable solutions are tailor-made to fit each plant's unique needs, unlocking maximum efficiency and potential.",
            "The successful implementation of 'Eye-on-Pellet' demonstrates its effectiveness in enhancing pelletization plant efficiency and productivity. By leveraging advanced technology and automated monitoring, operators can make informed decisions, optimise plant parameters, and achieve consistent, high-quality pellet output. With its proven track record and customisable features, 'Eye-on-Pellet' stands as a pioneering solution in revolutionising pelletization plant operations.",
        ],
        top: '2017px',
    },
    {
        id: 4,
        bg1: delhiP1,
        bg2: delhiP2,
        title: "Delhi Parliament",
        subtitle: "",
        desc: [],
        top: '2017px',
    },
    
]

export default function CaseStudyCard({props}) {
    const [selectedId, setSelectedId] = useState(null)
    const [currTop, setCurrTop] = useState('');
    const [expandedPosition, setExpandedPosition] = useState({ top: '50%', left: '50%' });
    const expandedCardRef = useRef(null);
    
    useEffect(() => {
        if (selectedId !== null && selectedId!==4) {
            expandedCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            document.documentElement.classList.add('overflow-hidden');
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const expandedWidth = expandedCardRef.current.offsetWidth;
            const expandedHeight = expandedCardRef.current.offsetHeight;
            const top = `${(viewportHeight - expandedHeight) / 2}px`;
            const left = `${(viewportWidth - expandedWidth) / 2}px`;
            setExpandedPosition({ top, left });
            
        } else {
            // Allow scrolling of the background page
            document.documentElement.classList.remove('overflow-hidden');
        }
    }, [selectedId]);

    return (
        <motion.div className={'cs-set'}> 
            {items.map(item => (
                <motion.div className="cs-card-parent">
                <motion.div
                    className="cs-card"
                    id={`cs-card-${item.id}`}
                    layoutId={item.id}
                    style={{backgroundImage:`url(${item.bg1})`}}
                    onClick={() => {
                        setSelectedId(item.id);
                        setCurrTop(item.top);
                    }}>
                        {<motion.div className="cs-sub-img"><motion.img src={item.bg2} /></motion.div>}
                        {item.id!==4 && <motion.div className="cs-sub-text">  
                            <motion.p className="cs-head">{item.title}</motion.p>
                            <motion.p className="cs-info">{item.subtitle}</motion.p>
                        </motion.div>}
                        {item.id!==4 && <motion.div className="cs-read-more" onClick={() => setSelectedId(item.id)}>
                            <motion.p style={{ textAlign: 'right' }}className="readmore cs-readmore" >
                                Read More
                            </motion.p>
                    </motion.div>}
                    {item.id == 4 &&
                        <motion.div style={{marginTop:'10%', padding:'0%'}}>
                            <motion.p
                                style={{
                                    // backgroundColor: 'green',
                                    textAlign: "center",
                                    fontSize: '24px',
                                    marginBottom:'9%'
                                }}>
                                {item.title}</motion.p>
                            <motion.p
                                style={{
                                    // backgroundColor: 'green',
                                    textAlign: "center",
                                    fontSize: '42px',
                                    margin: 0,
                                                                        
                                }}>
                                Coming Soon</motion.p>
                        </motion.div>}
                    </motion.div>
                    </motion.div>
            ))}
            
            <AnimatePresence>
                {selectedId!=null && selectedId!=4 &&(
                    <>
                        <motion.div
                            className="background-blur"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}

                        />
                        <motion.div
                            // transition={{duration:0.}}
                            ref={expandedCardRef}
                            layoutId={selectedId}
                            className="expanded-card"
                            style={{
                                top: currTop,
                                backgroundImage: `url(${items.find(item => item.id === selectedId).bg1})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                left: expandedPosition.left,
                            }}
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