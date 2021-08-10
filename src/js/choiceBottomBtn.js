const bottomBtnsWrapper = document.querySelector('.bottom-btns');
const bottomBtns = document.querySelectorAll('.bottom-btns button');

bottomBtnsWrapper.addEventListener('click', (e) => {
    bottomBtns.forEach((item) => {
        item.classList.remove('active');
    });
    e.target.classList.contains('active') ? e.target.classList.remove('active') : e.target.classList.add('active');
});
