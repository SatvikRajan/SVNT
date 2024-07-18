import genetec from '../images/Partners/genetec-logo.svg'
import subtitle from '../images/Partners/subtitle.svg'
import '../css/partners.css'
import image1 from '../images/Partners/image1.png'
import image2 from '../images/Partners/image2.png'
import image3 from '../images/Partners/image3.png'
import image4 from '../images/Partners/person.png'
import image5 from '../images/Partners/genetec_logo_white.png'
import image6 from '../images/Partners/arrow_forward.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLeftLong } from '@fortawesome/free-solid-svg-icons';

const ArrowRightIcon = ({ className }) => {
    return <FontAwesomeIcon icon={faArrowRight} className={className} />;
};


const desc = ["Genetec Inc. is an innovative technology company offering a wide range of security, intelligence, and operations solutions. The company’s flagship product, Genetec™ Security Center, unifies IP-based video surveillance, access control, automatic license plate recognition (ALPR), communications, and analytics. Genetec also develops cloud-based solutions and services designed to improve security,  and contribute new levels of operational intelligence for governments, enterprises, and the communities in which we live. Founded in 1997, and headquartered in Montreal, Canada, Genetec serves its global customers via an extensive network of certified channel partners and consultants in over 159 countries.",
    "Security Center consolidates access control, video surveillance, automatic license plate recognition (ALPR), communications, and so on into one cohesive and user-friendly solution.", " By centralizing your data, you can efficiently manage security policies, conduct investigations, and focus on critical priorities.", " Select the devices and activate new features that align with your evolving system needs.",
    "Each solution is tailored to understand and address the unique needs of each client. Everything we do is shaped by a core set of values. Our mission as a company revolves around the complete satisfaction of our clients.Each solution is tailored to understand and address the unique needs of each client. Everything we do is shaped by a core set of values. "
]

export default function Partners() {
    return (
        <>
            <div className="partners-hero">
                <img className='main-logo' src={genetec} alt="genetec-logo" />
                <img className="subtitle" src={subtitle} alt="genetec-logo" />
            </div>

            <div className="partners-desc">
                <div className="partners-desc-container">
                    <div className="description">
                        <p className="desc-head">What Genetec does ?</p>
                        <p className="desc-content">{desc[0]}</p>
                    </div>
                    <div className="desc-image">
                        <img src={image1} alt="genetec" />
                    </div>
                </div>
            </div>

            <div className="partners-desc">
                <div className="partners-desc-container">
                    <div className="description">
                        <p className="desc-head">What Genetec has to offer?</p>
                        <div className="desc-box">
                            <div className='box-heading'>
                                <p>Genetec™ Security Center Unified Security Platform</p>
                            </div>
                            <div className='box-content'>
                                <ul>
                                    <li>{desc[1]}</li>
                                    <li>{desc[2]}</li>
                                    <li>{desc[3]}</li>
                                </ul>

                                <div className="wwdb-learn-more partners-learn-more" style={{ width: '300px', fontSize: '30px !important' }}>
                                    <a href="/services" class="btn btn-primary btn-arrow"><p className='learnMore'><span>Learn more
                                        <ArrowRightIcon className="fas" />
                                    </span></p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="desc-image box-image">
                        <img src={image2} alt="genetec" />
                    </div>
                </div>
            </div>

            <div className="partners-desc">
                <div className="jr-container">
                    <div className="description">
                        <p className="desc-head">Joint Recognition</p>
                        <div className='jr-box'>
                            <div className='jrb'>
                                <img src={image3} alt='recognition' />
                                <p>Service Of The Year</p>
                            </div>
                            <div className='jrb'>
                                <img src={image3} alt='recognition' />
                                <p>Service Of The Year</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='desc2-wrapper'>
                <div className="description desc2">
                    <p className="desc-head head2">What Genetec Provides</p>

                    <h1>Genetec™ Security Center unified security platform </h1>
                    <ul>
                        <li>Security Center consolidates access control, video surveillance, ALPR, communications, and so on into one cohesive and user-friendly solution.</li>
                        <li>By centralising your data, you can efficiently manage security policies, conduct investigations, and focus on critical priorities.</li>
                        <li>Choose your devices and unlock new features that align with your evolving system needs.</li>
                    </ul>
                    <br></br>
                    <h1>Security Center SaaS - Software as a service </h1>
                    <ul>
                        <li>The new unified SaaS offering is a complete harmonisation and streamlining of our SaaS portfolio. </li>
                        <li>It is fast, non-stop, radically easier, and most importantly, it's Genetec.
                        </li>
                        <li>It connects millions of devices and secures organisations globally with the world's most scalable, reliable, flexible, and secure architecture.</li>
                    </ul>
                    <br></br>
                    <h1>Security Center Omnicast™ - Video management system</h1>
                    <ul>
                        <li>Omnicast™ is a video management system (VMS) for organisations of all sizes
                        </li>
                        <li>Tailor your surveillance solutions to meet your unique video security needs effortlessly

                        </li>
                        <li>Offers deep support for a wide range of industry-leading cameras and encoders.
                        </li>
                    </ul>

                    <br></br>
                    <h1>Security Center Synergis™ - Access control system
                    </h1>
                    <ul>
                        <li>Elevate your organization’s security with Synergis complete access control.

                        </li>
                        <li>Boost your incident and threat response while utilising existing network and security investments.


                        </li>
                        <li>Improve operational efficiency with greater automation and system unification

                        </li>

                        <li>Unlock your ACS data to make smarter business decisions
                        </li>
                    </ul>
                    <br></br>
                    <h1>Genetec Streamvault™ - Security infrastructure solutions

                    </h1>
                    <ul>
                        <li>Streamvault™ is a range of preloaded security infrastructure solutions designed to serve as a foundational platform

                        </li>
                        <li>Easily adaptable to meet your specific project requirements.


                        </li>
                        <li>Comes with built-in tools to make deployment and maintanence easier.


                        </li>


                    </ul>
                </div>
            </div>

            <div className="partners-desc2">
                <div className="jr-container">
                    <div className="description">
                        <p className="desc-head">People Involved</p>
                        <div className='people-box'>
                            <div className='people'>
                                <div className='p-name'>
                                    <p>Soumendra <br />Director</p>
                                </div>
                                <p className='p-quote'>“No growth hack, brilliant marketing idea can save you long-term if you don’t have a sufficiently good product.”</p>
                                <div className='p-img'>
                                    <img src={image4} alt='person' />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className='word-container'>
                    <div className='sub-one'>
                        <p className='word1'>Curious About Genetec?</p>
                        <p className='word2'>Discover More Here!</p>
                    </div>
                    <div className='sub-two'>
                        <img className="sub-two-logo" src={image5} alt='genetec logo' />
                        <p>Website</p>
                        <img className="sub-two-arrow" src={image6} alt='arrow' />
                    </div>

                </div>
            </div>
        </>
    )
}