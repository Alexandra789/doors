let allRadioButtons = document.querySelectorAll('.radio');
let topRadioButtons = document.querySelectorAll('.radio-top');
let bottomRadioButtons = document.querySelectorAll('.radio-bottom');
let colorRadioButtons = document.querySelectorAll('.wrap-color>.color');
let allButtons = document.querySelectorAll('.wrap>.radio-wrapper>.button');
//
// for (let i = 0; i <allButtons.length; i++) {
//     allButtons[i].checked ? console.log('sdsad') : allButtons[i].style.border = 'none';
// }

function chooseButton(e){
    console.log(e.target)

}

console.log(allButtons);

$(allButtons).click(function(e) {
    if(!$(e.target).is('input')){
        let radioButton = e.target.childNodes[1];
        console.log(radioButton.checked);
        for (let i = 0; i < topRadioButtons; i++) {
            topRadioButtons[i].checked = false;
        }
        if(e.target.childNodes[1].checked && e.target.childNodes[1].name === 'radio-top'){

            radioButton.checked = true;
            e.target.style.border = '1px solid red';
        }
        console.log(radioButton.checked);
        console.log(e.target.childNodes[1])
    }

});
