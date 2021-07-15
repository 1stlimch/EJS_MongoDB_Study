const main = document.querySelector('main');

const article = document.createElement('article');
const title = document.createElement('h1');
title.textContent = 'Update...';

article.addEventListener('click', articleClick);

article.appendChild(title);
main.appendChild(article);

function articleClick(event) {
  console.log(event);
}
