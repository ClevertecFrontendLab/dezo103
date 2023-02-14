import {NavLink} from "react-router-dom";
import logo from '../../images/logo.svg'
import avatar from '../../images/avatar.png'
import style from './header.module.css'


export const Header = ({isOpenedMenu, setIsOpenedMenu}) => {

    const onClickHandler = (event) => {
        event.stopPropagation()
        setIsOpenedMenu(!isOpenedMenu)
    }

    return (
        <header className={style.header}>
            <div className={style.logo}>
                <NavLink to='/'>
                    <img src={logo} alt="logo"/>
                </NavLink>
            </div>
            <div className={style.info}>
                <div className={style.burger}
                     role="presentation"
                     data-test-id='button-burger'
                     onClick={onClickHandler}
                     id='burgerButton'
                >
                    <div className={(isOpenedMenu) ? `${style.opened} ${style.firstLine}` : `${style.firstLine}`}/>
                    <div className={(isOpenedMenu) ? `${style.opened} ${style.secondLine}` : `${style.secondLine}`}/>
                    <div className={(isOpenedMenu) ? `${style.opened} ${style.lastLine}` : `${style.lastLine}`}/>
                </div>
                <h1>Библиотека</h1>
                <div className={style.user}>
                    <p className={style.greeting}>Привет, Иван!</p>
                    <img src={avatar} alt="avatar"/>
                </div>
            </div>
        </header>
    )
};


