import './Profile.css';
import Header from '../Header/Header';

function Profile() {
    return (
        <>
            <Header />
            <section className='profile'>
                <h2 className='profile__title'>Привет, Виталий!</h2>
                <form className='profile__form'>
                    <div className='profile__container profile__container_border'>
                        <span className='profile__text'>Имя</span>
                        <span className='profile__text'>Виталий</span>
                    </div>
                    <div className='profile__container'>
                        <span className='profile__text'>E-mail</span>
                        <span className='profile__text'>pochta@yandex.ru</span>
                    </div>
                    <div className='profile__buttons'>
                        <button className='profile__button' type='button'>Редактировать</button>
                        <button className='profile__button profile__button_colored' type='button'>Выйти из аккаунта</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Profile;