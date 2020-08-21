import React from 'react';
import {ReactComponent as LogoGeopagos} from '@assets/images/geopagos.svg';
import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <p className="love">Made with 💙 @</p>
            <LogoGeopagos height="40" className="logo-geopagos" />
        </footer>
    );
}

export default Footer;
