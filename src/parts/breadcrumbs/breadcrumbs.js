import React from 'react';
import {NavLink} from "react-router-dom";
import style from './breadcrumbs.module.css'

export const Breadcrumbs = ({categories, title, pathCategory}) => (
    <div className={style.breadcrumbs}>
         <p>{
            `${categories} / ${title}`
         }</p>
        {/* <p> */}
        {/*    <NavLink to={`/books/${pathCategory}`}>{categories}</NavLink> / {title} */}
        {/* </p> */}
    </div>
)
