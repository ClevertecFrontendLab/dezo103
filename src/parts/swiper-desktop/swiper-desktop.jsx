import React, {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Navigation, Pagination, Thumbs, Scrollbar, A11y} from "swiper";
import emptyBook from '../../images/emptyBook.jpg'
import 'swiper/css';
import style from './swiper-desktop.module.css'


export const SwiperDesktop = ({bookImages}) => {

    const [activeImage, setActiveImage] = useState(bookImages[0])

    const onClickHandler = (event) => {
        setActiveImage(event.target.src)
    }

    return (
        <>
            <div className={style.bigCover}>
                 <img src={(bookImages.length === 0) ? emptyBook : activeImage} alt="active-slide" data-test-id='slide-big'/>
            </div>
            <Swiper
                modules={[Navigation, Pagination, EffectFade, Thumbs,
                    Scrollbar, A11y
                ]}
                speed={800}
                spaceBetween={20}
                slidesPerView={5}
                scrollbar={{ draggable: true, dragSize: 'auto', snapOnRelease: true, dragClass: 'slidesPerView'}}
            >
                {
                    bookImages.length > 1 &&

                    bookImages.map((item) => (
                        <SwiperSlide data-test-id='slide-mini' onClick={onClickHandler}>
                            <img src={item} alt="slider item" className = 'swiper-slide-visible'/>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </>

    );
}


