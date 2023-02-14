import {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import {Breadcrumbs} from "../../parts/breadcrumbs";
import {Rating} from "../../parts/rating";
import {Review} from "../../parts/review";
import {books} from '../../constants/books-list'
import style from './book-page.module.css';
import {SwiperMobile} from "../../parts/swiper-mobile/swiper-mobile";
import {SwiperDesktop} from "../../parts/swiper-desktop/swiper-desktop";


export const BookPage = () => {

    const windowWidth = useRef(window.innerWidth)

    useEffect(() => {
        document.querySelector('nav').style.display = 'none'
        return () => {
            document.querySelector('nav').style.display = 'block'
        }
    }, [])

    const {id} = useParams()
    const book = books.find(book => book.id === id)

    const [isReviewsOpen, setIsReviewsOpen] = useState(false)

    const onArrowClickHandler = () => {
        setIsReviewsOpen(!isReviewsOpen)
    }

    return (
        <section className={style.mainPage}>
            <Breadcrumbs/>
            <div className={style.about}>
                <div className={style.cover}>
                    {
                        (windowWidth.current >= 1440)
                            ? <SwiperDesktop bookImages={book.photos}/>
                            : <SwiperMobile bookImages={book.photos}/>
                    }
                </div>
                <div className={style.mainBookData}>
                    <h1>{book.name}</h1>
                    <div className={style.author}>{book.author}</div>
                    <div className={style.buttonWrapper}>
                        <button type='button'>Забронировать</button>
                    </div>
                </div>
                <div className={style.descriptionAbout}>
                    <h3>О книге</h3>
                    <p>{book.about}</p>
                    <p>Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы
                        — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.</p>
                </div>
            </div>
            <div className={style.detail}>
                <h3>Рейтинг</h3>
                <div className={style.line}/>
                <Rating/>
                <h3 className={style.marginedH3}>Подробная информация</h3>
                <div className={style.line}/>
                <div className={style.tables}>
                    <table>
                        <tr>
                            <td>Издательство</td>
                            <td>Питер</td>
                        </tr>
                        <tr>
                            <td>Год издания</td>
                            <td>2019</td>
                        </tr>
                        <tr>
                            <td>Страниц</td>
                            <td>288</td>
                        </tr>
                        <tr>
                            <td>Переплет</td>
                            <td>Мягкая обложка</td>
                        </tr>
                        <tr>
                            <td>Формат</td>
                            <td>70х100</td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <td>Жанр</td>
                            <td>Компьютерная литература</td>
                        </tr>
                        <tr>
                            <td>Вес</td>
                            <td>370 г</td>
                        </tr>
                        <tr>
                            <td>ISBN</td>
                            <td>978-5-4461-0923-4</td>
                        </tr>
                        <tr>
                            <td>Изготовитель</td>
                            <td>ООО«Питер Мейл». РФ, 198206, г.Санкт-Петербург, Петергофское ш,
                                д.73, лит. А29
                            </td>
                        </tr>
                    </table>
                </div>
                <h3 className={style.marginedH3}>отзывы<span>2</span></h3>
                <div
                    className={(isReviewsOpen) ? `${style.arrow} ${style.arrowUp}` : `${style.arrow}`}
                    onClick={onArrowClickHandler}
                    role="presentation"
                    data-test-id='button-hide-reviews'/>
                <div className={(isReviewsOpen) ? `${style.allReviews}` : `${style.hidden}`}>
                    <div className={style.line}/>
                    <Review/>
                    <Review/>
                </div>
                <br/>
                <button type='button' data-test-id='button-rating'>Оценить книгу</button>
            </div>
        </section>
    )
};
