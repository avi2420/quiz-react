import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars ,faTimes } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="navbar">
            <div className="navbar-toggle" onClick={toggleSidebar}>
                <a><FontAwesomeIcon icon={faBars} /></a>
            </div>
            <div className="navbar-logo">
                <img src="/Images/large.png" alt="Logo" />
            </div>
            <div className="navbar-auth">
                <button className="btn-login" onClick={openModal}>Login</button>
                <button className="btn-Signup">Sign Up</button>
            </div>
            {isOpen && (
                <div className="sidebar open">
                      <div className="sidebar-header">
                        <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={toggleSidebar} />
                    </div>
                    <NavLink exact to="/" className="sidebar-link" activeClassName="active" onClick={toggleSidebar}>
                        Home
                    </NavLink>
                    <NavLink to="/profile" className="sidebar-link" activeClassName="active" onClick={toggleSidebar}>
                        Pricing
                    </NavLink>
                    <NavLink to="/previous-scores" className="sidebar-link" activeClassName="active" onClick={toggleSidebar}>
                        Enterprise
                    </NavLink>
                    <NavLink to="/previous-scores" className="sidebar-link" activeClassName="active" onClick={toggleSidebar}>
                        Training
                    </NavLink>
                    <NavLink to="/previous-scores" className="sidebar-link" activeClassName="active" onClick={toggleSidebar}>
                        Video Tutorials
                    </NavLink>
                    <NavLink to="/previous-scores" className="sidebar-link" activeClassName="active" onClick={toggleSidebar}>
                        Contact Us
                    </NavLink>
                </div>
            )}
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default Header;
