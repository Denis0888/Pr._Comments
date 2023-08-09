"use strict";
// СОЗДАЁМ ОТПРАВКУ, ОТОБРАЖЕНИЕ И СОХРАНЕНИЕ КОММЕНТАРИЕВ   
document.getElementById('comment-send').addEventListener('click', (event) => {
    event.preventDefault();
    let commentBody = document.getElementById('comment-body');
    class com {
    }
    let comment = {
        answer: [],
        body: commentBody.value,
        time: Math.floor(Date.now() / 1000),
        userSend: arrUser[numCom].name,
        photoSend: arrUser[numCom].img,
        like: false,
        favoriteOff: 'В избранное',
        ratingScore: 0
    };
    count.innerText = `Макс. ${limit} символов`;
    btn.style.backgroundColor = '#dbd7d7';
    commentBody.value = '';
    if (comment.body.length != '' && comment.body.length <= limit) {
        comments.unshift(comment);
        showComments();
        countComments();
        saveComments();
        createAnswer();
        toggleHeart();
        changeRating();
        submitAnswer();
    }
});
//  ВЕШАЕМ КЛИК НА КНОПКУ "ОТВЕТ" 
function createAnswer() {
    document.querySelectorAll('.btn-answer').forEach((item) => {
        let arrowAnswer = item;
        item.addEventListener('click', (event) => {
            indexArrow = arrowAnswer.getAttribute('data-index-arrow');
            drawAnswer = document.querySelector(`.answer-field-${indexArrow}`);
            drawAnswer.innerHTML =
                `<form class="area-answer">
                      <input class="field-answer" type="text" size="40" id="idAnswer" placeholder="Введите ответ...">
                      <button class="submit-answer" type="submit" id="btnAnswer">Ответить</button>
                  </form>`;
            submitAnswer(indexArrow);
            return indexArrow;
        });
    });
}
;
// ВЕШАЕМ КЛИК НА ЛАЙК КОММЕНТАРИЯ  
function toggleHeart() {
    document.querySelectorAll('.inFavorite').forEach(function (item) {
        let favoriteBtn = item;
        item.addEventListener("click", (event) => {
            favoriteBtn.classList.toggle("toggleHeart");
            let index = favoriteBtn.getAttribute('data-index');
            if (favoriteBtn.classList.contains("toggleHeart")) {
                favoriteBtn.innerHTML = paintHeart(true);
                comments[index].like = true;
            }
            if (!favoriteBtn.classList.contains("toggleHeart")) {
                favoriteBtn.innerHTML = paintHeart(false);
                comments[index].like = false;
            }
            ;
            saveComments();
        });
    });
}
;
// ВЕШАЕМ КЛИК НА РЕЙТИНГ КОММЕНТАРИЯ 
function changeRating() {
    document.querySelectorAll('.rating').forEach(function (item) {
        let btn = item;
        item.addEventListener("click", (event) => {
            let indRat = btn.getAttribute('data-index-change');
            if (btn.classList.contains('btn__rating-plus')) {
                comments[indRat].ratingScore++;
            }
            ;
            if (btn.classList.contains('btn__rating-minus')) {
                if (comments[indRat].ratingScore > 0) {
                    comments[indRat].ratingScore--;
                }
                ;
            }
            ;
            let rating = document.querySelector(`.rating-text-${indRat}`);
            rating.innerText = comments[indRat].ratingScore;
            saveComments();
        });
    });
}
;
createAnswer();
toggleHeart();
changeRating();
