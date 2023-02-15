import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {books} from "../../redux/books-selectors";
import {setBooksThunk} from "../../redux/books-reducer";
import style from './main-page.module.css'
import {BooksPage} from "../books";


export const MainPage = () => {

    const dispatch = useDispatch()
    const allBooks = useSelector(books)

    useEffect(() => {
        if (allBooks.length === 0) {
            dispatch(setBooksThunk())
        }
    },[dispatch, allBooks])


    return (
        <div className={style.wrapper}>
            <section className={style.mainPage}>
                <BooksPage bookList={allBooks}/>
            </section>
        </div>
    );
}
