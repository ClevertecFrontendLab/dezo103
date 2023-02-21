import {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Breadcrumbs} from "../../parts/breadcrumbs";
import {Rating} from "../../parts/rating";
import {Review} from "../../parts/review";
import style from './book-page.module.css';
import {SwiperMobile} from "../../parts/swiper-mobile/swiper-mobile";
import {SwiperDesktop} from "../../parts/swiper-desktop/swiper-desktop";
import {setSingleBookThunk} from "../../redux/single-book-reducer";
import {singleBook} from "../../redux/single-book-reducer-selectors";
import {application} from "../../redux/app-selectors";
import {getCategoriesList} from "../../redux/categories-selectors";


export const BookPage = () => {

    const dispatch = useDispatch()
    const {id, category} = useParams()

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(setSingleBookThunk(id))
    }, [dispatch, id])

    const windowWidth = useRef(window.innerWidth)

    useEffect(() => {
        document.querySelector('nav').style.display = 'none'
        return () => {
            document.querySelector('nav').style.display = 'block'
        }
    }, [])


    const book = useSelector(singleBook)

    const [isReviewsOpen, setIsReviewsOpen] = useState(false)

    const onArrowClickHandler = () => {
        setIsReviewsOpen(!isReviewsOpen)
    }

    const app = useSelector(application)
    const categories = useSelector(getCategoriesList)

    let activeCategory = categories.find(item => item.path === category)?.name

    if (!activeCategory) {
        activeCategory = 'Все книги'
    }
    // console.log(category)
    return (
        app.isErrorConnection
            ? <section className={style.mainPage}>
                <Breadcrumbs categories={activeCategory} pathCategory={category} title=''/>
            </section>
            : (Object.keys(book).length !== 0) &&
            <section className={style.mainPage}>
                <Breadcrumbs categories={book.categories[0]} pathCategory={category} title={book.title}/>
                <div className={style.about}>
                    <div className={style.cover}>
                        {
                            (windowWidth.current >= 1440)
                                ? <SwiperDesktop bookImages={book.images}/>
                                : <SwiperMobile bookImages={book.images}/>
                        }
                    </div>
                    <div className={style.mainBookData}>
                        <h1 data-test-id='book-title'>{book.title}</h1>
                        <div className={style.author}>{book.authors[0]}</div>
                        <div className={style.buttonWrapper}>
                            <button type='button'>Забронировать</button>
                        </div>
                    </div>
                    <div className={style.descriptionAbout}>
                        <h3>О книге</h3>
                        <p>{book.description}</p>
                        <p>Откройте великолепно иллюстрированную книгу и вы сразу поймете, что
                            алгоритмы
                            — это просто. А грокать алгоритмы — это веселое и увлекательное
                            занятие.</p>
                    </div>
                </div>
                <div className={style.detail}>
                    <h3>Рейтинг</h3>
                    <div className={style.line}/>
                    <Rating rating={book.rating}/>
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
                                <td>{book.issueYear}</td>
                            </tr>
                            <tr>
                                <td>Страниц</td>
                                <td>{book.pages}</td>
                            </tr>
                            <tr>
                                <td>Переплет</td>
                                <td>{book.cover}</td>
                            </tr>
                            <tr>
                                <td>Формат</td>
                                <td>{book.format}</td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td>Жанр</td>
                                <td>{book.categories}</td>
                            </tr>
                            <tr>
                                <td>Вес</td>
                                <td>{book.weight}</td>
                            </tr>
                            <tr>
                                <td>ISBN</td>
                                <td>{book.ISBN}</td>
                            </tr>
                            <tr>
                                <td>Изготовитель</td>
                                <td>{book.producer}
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
