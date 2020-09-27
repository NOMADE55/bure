import React from 'react';
import Navbar from '@components/Navbar';
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="full-img">
                <img src="https://placehold.it/1200x300/abcd12" alt=""/>
            </div>
            <Navbar />
            <div className="store-data">
                <h1>Bure</h1>
                <p className="lead">Una tienda para que arranques a vender <b>muy rápido</b> y que ella crezca con vos.</p>
            </div>
            <div className="store-filter">

                <input className="search" type="text" placeholder="Buscar"/>
            </div>
        </header>
    );
}
export default Header;
