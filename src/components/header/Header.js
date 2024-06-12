import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faWizardsOfTheCoast } from '@fortawesome/free-brands-svg-icons';
import './Header.css';

export default function Header() {
    return (
        <div className='hed'>
            <div className="headerRoot">
                <div className="icons">
                    <FontAwesomeIcon icon={faYoutube} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="logo">
                    <FontAwesomeIcon className="icon" icon={faWizardsOfTheCoast} />
                </div>
                <input type="text" placeholder="Search" />
            </div>
            <div className='headerMain'>
                <h3>Max rolls out across more European countries</h3>
                <p>The streaming service Max is still on its journey across Europe. Today, Max arrives officially in France and Poland.</p>
                <a href='https://en.wikipedia.org/wiki/Harry_Potter' className='btn' target='_blank' rel="noopener noreferrer">LEARN MORE</a>
            </div>
        </div>
    );
}
