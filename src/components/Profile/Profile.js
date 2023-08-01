import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <>
            <Header />
            <section className='profile'>
                <h1 className='profile__title'>Привет, Виталий!</h1>
                <form className='profile__form'>
                    <div className='profile__container'>
                        <label className='profile__text profile__text_border'>
                            Имя
                            <input
                                placeholder='Имя'
                                defaultValue='Виталий'
                                className='profile__input'
                                id='input-name'
                                type='text'
                                required
                                minLength='2'
                                maxLength='40'
                            />
                        </label>
                        <label className='profile__text'>
                            E-mail
                            <input
                                placeholder='E-mail'
                                defaultValue='pochta@yandex.ru'
                                className='profile__input'
                                id='input-email'
                                type='email'
                                required
                                minLength='2'
                                maxLength='40'
                            />
                        </label>
                    </div>
                    <div className='profile__buttons'>
                        <button className='profile__button' type='button'>Редактировать</button>
                        <Link className='profile__button-link' to='/'>
                            <button className='profile__button profile__button_colored' type='button'>Выйти из аккаунта</button>
                        </Link>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Profile;