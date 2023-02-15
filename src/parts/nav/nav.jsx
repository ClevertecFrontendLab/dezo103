import React, {useEffect, useRef, useState} from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import style from './nav.module.css'
import {setCategoriesThunk} from "../../redux/categories-reducer";
import {getCategoriesList} from "../../redux/categories-selectors";
import {application} from "../../redux/app-selectors";


export const Navigation = ({isOpenedMenu, setIsOpenedMenu}) => {

    const categories = useSelector(getCategoriesList)

    const [isOpenSubmenu, setIsOpenSubmenu] = useState(true)

    const menuAreaRef = useRef()

    useEffect(() => {

        const closeMenu = (event) => {
            if (!event.composedPath().includes(menuAreaRef.current)) {
                setIsOpenedMenu(false)
            }
        }

        if (isOpenedMenu) {
            document.querySelector('body').classList.add(`${style.blocked}`)
            document.querySelector('#mobileMenu').style.overflowY = 'auto'
            document.querySelector('#mobileMenu').style.maxHeight = '100vh'
        } else {
            document.querySelector('body').classList.remove(`${style.blocked}`)
        }

        document.body.addEventListener('click', closeMenu)

        return () => {
            document.removeEventListener('click', closeMenu)
        }
    }, [isOpenedMenu, setIsOpenedMenu])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCategoriesThunk())
    }, [dispatch])

    const onClickHandler = () => {
        setIsOpenSubmenu(!isOpenSubmenu)
    }

    const onOtherPageClick = () => {
        setIsOpenSubmenu(false)
        setIsOpenedMenu(false)
    }

    const app = useSelector(application)

    return (
        <>
            <nav className={style.menu}>
                <ul className={style.mainMenu}>
                    <li>
                        <NavLink to='/'
                                 className={(({isActive}) => isActive) && (isOpenSubmenu) ? style.active : ''}
                                 onClick={onClickHandler}
                                 data-test-id='navigation-showcase'
                        >Витрина
                            книг{
                                !app.isErrorConnection && <span className={style.arrowWrapper}>
                            <div
                                className={(isOpenSubmenu) ? `${style.arrow} ${style.arrowUp}` : `${style.arrow}`}/>
                    </span>
                            }
                        </NavLink>
                    </li>
                    {
                        !app.isErrorConnection &&
                        <ul className={(!isOpenSubmenu) ? `${style.submenu} ${style.hidden}` : `${style.submenu}`}>
                            <li>
                                <NavLink
                                    to='/books/all'
                                    data-test-id='navigation-books'
                                    className={({isActive}) => isActive ? style.submenuActive : ''}>Все
                                    книги
                                </NavLink>
                            </li>
                            {
                                categories.map((genre) => <li key={genre.id}>
                                    <NavLink
                                        to={`/books/${genre.path}`}
                                        className={({isActive}) => isActive ? style.submenuActive : ''}>{genre.name}
                                    </NavLink>
                                </li>)
                            }
                        </ul>
                    }

                    <li>
                        <NavLink to='/terms'
                                 className={({isActive}) => isActive ? style.active : ''}
                                 data-test-id='navigation-terms'
                                 onClick={() => setIsOpenSubmenu(false)}
                        >Правила
                            пользования</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contract'
                                 className={({isActive}) => isActive ? style.active : ''}
                                 data-test-id='navigation-contract'
                                 onClick={() => setIsOpenSubmenu(false)}
                        >Договор
                            оферты</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={(isOpenedMenu) ? style.substrate : style.substrateHidden}>
                <nav className={style.mobMenu} data-test-id='burger-navigation' ref={menuAreaRef}
                     id='mobileMenu'>
                    <ul className={style.mainMenu}>
                        <li>
                            <NavLink to='/'
                                     className={(({isActive}) => isActive) && (isOpenSubmenu) ? style.active : ''}
                                     onClick={onClickHandler}
                                     data-test-id='burger-showcase'
                            >Витрина
                                книг<span className={style.arrowWrapper}>
                            <div
                                className={(isOpenSubmenu) ? `${style.arrow} ${style.arrowUp}` : `${style.arrow}`}/>
                    </span>
                            </NavLink>
                        </li>
                        <ul className={(!isOpenSubmenu) ? `${style.submenu} ${style.hidden}` : `${style.submenu}`}>
                            <li>
                                <NavLink
                                    to='/books/all'
                                    data-test-id='burger-books'
                                    className={({isActive}) => isActive ? style.submenuActive : ''}
                                    onClick={() => {
                                        setIsOpenedMenu(false)
                                    }}
                                >Все книги
                                </NavLink>
                            </li>
                            {
                                categories.map((genre) => <li key={genre.id}>
                                    <NavLink
                                        to={`/books/${genre.path}`}
                                        className={({isActive}) => isActive ? style.submenuActive : ''}
                                        onClick={() => {
                                            setIsOpenedMenu(false)
                                        }}
                                    >{genre.name}
                                    </NavLink>
                                </li>)
                            }
                        </ul>
                        <li>
                            <NavLink to='/terms'
                                     className={({isActive}) => isActive ? style.active : ''}
                                     data-test-id='burger-terms'
                                     onClick={onOtherPageClick}>Правила
                                пользования</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contract'
                                     className={({isActive}) => isActive ? style.active : ''}
                                     data-test-id='burger-contract'
                                     onClick={onOtherPageClick}>Договор
                                оферты</NavLink>
                        </li>
                        <div className={style.line}/>
                        <li>
                            <NavLink to='/profile'
                                     className={({isActive}) => isActive ? style.active : ''}>Профиль</NavLink>
                        </li>
                        <li>
                            <NavLink to='/exit'
                                     className={({isActive}) => isActive ? style.active : ''}>Выход</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
