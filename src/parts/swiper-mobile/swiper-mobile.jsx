import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, EffectFade} from "swiper";
import emptyBook from '../../images/emptyBook.jpg'
import 'swiper/css';


export const SwiperMobile = ({bookImages}) => (
        <Swiper
            data-test-id='slide-big'
            modules={[Navigation, Pagination, EffectFade]}
            speed={800}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{clickable: true}}
        >
            {
                (bookImages.length === 0) ?
                    <SwiperSlide data-test-id='slide-mini'>
                        <img src={emptyBook} alt="slider item"/>
                    </SwiperSlide>
                    : bookImages.map((item) => (
                        <SwiperSlide data-test-id='slide-mini'>
                            <img src={`https://strapi.cleverland.by${item.url}`} alt="slider item"/>
                        </SwiperSlide>
                    ))
            }

        </Swiper>
    );


