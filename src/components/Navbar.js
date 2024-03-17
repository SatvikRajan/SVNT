import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Assuming you're using React Router
import Logo from '../images/logo.png';

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
                document.querySelector('.navbar').classList.add('hidden');
            } else {
                document.querySelector('.navbar').classList.remove('hidden');
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    const handleNavLinkClick = (href) => {
        setActiveLink(href);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
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
                    <div className="navbar-collapse collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav align-items-center">
                            <NavItem to="/about" activeLink={activeLink} handleNavLinkClick={handleNavLinkClick}>
                                About Us
                            </NavItem>
                            <NavItem to="/industries" activeLink={activeLink} handleNavLinkClick={handleNavLinkClick}>
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
