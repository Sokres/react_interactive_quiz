
import { Link, useLocation } from 'react-router-dom';
import { REGISTRATION_ROUTE, AUTH_ROUTE } from '../components/AppRouter';

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === AUTH_ROUTE;

    return (
        <section className='auth'>
            <h1 className='auth__title'>{isLogin ? 'Авторизация' : 'Регистрация'}</h1>
            <form className='auth__form' action="">
                <label htmlFor="authNameInput"></label>
                <input className='authNameInput' id='authNameInput' type="text" placeholder='Введите имя' />
                <label htmlFor="authPassInput"></label>
                <input className='authNameInput' id='authPassInput' type="text" placeholder='Введите пароль' />
                <div className='auth__link-reg'>
                    <button className='btn auth__btn'>Войти</button>
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