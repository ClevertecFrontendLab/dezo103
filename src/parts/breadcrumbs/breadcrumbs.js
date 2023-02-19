import React from 'react';
import style from './breadcrumbs.module.css'

export const Breadcrumbs = ({categories, title}) => (
    <div className={style.breadcrumbs}>
        <p>{
            `${categories} / ${title}`
        }</p>
    </div>
)
