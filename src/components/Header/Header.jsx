import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearchengin, faReact, faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import './Header.css';

const Header = ({logo}) => {
    return ( 
        <header className="container-fluid">
            <div className="container">
                <div className="header-body">
                    <div className="logo">
                        <img className="imageLogo" src={logo} alt="logo"/>
                    </div>
                
                    <div className="menu opciones">
                        <ul className="list">
                            <li className="list-item">
                                <a className="icon" href="inicio">
                                    <FontAwesomeIcon icon={faSearchengin}/>
                                </a>
                            </li>

                            <li className="list-item menu">
                                <a className="icon" href="inicio">
                                    <FontAwesomeIcon icon={faReact}/>
                                </a>
                            </li>
                        </ul>

                        <div className="redes-sociales">
                            <ul className="list">
                                <li className="list-item">
                                    <a href="facebook" className="icon">
                                        <FontAwesomeIcon icon={faFacebookF}/>
                                    </a>
                                </li>
                                <li className="list-item">
                                    <a href="twitter" className="icon">
                                        <FontAwesomeIcon icon={faTwitter}/>
                                    </a>
                                </li>
                                <li className="list-item">
                                    <a href="instagram" className="icon">
                                        <FontAwesomeIcon icon={faInstagram}/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;