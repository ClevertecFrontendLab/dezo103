import React from 'react';
import loading from "../../images/spiner.svg";
import style from './preloader.module.css'

export const Preloader = () => (
    <div className={style.loading}>
        <img src={loading} alt="loading"/>
    </div>
)
