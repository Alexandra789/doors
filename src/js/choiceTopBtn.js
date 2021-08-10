const topBtnsWrapper = document.querySelector('.top-btns');
const topBtns = document.querySelectorAll('.top-btns button');

topBtnsWrapper.addEventListener('click', (e) => {
    topBtns.forEach((item) => {
        item.classList.remove('active');
    });
    e.target.classList.contains('active') ? e.target.classList.remove('active') : e.target.classList.add('active');
});

