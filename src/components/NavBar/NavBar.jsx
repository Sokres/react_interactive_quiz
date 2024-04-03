import { useContext } from 'react';
import cl from './NavBar.module.scss'
import logo from '../../img/logo.svg'
import { Link } from 'react-router-dom';
import { Context } from '../../main';
import { observer } from 'mobx-react-lite';
import { AUTH_ROUTE } from '../AppRouter';

const NavBar = observer(() => {
    const { user } = useContext(Context)
         return (
        <header className={cl.header}>
            <Link to='/' ><img src={logo} alt="logo" width='200' height='50' /></Link>
            {user.isAuth ?
                <nav className={cl.navBar}>
                    <li className="navBar__list"><Link to='/admin' >Админ панель</Link></li>
                    <li className="navBar__list"><Link to='/admin' >Выйти</Link></li>
                    {/* <button onClick={() => user._isAuth = true}>Клик нет</button> */}
                    <button onClick={() => user.setIsAuth(false)}>Клик Нет</button>
                </nav>
                :
                <nav className={cl.navBar}>
                    <button onClick={() => user.setIsAuth(true)}>Клик ДА</button>
                    <li className="navBar__list"><Link to={AUTH_ROUTE} >Войти</Link></li>
                </nav>
            }
        </header>
    );
});

export default NavBar;