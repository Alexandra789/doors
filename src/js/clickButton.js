let allRadioButtons = document.querySelectorAll('.radio');
let topRadioButtons = document.querySelectorAll('.radio-top');
let bottomRadioButtons = document.querySelectorAll('.radio-bottom');
let colorRadioButtons = document.querySelectorAll('.wrap-color>.color');
let allButtons = document.querySelectorAll('.wrap>.radio-wrapper>.button');

for (let i = 0; i <allButtons.length; i++) {
    allButtons[i].checked ? console.log('sdsad') : allButtons[i].style.border = 'none';
}
 // = bottomButtons.onclick = colorButtons.onclick = chooseButton;

function chooseButton(e){
    console.log(e.target)
    // if(e.target === )
}

console.log(allButtons);

$(allButtons).click(function(e) {
    if(!$(e.target).is('input')){
        console.log(e.target.childNodes)
        // console.log('hi..')
        // $("[name='radio]").prop("checked", !$("[name='radio']").is(':checked'));{
        console.log(e.target);
    }

});
