import {BooksPage} from "../books";
import {books} from '../../constants/books-list'
import style from './main-page.module.css'


export const MainPage = () => (
    <div className={style.wrapper}>
        <section className={style.mainPage}>
            <BooksPage bookList={books}/>
        </section>
    </div>
);
