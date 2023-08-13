import './Profile.css';
import React from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import '../../components/Input/Input.css';
import {validateInput} from '../../utils/constants';

function Profile(props) {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const [nameValidationError, setNameValidationError] = React.useState('');
    const [emailValidationError, setEmailValidationError] = React.useState('');
    const [responseMessage, setResponseMessage] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);
    const [readOnly, setReadOnly] = React.useState(true);

    React.useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onUpdateUser(name, email)
            .then(() => {
                setResponseMessage('Профиль отредактирован');
            })
            .catch((err) => {
                console.log(err)
                setResponseMessage('Произошла ошибка');
            });
    }

    const handleNameChange = (e) => {
        setResponseMessage('');
        setName(e.target.value);

        if(!e.target.validity.valid) {
            setNameValidationError(e.target.validationMessage);
            return;
        } 
        
        if (!validateInput('name', e.target.value)) {
            setNameValidationError('Некорректное значение');
        } else {
            setNameValidationError('');
        }
    }

    const handleEmailChange = (e) => {
        setResponseMessage('');
        setEmail(e.target.value);

        if(!e.target.validity.valid) {
            setEmailValidationError(e.target.validationMessage);
            return;
        } 
        
        if (!validateInput('email', e.target.value)) {
            setEmailValidationError('Некорректное значение');
        } else {
            setEmailValidationError('');
        }
    }
    return (
        <>
            <Header isLoggedIn={true}/>
            <section className='profile'>
                <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
                <form className='profile__form' onSubmit={handleSubmit}>
                    <div className='profile__container'>
                        <label className='profile__text profile__text_border'>
                            Имя
                            <input
                                placeholder='Имя'
                                className='profile__input'
                                id='input-name'
                                type='text'
                                minLength='2'
                                maxLength='40'
                                value={name}
                                onChange={handleNameChange}
                                readOnly={readOnly}
                                onFocus={ () => setReadOnly(false) }
                                onBlur={ () => setReadOnly(true) }
                                autoComplete="off"
                            />
                        </label>
                        <span className={`input__error ${nameValidationError ? 'input__error_active' : ''}`}>
                            {nameValidationError}
                        </span>
                        <label className='profile__text'>
                            E-mail
                            <input
                                placeholder='E-mail'
                                className='profile__input'
                                id='input-email'
                                type='email'
                                minLength='2'
                                maxLength='40'
                                value={email}
                                onChange={handleEmailChange}
                                readOnly={readOnly}
                                onFocus={ () => setReadOnly(false) }
                                onBlur={ () => setReadOnly(true) }
                                autoComplete="off"
                            />
                        </label>
                        <span className={`input__error ${emailValidationError ? 'input__error_active' : ''}`}>
                            {emailValidationError}
                        </span>
                        
                        {responseMessage ? <span>{responseMessage}</span> : ''}
                    </div>
                    <div className='profile__buttons'>
                        <button 
                            className='profile__button' 
                            type='submit' 
                            disabled={(name === currentUser.name && email === currentUser.email) || (emailValidationError || nameValidationError)}
                        >Редактировать</button>
                        <Link className='profile__button-link' to='/' onClick={props.signOut}>
                            <button className='profile__button profile__button_colored' type='button'>Выйти из аккаунта</button>
                        </Link>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Profile;