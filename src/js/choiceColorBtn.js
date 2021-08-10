const colorBtns = document.querySelectorAll('.color');
const colorBtnsWrapper = document.querySelector('.colors');

colorBtnsWrapper.addEventListener('click', (e) => {
    colorBtns.forEach((item) => {
        item.classList.remove('active');
    });
    e.target.classList.contains('active') ? e.target.classList.remove('active') : e.target.classList.add('active');
});

