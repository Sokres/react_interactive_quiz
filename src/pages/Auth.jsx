
import { Link, useLocation } from 'react-router-dom';
import { REGISTRATION_ROUTE, AUTH_ROUTE } from '../components/AppRouter';
import {register} from '../api/userBd'
import { useState } from 'react';

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === AUTH_ROUTE;
    const [inputEmail, setInputEmail] = useState('')
    const [inputPasss, setInputPasss] = useState('')

    const signIn = async (e) =>{
        e.preventDefault()
        const respons = await register(inputEmail, inputPasss);
        console.log(respons, 'oooooooooooooooooooooooooooo');
    }

    return (
        <section className='auth'>
            <h1 className='auth__title'>{isLogin ? 'Авторизация' : 'Регистрация'}</h1>
            <form className='auth__form' action="">
                <label htmlFor="authNameInput"></label>
                <input onChange={e => setInputEmail(e.target.value)} value={inputEmail}  className='authNameInput' id='authNameInput' type="email" placeholder='Введите имя' />
                <label htmlFor="authPassInput"></label>
                <input onChange={e => setInputPasss(e.target.value)} value={inputPasss} className='authNameInput' id='authPassInput' type="password" placeholder='Введите пароль' />
                <div className='auth__link-reg'>
                    <button onClick={signIn} className='btn auth__btn'>Войти</button>
                    {isLogin ?
                        <Link to={REGISTRATION_ROUTE}>Регистрация</Link>
                        :
                        <Link to={AUTH_ROUTE}>Авторизоваться </Link>
                        }
                </div>
            </form>
        </section>
    );
};

export default Auth;