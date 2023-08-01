import './Potrfolio.css';
import React from 'react';
import strelka from '../../images/strelka.svg'

function Potrfolio() {
    return (
        <section className='portfolio'>
            <h3 className='portfolio__title'>Портфолио</h3>
            <ul className='portfolio__links'>
                <li className='portfolio__item'>
                    <a className='portfolio__link' href='https://github.com/LiubovNutfullina/how-to-learn' target='blank'>
                        <span>Статичный сайт</span>
                        <img className='portfolio__image' src={strelka} alt='Здесь изображена стрелка'/>
                    </a>
                </li>
                <li className='portfolio__item'>
                    <a className='portfolio__link' href='https://liubovnutfullina.github.io/russian-travel/' target='blank'>
                        <span>Адаптивный сайт</span>
                        <img className='portfolio__image' src={strelka} alt='Здесь изображена стрелка'/>
                    </a>
                </li>
                <li className='portfolio__item'>
                    <a className='portfolio__link portfolio__link_no-line' href='https://github.com/LiubovNutfullina/react-mesto-api-full-gha' target='blank'>
                        <span>Одностраничное приложение</span>
                        <img className='portfolio__image' src={strelka} alt='Здесь изображена стрелка'/>
                    </a>
                </li>
            </ul>
        </section>
    )
};

export default Potrfolio;