import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import Logo from '../images/logo.png';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg border-bottom border-black">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={Logo} alt="SVNT Tech" height={50} />
                        <div className="logo-font">Freedom of Choice & Power of Integration</div>
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
                            <NavItem href="/">ABOUT US</NavItem>
                            <NavDropdown title="INDUSTRIES">
                                <NavLink href="/">Action</NavLink>
                                <NavLink href="/">Another action</NavLink>
                                <NavLink href="/">Something else here</NavLink>
                            </NavDropdown>
                            <NavDropdown title="SERVICES">
                                <NavLink href="/">Action</NavLink>
                                <NavLink href="/">Another action</NavLink>
                                <NavLink href="/">Something else here</NavLink>
                            </NavDropdown>
                            <NavItem href="/">INSIGHTS</NavItem>
                            <NavItem href="/">CAREERS</NavItem>
                            <NavItem href="contact">CONTACT US</NavItem>
                            <NavItem>
                                <IoIosSearch type="submit" className="btn search" />
                            </NavItem>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

const NavItem = ({ href, children }) => (
    <li className="nav-item">
        <a className="nav-link" href={href}>
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
