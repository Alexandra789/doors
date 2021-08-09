import Swiper from "swiper";

const swiperHelpfulInformation = new Swiper('.swiper-helpful-information', {
    loop: true,
    slidesPerView: 2,
    navigation: {
        nextEl: '.swiper-helpful-information-right',
        prevEl: '.swiper--helpful-information-left',
    },
});
