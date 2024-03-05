import React, { useEffect, useState } from 'react';
import Logo from '../images/logo.png';
// NAvbar issue
const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [activeLink, setActiveLink] = useState(null);

    const handleNavLinkClick = (href) => {
        setActiveLink(href);
        // Add logic for other click actions if needed
    };
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
    return (
        <div>
            <nav className="navbar navbar-expand-lg border-bottom border-black">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={Logo} alt="SVNT Tech" height={30} />
                    </a>
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
                            <NavItem href="about">About Us</NavItem>
                            <NavItem href="industries">Industries</NavItem>
                            <NavItem href="services">Services</NavItem>
                            <NavItem href="careers">Careers</NavItem>
                            <NavItem href="contact">Contact Us</NavItem>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

const NavItem = ({ href, children}) => (
    <li className="nav-item">
        <a className={'nav-link'} href={href} activeClassName="active">
            {children}
        </a>
    </li>
);

const NavLink = ({ href, children }) => (
    <li>
        <a className="dropdown-item" href={href}>
            {children}
        </a>
    </li>
);

const NavDropdown = ({ title, children }) => (
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-expanded="false">
            {title}
        </a>
        <ul className="dropdown-menu">{children}</ul>
    </li>
);

export default Navbar;
