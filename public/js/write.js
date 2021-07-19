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
/////////////////////////
document.querySelector('.editTool').addEventListener('submit', uploadPost);

function uploadPost(event) {
  event.preventDefault();

  fetch('/write', {
    method: 'POST',
    body: JSON.stringify({
      title: title.value,
      text: text.value,
    }),
    headers: { 'Content-type': 'application/json' },
  });

  location.replace('/');
}

function goMain() {
  location.replace('/');
}
