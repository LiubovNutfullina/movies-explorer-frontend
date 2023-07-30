import './PageNotFound.css';

function PageNotFound() {
    return (
        <section className='page-not-found'>
            <div className='page-not-found__container'>
                <h2 className='page-not-found__title'>404</h2>
                <span className='page-not-found__text'>Страница не найдена</span>
                <button type='button' className='page-not-found__button'>Назад</button>
            </div>
        </section>
    )
}

export default PageNotFound;