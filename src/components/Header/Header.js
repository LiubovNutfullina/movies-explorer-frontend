import './Header.css';
import React from 'react';
import logo from '../../images/header_logo.svg';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className={`header ${props.isLoggedIn ? 'header_items-aligned-left' : ''}`}>
            <Link className='header__link' to='/'>
                <img 
                    className='header__logo'
                    src={logo}
                    alt='Логотип' 
                />
            </Link>
            <Navigation isLoggedIn={props.isLoggedIn} />
        </header>
    )
}

export default Header;