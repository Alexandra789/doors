import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper-header', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let textSwiper = document.querySelectorAll('.slider__subtitle');

textSwiper.forEach((item)=>{
    item.innerHTML = item.innerHTML.replace(/\u2028/g, ' ');
});

