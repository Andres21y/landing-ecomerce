const $htmlElement = document.querySelector("html");

const $btns = document.querySelectorAll("#button_dark");

$btns.forEach(e => e.addEventListener("click", cambiar));

function cambiar() {
    $htmlElement.classList.toggle("dark");
}