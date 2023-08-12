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
            {props.isLoggedIn 
                ? 
                <ul className='navigation__profile-links'>
                    <Link className='navigation__profile-link navigation__profile-link_weight' to='/movies'>Фильмы</Link>
                    <Link className='navigation__profile-link navigation__profile-link_grow' to='/saved-movies'>Сохранённые фильмы</Link>
                    <Link className='navigation__profile-link navigation__profile-link_border' to='/profile'>
                        <img className='navigation__profile-link-icon' alt='Силуэт человека' src={logo}/>
                        Аккаунт
                    </Link>
                    <div className='navigation__profile-menu'>
                        <button type='button' className='navigation__profile-button' onClick={openNavTab} />
                        <NavTab isOpen={navTabIsOpen} onClose={closeNavTab} />
                    </div>
                </ul>
                :
                <ul className='navigation__main-links'>
                    <li className='navigation__item navigation__item_grow'><Link className='navigation__main-link' to='/signup'>Регистрация</Link></li>
                    <li className='navigation__item'><Link className='navigation__main-link navigation__main-link_colored' to='/signin'>Войти</Link></li>
                </ul>
                
            }
        </section>
    )
}

export default Navigation;