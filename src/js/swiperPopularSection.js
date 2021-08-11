import Swiper from "swiper";
let swiperApartment = document.querySelector('.swiper-apartment');
let swiperHome = document.querySelector('.swiper-home');
// let screenWidth = window.screen.width;

function choiceSwiper(screenWidth){
    if (screenWidth <= 540) {
        console.log(screenWidth);
        swiperApartment.classList.remove('swiper-apartment');
        swiperApartment.classList.add('swiper-apartment-adaptive');
        swiperHome.classList.remove('swiper-home');
        swiperHome.classList.add('swiper-home-adaptive');

        const swiperPopularSectionFirstAdaptive = new Swiper('.swiper-apartment-adaptive', {
            loop: true,
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-apartment-right',
                prevEl: '.swiper-apartment-left',
            },
        });


        const swiperPopularSectionSecondAdaptive = new Swiper('.swiper-home-adaptive', {
            loop: true,
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-home-right',
                prevEl: '.swiper-home-left',
            },
        });
    }
    else {
        swiperApartment.classList.add('swiper-apartment');
        swiperApartment.classList.remove('swiper-apartment-adaptive');
        swiperHome.classList.add('swiper-home');
        swiperHome.classList.remove('swiper-home-adaptive');
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
    }
}

window.onload = ()=> {
    let screenWidth = window.screen.width;
    choiceSwiper(screenWidth)
}
window.addEventListener(`resize`, event => {
    let screenWidth = window.screen.width;
    choiceSwiper(screenWidth);
}, false);



