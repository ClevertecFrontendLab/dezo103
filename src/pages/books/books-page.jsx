import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useSelector} from "react-redux";
import {NavLink, useParams} from "react-router-dom";
import filledStarIcon from "../../images/filledStarIcon.svg";
import starIcon from "../../images/starIcon.svg";
import emptyBook from "../../images/emptyBook.jpg";
import loupeIcon from "../../images/loupeIcon.svg";
import sortByIcon from "../../images/sortByIcon.svg";
import sortByIcon2 from "../../images/sortByIcon2.svg";
import closeIcon from "../../images/closeIcon.svg"
import style from './books-page.module.css'
import {application} from "../../redux/app-selectors";
import {getCategoriesList} from "../../redux/categories-selectors";
import {Highlight} from "../../parts/highlight";


const Card = ({singleBook, filter}) => {

    const highlightText = useCallback((str) => <Highlight filter={filter} str={str}/>, [filter])

    return (
        <div className={style.card} data-test-id='card'>
            <div className={style.bookImage}>
                <NavLink to={`${singleBook.id}`}>
                    {

                        singleBook.image
                            ? <img src={`https://strapi.cleverland.by${singleBook.image.url}`} alt="book"/>
                            : <img src={emptyBook} alt="book"/>

                    }
                </NavLink>
            </div>
            <div className={style.bookDescription}>
                <div className={style.bookRaiting}>
                    {
                        singleBook.rating
                            ? <>
                                <img src={filledStarIcon} alt="star"/>
                                <img src={filledStarIcon} alt="star"/>
                                <img src={filledStarIcon} alt="star"/>
                                <img src={filledStarIcon} alt="star"/>
                                <img src={starIcon} alt="star"/>
                            </>
                            : <p>Еще нет оценок</p>
                    }
                </div>
                <div className={style.bookName}>
                    <p>{highlightText(singleBook.title)}</p>
                </div>
                <div className={style.bookAuthor}>
                    <p>{singleBook.authors[0]}</p>
                </div>
                <div className={style.bookButton}>
                    <button type="button" disabled={singleBook.booking}>Забронировать</button>
                </div>
            </div>
        </div>
    )
}

export const BooksPage = ({bookList}) => {

    const [view, setView] = useState('tile')
    const [isFullWidthSearch, setIsFullWidthSearch] = useState(false)

    const windowWidth = useRef(window.innerWidth)
    const inputRef = useRef(null)

    const onSearchClickHandler = (event) => {
        if (windowWidth.current <= 590) {
            setIsFullWidthSearch(true)
            setTimeout(() => {inputRef.current.focus()},0)
        }
        if (event.nativeEvent.target.alt === 'close') {
            setIsFullWidthSearch(false)
            inputRef.current.blur()
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    const onCloseClick = () => {
        setIsFullWidthSearch(false)
    }

    const app = useSelector(application)

    const [sortedBookList, setSortedBookList] = useState(bookList)
    const [sortedByRatingDecrease, setIsSortedByRatingDecrease] = useState(true)
    const [substring, setSubstring] = useState('')

    const categories = useSelector(getCategoriesList)

    const {category} = useParams()

    const decrease = (a,b) => {
        if (a?.rating === null) {
            return 1
        }
        if (b?.rating === null) {
            return -1
        }
        if (b?.rating === a?.rating) {
            return 0
        }
        return a?.rating < b?.rating ? 1 : -1
    }
    const increase = (a,b) => {
        if (b?.rating === null) {
            return 1
        }
        if (a?.rating === null) {
            return -1
        }
        if (b?.rating === a?.rating) {
            return 0
        }
        return b?.rating > a?.rating ? -1 : 1
    }

    const filterBook = useCallback(() => {

        // category filter
        const inRussianCategory = categories.find((item) => item.path === category)?.name
        let filteredBook = bookList.filter((book) => {
            if (inRussianCategory) {
                return book.categories[0] === inRussianCategory
            }
            return bookList
        })

        // sort filter
        if (sortedByRatingDecrease) {
            filteredBook.sort(decrease)

        } else {
            filteredBook.sort(increase)
        }

        // search filter
        filteredBook = filteredBook.filter((book) => book.title.toLowerCase().includes(substring.toLowerCase()))

        setSortedBookList(filteredBook)
        console.log(filteredBook, 'flltered book')
    },[bookList, category, categories, sortedByRatingDecrease, substring])

    useEffect(() => {
        filterBook()
    },[category, filterBook])

    const onSortByClickHandler = () => {
        setIsSortedByRatingDecrease(!sortedByRatingDecrease)
        filterBook(substring)
    }

    const onInputChangeHandler = (event) => {
        setSubstring(event.target.value)
        filterBook()
    }
    // console.log(sortedByRatingDecrease, 'sortedByRatingDecrease')

    // console.log('sortedBookList', sortedBookList)



    return (
        <div className={style.mainContent}>
            {
                !app.isErrorConnection && <div className={style.tools}>
                    <div className={style.leftTools}>
                        <div onClick={onSearchClickHandler} role="presentation" className={style.buttonSearch} data-test-id='button-search-open'>
                            <input type="text"
                                   className={(isFullWidthSearch) ? `${style.toolsSort} ${style.isFullWidth}` : `${style.toolsSort}`}
                                   placeholder='Поиск книги или автора…'
                                   ref={inputRef}
                                   data-test-id='input-search'
                                   onChange={(event) => onInputChangeHandler(event)}
                                   value={substring}
                            />
                            <img src={loupeIcon} alt="loupeIcon" className={style.loupeIcon}/>
                            {
                                isFullWidthSearch && <img className={style.closeIcon}
                                                          onClick={onCloseClick}
                                                          alt='close'
                                                          role="presentation"
                                                          src={closeIcon}
                                                          data-test-id='button-search-close'
                                />
                            }
                        </div>
                        <button type="button"
                                data-test-id='sort-rating-button'
                                className={(isFullWidthSearch) ? `${style.toolsSort} ${style.notVisible}` :  `${style.toolsSort}`}
                                onClick={onSortByClickHandler}>
                            {
                                sortedByRatingDecrease
                                ? <img src={sortByIcon} alt="sortBy"/>
                                    : <img src={sortByIcon2} alt="sortBy"/>
                            }

                            <span className={style.sortByRatingText}>По рейтингу</span>
                        </button>
                    </div>
                    <div className={ (isFullWidthSearch) ? `${style.rightTools} ${style.notVisible}` :  `${style.rightTools}`}>
                        <button
                            data-test-id='button-menu-view-window'
                            className={(view === 'tile') ? `${style.viewTile} ${style.viewActive}` : style.viewTile}
                            type="button"
                            onClick={() => {
                                setView('tile')
                            }}
                        >
                            <div>
                                <div/>
                                <div/>
                            </div>
                            <div>
                                <div/>
                                <div/>
                            </div>
                        </button>
                        <button
                            data-test-id='button-menu-view-list'
                            className={(view === 'list') ? `${style.viewList} ${style.viewActive}` : style.viewList}
                            type="button"
                            onClick={() => {
                                setView('list')
                            }}>
                            <div/>
                            <div/>
                            <div/>
                        </button>
                    </div>
                </div>
            }
            <div className={(view === 'list') ? `${style.cards} ${style.cardList}` : style.cards}>
                {
                    sortedBookList.length > 0
                    ? sortedBookList.map((book) => <Card
                            singleBook={book}
                            filter={substring}
                            key={book.id}
                        />)
                        : !substring ? <p className={style.emptyBookList} data-test-id='empty-category'>В этой категории книг еще нет</p>
                                        : <p className={style.emptyBookList} data-test-id='search-result-not-found'>По запросу ничего не найдено</p>


                }
            </div>
        </div>
    )
}




