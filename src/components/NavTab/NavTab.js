import './NavTab.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/icon-people.svg';

function NavTab(props) {

    const isOpenNavTab = `${props.isOpen ? 'nav-tab_is-opened' : ''}`;

    return (
        <section className={`nav-tab ${isOpenNavTab}`}>
            <div className="nav-tab__container">
                <button
                    type='button'
                    className="nav-tab__close"
                    aria-label="Закрыть"
                    onClick={props.onClose}
                />
                <ul className="nav-tab__content">
                    <Link className="nav-tab__link" to='/' >Главная</Link>
                    <Link className="nav-tab__link" to='/movies'>Фильмы</Link>
                    <Link className="nav-tab__link" to='/saved-movies'>Сохранённые фильмы</Link>
                    <div className='nav-tab__account-container'>
                        <Link className="nav-tab__link nav-tab__link_border" to='/profile'>
                            <img className='nav-tab__link-icon' alt='Силуэт человека' src={logo}/>
                            Аккаунт
                        </Link>
                    </div>
                </ul>
            </div>
        </section>
    )
}

export default NavTab;