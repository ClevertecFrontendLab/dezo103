import React from 'react';
import reviewAvatar from '../../images/reviewAvatar.jpg'
import filledStarIcon from "../../images/filledStarIcon.svg";
import style from './review.module.css'

export const Review = () => (
    <div>
        <div className={style.reviewUser}>
            <div className={style.reviewAvatar}>
                <img src={reviewAvatar} alt="avatar"/>
            </div>
            <div className={style.reviewData}>
                <p>Иван Иванов</p>
                <p>5 января 2019</p>
            </div>
        </div>
        <div className={style.stars}>
            <img src={filledStarIcon} alt="star"/>
            <img src={filledStarIcon} alt="star"/>
            <img src={filledStarIcon} alt="star"/>
            <img src={filledStarIcon} alt="star"/>
            <img src={filledStarIcon} alt="star"/>
        </div>
        <p>
            Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный
            проект не оставляет шанса для анализа существующих паттернов поведения. Для современного
            мира внедрение современных методик предоставляет широкие возможности для позиций,
            занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто,
            сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами
            себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт
            предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры
            крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище,
            хотя само их существование приносит несомненную пользу обществу.
        </p>
    </div>
)
;

