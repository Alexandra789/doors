// function init(){
//     let myMap = new ymaps.Map('map', {
//         center: [55.74, 37.58],
//         zoom: 13,
//         controls: []
//     });
//
//     let searchControl = new ymaps.control.SearchControl({
//         options: {
//             provider: 'yandex#search'
//         }
//     });
//
//     myMap.controls.add(searchControl);
//
//     // Программно выполним поиск определённых кафе в текущей
//     // прямоугольной области карты.
//     searchControl.search('Москва, Краснопресненская наб., д. 12, под. 6, 123610 ');
// }

// function init() {
//     let myMap = document.querySelector('#map');
//     console.log(myMap);
//     let searchControl = new ymaps.control.SearchControl({
//         options: {
//             // Будет производиться поиск по топонимам и организациям.
//             provider: 'yandex#search'
//         }
//     });
//     myMap.controls.add(searchControl);
// }
//
// ymaps.ready(init);
