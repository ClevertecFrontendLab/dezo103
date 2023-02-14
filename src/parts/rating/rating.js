import React from 'react';
import filledStarIcon from "../../images/filledStarIcon.svg";
import style from './rating.module.css'


export const Rating = () => (
    <div className={style.stars}>
        <img src={filledStarIcon} alt="star"/>
        <img src={filledStarIcon} alt="star"/>
        <img src={filledStarIcon} alt="star"/>
        <img src={filledStarIcon} alt="star"/>
        <img src={filledStarIcon} alt="star"/>
        <p>4.3</p>
    </div>
)
