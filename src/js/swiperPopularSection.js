import Swiper from "swiper";
let swiperApartment = document.querySelector('.swiper-apartment');
let swiperHome = document.querySelector('.swiper-home');
let swiperHelpfulInformation1 = document.querySelector('.swiper-helpful-information');

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
    if(screenWidth <= 895){

        swiperHelpfulInformation1.classList.remove('swiper-helpful-information');
        swiperHelpfulInformation1.classList.add('swiper-helpful-information-adaptive');
        const swiperHelpfulInformation = new Swiper('.swiper-helpful-information-adaptive', {
            loop: true,
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-helpful-information-right',
                prevEl: '.swiper-helpful-information-left',
            },
        });
    }
    else {
        swiperHelpfulInformation1.classList.remove('swiper-helpful-information-adaptive');
        swiperHelpfulInformation1.classList.add('swiper-helpful-information');

        const swiperHelpfulInformation = new Swiper('.swiper-helpful-information', {
            loop: true,
            slidesPerView: 2,
            navigation: {
                nextEl: '.swiper-helpful-information-right',
                prevEl: '.swiper-helpful-information-left',
            },
        });

    }
}

window.onload = ()=> {
    let screenWidth = window.screen.width;
    choiceSwiper(screenWidth)
};

window.addEventListener(`resize`, event => {
    let screenWidth = window.screen.width;
    choiceSwiper(screenWidth);
}, false);



