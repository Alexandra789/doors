import Swiper from "swiper";

const swiperPopularSectionFirst = new Swiper('.swiper-apartment', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-apartment-right',
        prevEl: '.swiper-apartment-left',
    },
    breakpoints: {
        540: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    }
});

const swiperPopularSectionSecond = new Swiper('.swiper-home', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-home-right',
        prevEl: '.swiper-home-left',
    },
    breakpoints: {
        540: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }
});

const swiperHelpfulInformation = new Swiper('.swiper-helpful-information', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-helpful-information-right',
        prevEl: '.swiper-helpful-information-left',
    },
    breakpoints: {
        895: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    }
});
