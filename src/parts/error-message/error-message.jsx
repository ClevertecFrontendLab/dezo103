import React from 'react';
import {useDispatch} from "react-redux";
import {setIsErrorConnection} from "../../redux/app-reducer";
import style from './error-message.module.css';

export const ErrorMessage = () => {

    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(setIsErrorConnection(false))
    }

    return (
        <div className={style.errorWrapper} data-test-id='error'>
            <div className={style.messageField}>
                <div className={style.exclamation}>!</div>
                <p className={style.info}>Что-то пошло не так. Обновите страницу через некоторое
                    время.</p>
            </div>
            <div className={style.closingIconWrapper}>
                <div className={style.closingIcon} onClick={onClickHandler} role="presentation">
                    <div className={style.firstLine}/>
                    <div className={style.lastLine}/>
                </div>
            </div>
        </div>
    );
}


