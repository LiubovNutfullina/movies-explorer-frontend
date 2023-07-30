import React from "react";
import './Footer.css';

function Footer() {
    return (
        <section className="footer">
            <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className='footer__container'>
                <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
                <div className='footer__links'>
                    <a className='footer__link' href='https://practicum.yandex.ru/'>Яндекс.Практикум</a>
                    <a className='footer__link' href='https://github.com/LiubovNutfullina'>Github</a>
                </div>
            </div>
        </section>
    )
}

export default Footer;