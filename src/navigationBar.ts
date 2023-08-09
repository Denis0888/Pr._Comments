// ФУНКЦИИ                              
showComments();
saveComments();

// СОРТИРОВКА КОММЕНТАРИЕВ              
let headerTabsSelect: HTMLElement = document.querySelector('.header-tabs_select');
let selectHeader: HTMLElement = document.querySelector('.header-tabs_select-header');
let selectItem: NodeListOf<HTMLElement> = document.querySelectorAll('.header-tabs_select-item');
let selectArrow: HTMLElement = document.querySelector('.svg-arrow');

selectHeader.addEventListener('click', selectToggle);
selectArrow.addEventListener('click', selectToggle);
selectItem.forEach(item => {
    item.addEventListener('click', selectChoose);
});
function selectToggle(): void {
    headerTabsSelect.classList.toggle('is-active');
    selectArrow.classList.toggle('reverse-arrow');
};
function selectChoose(): void {
    let text: string = this.innerText;
    let currentText: HTMLElement = document.querySelector('.header-tabs_select-current');
    currentText.innerText = text;
    headerTabsSelect.classList.remove('is-active');
    selectArrow.classList.toggle('reverse-arrow');
    filterSelect(text);

    removeCheckMarkClass();
    this.classList.add('check-mark');
};
function removeCheckMarkClass() {
    selectItem.forEach(item => {
        item.classList.remove('check-mark');
    });
};
