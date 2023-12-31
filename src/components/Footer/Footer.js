import React from "react";
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className='footer__container'>
                <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
                <ul className='footer__links'>
                    <li className='footer__item'>
                        <a className='footer__link' href='https://practicum.yandex.ru/' target='blank'>Яндекс.Практикум</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__link' href='https://github.com/LiubovNutfullina' target='blank'>Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;