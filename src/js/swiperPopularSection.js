import Swiper from "swiper";

const swiperPopularSectionFirst = new Swiper('.swiper-apartment', {
    loop: true,
    slidesPerView: 2,
    navigation: {
        nextEl: '.swiper-apartment-right',
        prevEl: '.swiper-apartment-left',
    },
});

const swiperPopularSectionSecond = new Swiper('.swiper-home', {
    loop: true,
    slidesPerView: 2,
    navigation: {
        nextEl: '.swiper-home-right',
        prevEl: '.swiper-home-left',
    },
});
