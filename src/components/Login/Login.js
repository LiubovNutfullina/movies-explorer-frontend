import './Login.css';
import logo from '../../images/header_logo.svg';
import Input from '../Input/Input.js';
import { Link } from 'react-router-dom';

function Login() {
    return(
        <div className='form'>
            <form className='form__content'>
                <Link className='form__link-logo' to='/'>
                    <img 
                        className='form__logo' 
                        alt='Логотип' 
                        src={logo}
                    />
                </Link>
                <h1 className='form__title'>Рады видеть!</h1>
                <Input
                    placeholder='E-mail'
                    type='email'
                    id='email'
                    className='email'
                    min={'2'}
                    max={'40'}
                />
                <Input
                    placeholder='Пароль'
                    type='password'
                    id='password'
                    className='password'
                    min={'2'}
                    max={'40'}
                />
                <button type='submit' className='form__button-submit form__button-submit_signin'>Войти</button>
                <div className='form__signup'>
                    <p className='form__signup-text'>Ещё не зарегистрированы?</p> 
                    <Link to='/signup' className='form__link'>
                    Регистрация
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Login;