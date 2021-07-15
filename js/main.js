const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

function openTextFile() {
    var input = document.createElement("input");

    input.type = "file";
    input.accept = "text/plain";

    input.onchange = function(event) {
        processFile(event.target.files[0]);
    };

    input.click();
}

function processFile(file) {
    var reader = new FileReader();

    reader.onload = function () {
        output.innerText = reader.result;
    };

    reader.readAsText(file, "utf-8");
}