import React from 'react';
import './Navbar.scss';
import { Instagram, Facebook, Twitter, MessageCircle } from 'react-feather';

function Navbar() {
    return (
        <div className="navbar">
            <div className="avatar">
                <img src="https://placehold.it/300?text=avatar" alt=""/>
            </div>
            <div className="social-media">
                <a href="#"><Facebook className="icon" /></a>
                <a href="#"><Instagram className="icon" /></a>
                <a href="#"><Twitter className="icon" /></a>
                <a href="#"><MessageCircle className="icon" /></a>
            </div>
        </div>
    );
}

export default Navbar;
