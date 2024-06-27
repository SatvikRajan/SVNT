import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import Logo from '../images/logo.png';
import '../css/navbar.css'

const Navbar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(null);

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

    return (
        <div>
            <nav className="navbar navbar-expand-lg scrolled-nav " id='navbar'>
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="SVNT Tech" height={30} />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse navLinksPosition collapse justify-content-end" id="navbarSupportedContent">
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
