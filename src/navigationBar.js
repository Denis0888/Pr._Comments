"use strict";
// ФУНКЦИИ                              
showComments();
saveComments();
// СОРТИРОВКА КОММЕНТАРИЕВ              
let headerTabsSelect = document.querySelector('.header-tabs_select');
let selectHeader = document.querySelector('.header-tabs_select-header');
let selectItem = document.querySelectorAll('.header-tabs_select-item');
let selectArrow = document.querySelector('.svg-arrow');
selectHeader.addEventListener('click', selectToggle);
selectArrow.addEventListener('click', selectToggle);
selectItem.forEach(item => {
    item.addEventListener('click', selectChoose);
});
function selectToggle() {
    headerTabsSelect.classList.toggle('is-active');
    selectArrow.classList.toggle('reverse-arrow');
}
;
function selectChoose() {
    let text = this.innerText;
    let currentText = document.querySelector('.header-tabs_select-current');
    currentText.innerText = text;
    headerTabsSelect.classList.remove('is-active');
    selectArrow.classList.toggle('reverse-arrow');
    filterSelect(text);
    removeCheckMarkClass();
    this.classList.add('check-mark');
}
;
function removeCheckMarkClass() {
    selectItem.forEach(item => {
        item.classList.remove('check-mark');
    });
}
;
