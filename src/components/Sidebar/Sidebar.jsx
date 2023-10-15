import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.scss';
import LogoS from '../../assets/images/logoD.png';
import LogoSubtitle from '../../assets/images/Picture 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faEnvelope, faGear, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
    
    return (
        <div className='sidebar'>
            <Link className="logo" to='/'>
                <img src={LogoS} alt='logo' width={'50px'} height={'auto'} />
                <img className="sublogo img1" src={LogoSubtitle} alt='logo' width={'24px'} height={'auto'} />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink onClick={() => setShowNav(false)} exact={true} activeClassName="active" to='/'>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
                </NavLink>
                <NavLink onClick={() => setShowNav(false)} exact={true} activeClassName="active" className="aboutlink" to='/about'>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
                </NavLink>
                {/* <NavLink onClick={() => setShowNav(false)} exact={true} activeClassName="active" className="skillslink" to='/skills'>
                    <FontAwesomeIcon icon={faGear} color="#4d4d4e"></FontAwesomeIcon>
                </NavLink> */}
                <NavLink onClick={() => setShowNav(false)} exact={true} activeClassName="active" className="projectlink" to='/project'>
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"></FontAwesomeIcon>
                </NavLink>
                <NavLink onClick={() => setShowNav(false)} exact={true} activeClassName="active" className="contactlink" to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
                </NavLink>
                <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} color='#4d4d4e' size='3x' className='close-icon'/>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/debarun-deb-529669227">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" size='lg' />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/debarun-deb">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" size='lg' />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://instagram.com/debarrunn?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
                        <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" size='lg' />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color='#4d4d4e' size='3x' className='hamburger-icon' />
        </div>
    );
}

export default Sidebar;
