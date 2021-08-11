const bottomBtnsWrapper = document.querySelector('.bottom-btns');
const bottomBtns = document.querySelectorAll('.bottom-btns button');
const colorBtns = document.querySelectorAll('.color');
const colorBtnsWrapper = document.querySelector('.colors');
const topBtnsWrapper = document.querySelector('.top-btns');
const topBtns = document.querySelectorAll('.top-btns button');

function choiceButton(btns, e){
    btns.forEach((item) => {
        item.classList.remove('active');
    });
    e.target.classList.contains('active') ? e.target.classList.remove('active') : e.target.classList.add('active');
}

topBtnsWrapper.addEventListener('click', (e) => {
    choiceButton(topBtns,e)
});

colorBtnsWrapper.addEventListener('click', (e) => {
    choiceButton(colorBtns,e);
});

bottomBtnsWrapper.addEventListener('click', (e) => {
  choiceButton(bottomBtns,e);
});

