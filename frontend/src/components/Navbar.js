import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import Logo from '../images/logo.png';
import '../css/navbar.css'

const Navbar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(null);
    const [drop,setDrop]=useState(false)

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrollTop(window.scrollY);
    //         const navElement = document.getElementById('navbar');
    //         const navItems = document.getElementById("navbarSupportedContent");
    //         const navLinks = document.getElementById('nav-links')
    //         if (navElement) {
    //             if (scrollTop > 70) {
    //                 navElement.classList.add('scrolled-nav');
    //                 navItems.classList.add('collapse','justify-content-end')
    //                 navLinks.classList.remove('navbar-collapse', 'collapse', 'justify-content-between')
    //                 navItems.classList.add('navLinksPosition')
    //                 // navItems.classList.add('justify-content-end')
    //             } else {
    //                 navElement.classList.remove('scrolled-nav')
    //                 navItems.classList.remove('collapse','justify-content-end')
    //                 navLinks.classList.add('navbar-collapse', 'collapse', 'justify-content-between')
    //                 navItems.classList.add('navLinksPosition')
    //                 // navItems.classList.remove('justify-content-')
    //                 // navItems.classList.add('justify-content-center');
    //             }
    //         }

    //         const currentScrollPos = window.scrollY;



    //         if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
    //             document.querySelector('.navbar').classList.add('hidden');
    //         } else {
    //             document.querySelector('.navbar').classList.remove('hidden');
    //         }

    //         setPrevScrollPos(currentScrollPos);
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [prevScrollPos]);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    const handleNavLinkClick = (href) => {
        setActiveLink(href);
    };

    const alterDropdown=()=>{
        setDrop(!drop)
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg scrolled-nav " id='navbar'>
            <div className={`container ${drop ? 'no-margin' : ' '}`}>
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="SVNT Tech" height={30} style={{paddingLeft:"30px"}} />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={alterDropdown}
                    >

                        
{drop ? (
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="Cross" style={{height:"2rem"}} className={`  ${drop? 'rotate' : ''}`}><line x1="9.37" x2="54.63" y1="9.37" y2="54.63" fill="none" stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="4" class="colorStroke010101 svgStroke"></line><line x1="9.37" x2="54.63" y1="54.63" y2="9.37" fill="none" stroke="#4d4d4d" stroke-miterlimit="10" stroke-width="4" class="colorStroke010101 svgStroke"></line></svg>     ) : (
                            <span   className={` navbar-toggler-icon  ${!drop? 'reverserotate' : ''}`}></span>
                        )}
                    </button>
                    <div className="navbar-collapse navLinksPosition collapse" id="navbarSupportedContent">
                        <ul id='nav-links' className="navbar-nav ">
                            <NavItem to="/about" activeLink={activeLink} handleNavLinkClick={handleNavLinkClick}>
                                About Us
                            </NavItem>
                            <NavItem to="/partners" activeLink={activeLink} handleNavLinkClick={handleNavLinkClick}>
                                Partners
                            </NavItem>
                            <NavItem to="/casestudies" activeLink={activeLink} handleNavLinkClick={handleNavLinkClick}>
                                Industries
                            </NavItem>
                            <NavItem to="/services" activeLink={activeLink} handleNavLinkClick={handleNavLinkClick}>
                                Services
                            </NavItem>
                            <NavItem to="/careers" activeLink={activeLink} handleNavLinkClick={handleNavLinkClick}>
                                Careers
                            </NavItem>
                            <NavItem to="/contact" activeLink={activeLink} handleNavLinkClick={handleNavLinkClick}>
                                Contact Us
                            </NavItem>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

const NavItem = ({ to, children, activeLink, handleNavLinkClick }) => {
    const isActive = activeLink === to;

    return (
        <li className={`nav-item ${isActive ? 'active' : ''}`}>
            <Link
                className={`nav-link ${isActive ? 'active' : ''}`}
                to={to}
                onClick={() => handleNavLinkClick(to)}
            >
                {children}
            </Link>
        </li>
    );
};


export default Navbar;


// export default function Navbar() {
    
// }
