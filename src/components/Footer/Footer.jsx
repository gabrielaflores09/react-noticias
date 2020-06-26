import React from 'react';
import './Footer.css';

const Footer = ({logo}) => {
    return ( 
        <footer>
            <div className="container">
                <div className="row">
                    <div className="logo">
                        <img className="imageLogo" src={logo} alt="logo"/>
                    </div>

                    <div className="body-footer">
                        <span>
                            Uso de API: <strong><a href="https://newsapi.org">https://newsapi.org</a></strong>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;