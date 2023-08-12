import './Register.css';
import logo from '../../images/header_logo.svg';
import Input from '../Input/Input.js';
import React from 'react';
import { Link } from 'react-router-dom';

function Register(props) {
    const [formValue, setFormValue] = React.useState({
        name: {
            value: '',
            valid: false,
        },
        email: {
            value: '',
            valid: false,
        },
        password: {
            value: '',
            valid: false,
        },
    });

    const handleChange = (e) => {
        const {id, value} = e.target;
        const valid = e.target.validity.valid

        setFormValue({
            ...formValue,
            [id]: {
                ...formValue[id],
                value: value,
                valid: valid,
            },
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleRegisterSubmit(formValue);
    }

    return(
        <section className='form'>
            <form className='form__content' onSubmit={handleSubmit} onChange={handleChange}>
                <Link className='form__link-logo' to='/'>
                    <img className='form__logo' 
                    alt='Логотип' 
                    src={logo}/>
                </Link>
                <h1 className='form__title'>Добро пожаловать!</h1>
                <Input
                    label='Имя'
                    type='text'
                    id='name'
                    className='name'
                    min={'2'}
                    max={'40'}
                    defaultValue=''
                    autocomplete='username'
                    required={true}
                />
                <Input
                    label='E-mail'
                    type='email'
                    id='email'
                    className='email'
                    min={'2'}
                    max={'40'}
                    required={true}
                    defaultValue=''
                    autocomplete='email'
                />
                <Input
                    label='Пароль'
                    type='password'
                    id='password'
                    className='password'
                    min={'8'}
                    max={'40'}
                    required={true}
                    defaultValue=''
                    autocomplete='new-password'
                />
                <button type='submit' className='form__button-submit' disabled={!formValue.name.valid || !formValue.email.valid || !formValue.password.valid}>Зарегистрироваться</button>
                <div className='form__signup'>
                    <p className='form__signup-text'>Уже зарегистрированы?</p> 
                    <Link to='/signin' className='form__link'>
                    Войти
                    </Link>
                </div>
            </form>
        </section>
    )
}

export default Register;