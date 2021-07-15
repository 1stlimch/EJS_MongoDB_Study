const title = document.body.querySelector('.editTool .title');
const text = document.body.querySelector('.editTool .text');

const viewTitle = document.body.querySelector('.view .title');
const viewText = document.body.querySelector('.view .text');

title.addEventListener('input', mirrorTitle);
text.addEventListener('input', mirrorText);

function mirrorTitle(event) {
  viewTitle.textContent = title.value;
}

function mirrorText(event) {
  viewText.textContent = text.value;
}
