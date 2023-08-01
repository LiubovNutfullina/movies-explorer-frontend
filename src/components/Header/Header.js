import './Header.css';
import React from 'react';
import logo from '../../images/header_logo.svg';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className={`header ${props.isMainPage ? '' : 'header_items-aligned-left'}`}>
            <Link className='header__link' to='/'>
                <img 
                    className='header__logo'
                    src={logo}
                    alt='Логотип' 
                />
            </Link>
            <Navigation isMainPage={props.isMainPage} />
        </header>
    )
}

export default Header;