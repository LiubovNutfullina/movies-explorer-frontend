import './Login.css';
import logo from '../../images/header_logo.svg';
import Input from '../Input/Input.js';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as auth from '../../utils/MainApi';
import { validateInput } from '../../utils/constants';

function Login(props) {
    const [formValue, setFormValue] = React.useState({
        email: {
            value: '',
            valid: false,
        },
        password: {
            value: '',
            valid: false,
        },
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        const valid = e.target.validity.valid && validateInput(id, value);
        setFormValue({
            ...formValue,
            [id]: {
                ...formValue[id],
                value: value,
                valid: valid,
            },
        });
    };

    React.useEffect(() => {
        if (localStorage.getItem('jwt')) {
            auth.checkToken(localStorage.getItem('jwt'))
                .then(() => {
                    navigate('/movies', { replace: true });
                })
                .catch((err) => console.log(err));
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleLoginSubmit(formValue);
    }

    return(
        <section className='form'>
            <form className='form__content' name='login' onSubmit={handleSubmit} onChange={handleChange} value={formValue}>
                <Link className='form__link-logo' to='/'>
                    <img 
                        className='form__logo' 
                        alt='Логотип' 
                        src={logo}
                    />
                </Link>
                <h1 className='form__title'>Рады видеть!</h1>
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
                    autocomplete='current-password'
                />
                <button type='submit' className='form__button-submit form__button-submit_signin' disabled={!formValue.email.valid || !formValue.password.valid}>Войти</button>
                <div className='form__signup'>
                    <p className='form__signup-text'>Ещё не зарегистрированы?</p> 
                    <Link to='/signup' className='form__link'>
                    Регистрация
                    </Link>
                </div>
            </form>
        </section>
    )
}

export default Login;