import './Navigation.css';
import React, { useState } from 'react';
import logo from '../../images/icon-people.svg';
import { Link } from 'react-router-dom';
import NavTab from '../NavTab/NavTab';

function Navigation(props) {
    
    const [navTabIsOpen, setNavTabIsOpen] = useState(false);

    const openNavTab = () => {
        setNavTabIsOpen(true);
    };

    const closeNavTab = () => {
        setNavTabIsOpen(false);
    };

    return(
        <section className='navigation'>
            {props.isMainPage 
                ? <nav className='navigation__main-links'>
                    <Link className='navigation__main-link' to='/signup'>Регистрация</Link>
                    <Link className='navigation__main-link navigation__main-link_colored' to='/signin'>Войти</Link>
                  </nav>
                :
                <nav className='navigation__profile-links'>
                    <Link className='navigation__profile-link navigation__profile-link_weight' to='/movies'>Фильмы</Link>
                    <Link className='navigation__profile-link' to='/saved-movies'>Сохранённые фильмы</Link>
                    <Link className='navigation__profile-link navigation__profile-link_border' to='/profile'>
                        <img className='navigation__profile-link-icon' alt='Силуэт человека' src={logo}/>
                        Аккаунт
                    </Link>
                    <div className='navigation__profile-menu'>
                        <button type='button' className='navigation__profile-button' onClick={openNavTab} />
                        <NavTab isOpen={navTabIsOpen} onClose={closeNavTab} />
                    </div>
                </nav>
            }
        </section>
    )
}

export default Navigation;