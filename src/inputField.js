"use strict";
// СЧЁТЧИК СИМВОЛОВ ДЛЯ ПОЛЯ ВВОДА          
let count = document.querySelector('.count-comment-body');
let message = document.querySelector('.text-long-message');
let textarea = document.querySelector('#comment-body');
let btn = document.querySelector('.button');
let limit = 1000;
textarea.addEventListener('input', () => {
    let textlength = textarea.value.length;
    btn.removeAttribute('disabled');
    if (textlength > limit) {
        count.innerText = `${textlength}/${limit}`;
        count.style.color = '#FF0000';
        message.innerText = `Слишком длинное сообщение`;
        message.style.color = '#FF0000';
        btn.setAttribute('disabled', 'disabled');
        btn.style.backgroundColor = '#dbd7d7';
        btn.style.color = '#918d8d';
    }
    else if (textlength <= limit && textlength != 0) {
        count.innerText = `${textlength}/${limit}`;
        message.innerText = '';
        count.style.color = '#918d8d';
        btn.style.backgroundColor = '#ABD873';
        btn.style.color = '#000000';
    }
    else {
        count.innerHTML = `Макс. ${limit} символов`;
        count.style.color = '#918d8d';
        btn.style.backgroundColor = '#dbd7d7';
        btn.style.color = '#918d8d';
    }
});
