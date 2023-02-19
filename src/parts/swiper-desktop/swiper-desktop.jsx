import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Navigation, Pagination, Thumbs, Scrollbar, A11y} from "swiper";
import emptyBook from '../../images/emptyBook.jpg'
import 'swiper/css';
import style from './swiper-desktop.module.css'


export const SwiperDesktop = ({bookImages}) => {

    const [activeImage, setActiveImage] = useState(`https://strapi.cleverland.by${bookImages[0].url}`)

    const onClickHandler = (event) => {
        setActiveImage(event.target.src)
    }

    useEffect(() => {
        setActiveImage(`https://strapi.cleverland.by${bookImages[0].url}`)
    },[bookImages])

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
                            <img src={`https://strapi.cleverland.by${item.url}`} alt="slider item" className = 'swiper-slide-visible'/>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </>

    );
}


