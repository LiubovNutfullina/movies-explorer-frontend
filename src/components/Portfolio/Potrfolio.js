import './Potrfolio.css';
import React from 'react';
import { Link } from 'react-router-dom';
import strelka from '../../images/strelka.svg'

function Potrfolio() {
    return (
        <section className='portfolio'>
            <h3 className='portfolio__title'>Портфолио</h3>
            <nav className='portfolio__links'>
                <Link className='portfolio__link' to='https://github.com/LiubovNutfullina/how-to-learn' target='blank'>
                    <span>Статичный сайт</span>
                    <img className='portfolio__image' src={strelka} alt='Здесь изображена стрелка'/>
                </Link>
                <Link className='portfolio__link' to='https://liubovnutfullina.github.io/russian-travel/' target='blank'>
                    <span>Адаптивный сайт</span>
                    <img className='portfolio__image' src={strelka} alt='Здесь изображена стрелка'/>
                </Link>
                <Link className='portfolio__link portfolio__link_no-line' to='https://github.com/LiubovNutfullina/react-mesto-api-full-gha' target='blank'>
                    <span>Одностраничное приложение</span>
                    <img className='portfolio__image' src={strelka} alt='Здесь изображена стрелка'/>
                </Link>
            </nav>
        </section>
    )
};

export default Potrfolio;