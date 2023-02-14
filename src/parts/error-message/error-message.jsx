import React from 'react';
import style from './error-message.module.css'

export const ErrorMessage = () => (
    <div className={style.errorWrapper} data-test-id='error'>
        <div className={style.messageField}>
            <div className={style.exclamation}>!</div>
            <p className={style.info}>Что-то пошло не так. Обновите страницу через некоторое
                время.</p>
        </div>
        <div className={style.closingIconWrapper}>
            <div className={style.closingIcon}>
                <div className={style.firstLine}/>
                <div className={style.lastLine}/>
            </div>
        </div>
    </div>
);


