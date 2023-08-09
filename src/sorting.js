"use strict";
// создаём отображение только по избанным
let btnOnlyFavorite = document.querySelector('.header-tabs_heart-button');
btnOnlyFavorite.addEventListener('click', () => {
    saveCommentsFavorite();
    localCommentsFavorite();
});
function saveCommentsFavorite() {
    let commFav = comments.filter(item => item.like === true);
    localStorage.setItem('commFav', JSON.stringify(commFav));
}
;
function localCommentsFavorite() {
    if (localStorage.getItem('commFav')) {
        comments = JSON.parse(localStorage.getItem('commFav'));
    }
    showComments();
    submitAnswer();
}
;
// фильтр по рейтингу
function saveCommentRating() {
    let reverseRating = document.querySelector('.svg-arrow');
    let commRat = comments.sort((a, b) => a.ratingScore > b.ratingScore ? -1 : 1);
    if (!reverseRating.classList.contains('reverse-arrow')) {
        localStorage.setItem('commRat', JSON.stringify(commRat));
    }
    else {
        commRat.reverse();
        localStorage.setItem('commRat', JSON.stringify(commRat));
    }
}
;
function localCommentsRating() {
    if (localStorage.getItem('commRat')) {
        comments = JSON.parse(localStorage.getItem('commRat'));
    }
    showComments();
    submitAnswer();
}
;
// фильтр по актуальности
function saveCommentsRelevance() {
    let reverseRating = document.querySelector('.svg-arrow');
    let commRel = comments.sort((a, b) => a.time > b.time ? -1 : 1);
    if (!reverseRating.classList.contains('reverse-arrow')) {
        localStorage.setItem('commRel', JSON.stringify(commRel));
    }
    else {
        commRel.reverse();
        localStorage.setItem('commRel', JSON.stringify(commRel));
    }
}
;
function localCommentsRelevance() {
    if (localStorage.getItem('commRel')) {
        comments = JSON.parse(localStorage.getItem('commRel'));
    }
    showComments();
    submitAnswer();
}
;
// фильтр по колличеству ответов
function saveCommentsAnswer() {
    let reverseRating = document.querySelector('.svg-arrow');
    let commAns = comments.sort((a, b) => a.answer > b.answer ? -1 : 1);
    if (!reverseRating.classList.contains('reverse-arrow')) {
        localStorage.setItem('commAns', JSON.stringify(commAns));
    }
    else {
        commAns.reverse();
        localStorage.setItem('commAns', JSON.stringify(commAns));
    }
}
;
function localCommentsAnswer() {
    if (localStorage.getItem('commAns')) {
        comments = JSON.parse(localStorage.getItem('commAns'));
    }
    showComments();
    submitAnswer();
}
;
// условия отображения по Select (выподающее меню)
function filterSelect(textSelect) {
    if (textSelect === 'По дате') {
        localComments();
        showComments();
        saveCommentsRelevance();
        localCommentsRelevance();
    }
    else if (textSelect === 'По актуальности') {
        localComments();
        showComments();
        saveCommentsRelevance();
        localCommentsRelevance();
    }
    else if (textSelect === 'По количеству оценок') {
        localComments();
        showComments();
        saveCommentRating();
        localCommentsRating();
    }
    else if (textSelect === 'По количеству ответов') {
        localComments();
        showComments();
        saveCommentsAnswer();
        localCommentsAnswer();
    }
}
;
