import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../images/logo.png';
import '../css/navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(null);
    const [drop, setDrop] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    const handleNavLinkClick = (to) => {
        setActiveLink(to);
        setDrop(!drop);
    };

    const alterDropdown = () => {
        setDrop(!drop);
    };

    const preloadComponent = (component) => {
        component.preload();
    };

    // Scroll detection logic
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <div>
            <nav
                className={`navbar navbar-expand-lg scrolled-nav ${
                    isVisible ? 'navbar-visible' : 'navbar-hidden'
                }`}
                id="navbar"
            >
                <div className={`container ${drop ? 'no-margin' : ''}`}>
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
                        onClick={alterDropdown}
                    >
                        {drop ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 64 64"
                                id="Cross"
                                style={{ height: '2rem' }}
                                className={`  ${drop ? 'rotate' : ''}`}
                            >
                                <line
                                    x1="9.37"
                                    x2="54.63"
                                    y1="9.37"
                                    y2="54.63"
                                    fill="none"
                                    stroke="#4d4d4d"
                                    strokeMiterlimit="10"
                                    strokeWidth="4"
                                    className="colorStroke010101 svgStroke"
                                ></line>
                                <line
                                    x1="9.37"
                                    x2="54.63"
                                    y1="54.63"
                                    y2="9.37"
                                    fill="none"
                                    stroke="#4d4d4d"
                                    strokeMiterlimit="10"
                                    strokeWidth="4"
                                    className="colorStroke010101 svgStroke"
                                ></line>
                            </svg>
                        ) : (
                            <span
                                className={` navbar-toggler-icon  ${
                                    !drop ? 'reverserotate' : ''
                                }`}
                            ></span>
                        )}
                    </button>
                    <div
                        className={`navbar-collapse navLinksPosition collapse ${
                            drop ? 'show' : '' // Apply 'show' class when drop is true
                        }`}
                        id="navbarSupportedContent"
                    >
                        <ul id="nav-links" className="navbar-nav ">
                            <NavItem
                                to="/about"
                                activeLink={activeLink}
                                handleNavLinkClick={handleNavLinkClick}
                                preload={preloadComponent}
                            >
                                About Us
                            </NavItem>
                            <NavItem
                                to="/partners"
                                activeLink={activeLink}
                                handleNavLinkClick={handleNavLinkClick}
                                preload={preloadComponent}
                            >
                                Partners
                            </NavItem>
                            <NavItem
                                to="/casestudies"
                                activeLink={activeLink}
                                handleNavLinkClick={handleNavLinkClick}
                                preload={preloadComponent}
                            >
                                Industries
                            </NavItem>
                            <NavItem
                                to="/services"
                                activeLink={activeLink}
                                handleNavLinkClick={handleNavLinkClick}
                                preload={preloadComponent}
                            >
                                Services
                            </NavItem>
                            <NavItem
                                to="/careers"
                                activeLink={activeLink}
                                handleNavLinkClick={handleNavLinkClick}
                                preload={preloadComponent}
                            >
                                Careers
                            </NavItem>
                            <NavItem
                                to="/contact"
                                activeLink={activeLink}
                                handleNavLinkClick={handleNavLinkClick}
                                preload={preloadComponent}
                            >
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
