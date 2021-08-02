import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper-container', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

let textSwiper = document.querySelectorAll('.slider__subtitle');

for (let i = 0; i < textSwiper.length; i++) {
    textSwiper[i].innerHTML = textSwiper[i].innerHTML.replace(/\u2028/g, ' ');
}

