// СЧЁТЧИК СИМВОЛОВ ДЛЯ ПОЛЯ ВВОДА          
let count: HTMLElement = document.querySelector('.count-comment-body');
let message: HTMLElement = document.querySelector('.text-long-message')
let textarea: any = document.querySelector('#comment-body');
let btn: HTMLElement = document.querySelector('.button');
let limit: number = 1000;

textarea.addEventListener('input', (): void => {
    let textlength: number = textarea.value.length;
    btn.removeAttribute('disabled');

    if (textlength > limit) {
        count.innerText = `${textlength}/${limit}`;
        count.style.color = '#FF0000';
        message.innerText = `Слишком длинное сообщение`
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

