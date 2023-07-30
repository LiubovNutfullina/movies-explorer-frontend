import './Header.css';
import React from 'react';
import logo from '../../images/header_logo.svg';
import Navigation from '../Navigation/Navigation';

function Header(props) {
    return (
        <section className={`header ${props.isMainPage ? '' : 'header_items-aligned-left'}`}>
            <img 
                className='header__logo'
                src={logo}
                alt='Логотип' 
            />
            <Navigation isMainPage={props.isMainPage} />
        </section>
    )
}

export default Header;