import './PageNotFound.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {

    const navigate = useNavigate();
    const goBack = () => navigate(-1)

    return (
        <section className='page-not-found'>
            <div className='page-not-found__container'>
                <h1 className='page-not-found__title'>404</h1>
                <span className='page-not-found__text'>Страница не найдена</span>
                <button className='page-not-found__button' onClick={goBack}>Назад</button>
            </div>
        </section>
    )
}

export default PageNotFound;