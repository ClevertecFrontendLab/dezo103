import React from 'react';
import {NavLink} from "react-router-dom";
import style from './breadcrumbs.module.css'

export const Breadcrumbs = ({categories, title, pathCategory}) => (
    <div className={style.breadcrumbs}>
        <p>
            <p><NavLink to={`/books/${pathCategory}`}
                        data-test-id='breadcrumbs-link'>{categories}</NavLink></p> / <p
            data-test-id='book-name'>{title}</p>
        </p>
    </div>
)

