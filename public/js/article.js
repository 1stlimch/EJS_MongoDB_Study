const main = document.querySelector('main');

const article = document.createElement('article');
const title = document.createElement('h1');
const text = document.createElement('span');

title.textContent = 'Update...';

article.addEventListener('click', articleClick);

main.appendChild(article);
article.appendChild(title);
article.appendChild(text);

function articleClick(event) {
  console.log(event);
}
