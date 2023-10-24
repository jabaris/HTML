let dropDownBtn = document.querySelector('.dropdown__buttons');
let dropDownList = document.querySelector('.dropdown__list');
let dropDownListItem = document.querySelector('.dropdown__list-item');

dropDownBtn.addEventListener('click', function() {
    dropDownList.classList.toggle('.dropdown__list--visible');
})
// dropDownBtn.forEach(function(downBtn) {
//     downBtn.addEventListener('click', function() {
//         dropDownList.classList.toggle('.ropdown__list--visible')
//     })
// })