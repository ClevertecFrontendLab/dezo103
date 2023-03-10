import React, {useEffect, useRef, useState} from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import style from './nav.module.css'
import {setCategoriesThunk} from "../../redux/categories-reducer";
import {getCategoriesList} from "../../redux/categories-selectors";
import {application} from "../../redux/app-selectors";
import {books} from "../../redux/books-selectors";


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


    const allBooks = useSelector(books)

    const booksCounter = allBooks.reduce((result, item) => {
        const currentResult = {...result}
        if (Object.prototype.hasOwnProperty.call(result, item.categories[0])) {
            currentResult[item.categories[0]] += 1
        } else {
            currentResult[item.categories[0]] = 1
        }
        return currentResult
    }, {})

    console.log('booksCounter', booksCounter)


    return (
        <>
            <nav className={style.menu}>
                <ul className={style.mainMenu}>
                    <li>
                        <NavLink to='/'
                                 className={(({isActive}) => isActive) && (isOpenSubmenu) ? style.active : ''}
                                 onClick={onClickHandler}
                                 data-test-id='navigation-showcase'
                        >??????????????
                            ????????{
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
                                    className={({isActive}) => isActive ? style.submenuActive : ''}>??????
                                    ??????????
                                </NavLink>
                            </li>
                            {
                                categories.map((genre) => <li key={genre.id}>
                                    <NavLink
                                        to={`/books/${genre.path}`}
                                        data-test-id={`navigation-${genre.path}`}
                                        className={({isActive}) => isActive ? style.submenuActive : ''}>{genre.name}
                                    </NavLink>
                                    <span data-test-id={`navigation-book-count-for-${genre.path}`}>{booksCounter[genre.name] || 0}</span>
                                </li>)
                            }
                        </ul>
                    }

                    <li>
                        <NavLink to='/terms'
                                 className={({isActive}) => isActive ? style.active : ''}
                                 data-test-id='navigation-terms'
                                 onClick={() => setIsOpenSubmenu(false)}
                        >??????????????
                            ??????????????????????</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contract'
                                 className={({isActive}) => isActive ? style.active : ''}
                                 data-test-id='navigation-contract'
                                 onClick={() => setIsOpenSubmenu(false)}
                        >??????????????
                            ????????????</NavLink>
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
                            >??????????????
                                ????????<span className={style.arrowWrapper}>
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
                                >?????? ??????????
                                </NavLink>
                            </li>
                            {
                                categories.map((genre) => <li key={genre.id}>
                                    <NavLink
                                        to={`/books/${genre.path}`}
                                        data-test-id={`burger-${genre.path}`}
                                        className={({isActive}) => isActive ? style.submenuActive : ''}
                                        onClick={() => {
                                            setIsOpenedMenu(false)
                                        }}
                                    >{genre.name}
                                    </NavLink>
                                    <span data-test-id={`burger-book-count-for-${genre.path}`}>{booksCounter[genre.name] || 0}</span>
                                </li>)
                            }
                        </ul>
                        <li>
                            <NavLink to='/terms'
                                     className={({isActive}) => isActive ? style.active : ''}
                                     data-test-id='burger-terms'
                                     onClick={onOtherPageClick}>??????????????
                                ??????????????????????</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contract'
                                     className={({isActive}) => isActive ? style.active : ''}
                                     data-test-id='burger-contract'
                                     onClick={onOtherPageClick}>??????????????
                                ????????????</NavLink>
                        </li>
                        <div className={style.line}/>
                        <li>
                            <NavLink to='/profile'
                                     className={({isActive}) => isActive ? style.active : ''}>??????????????</NavLink>
                        </li>
                        <li>
                            <NavLink to='/exit'
                                     className={({isActive}) => isActive ? style.active : ''}>??????????</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
