const burgerMenu = document.querySelector('#burger-menu');
const burgerLine = document.querySelector('#burger-line');
const burgerContent = document.querySelector('#burger-content');
const body = document.querySelector('body');

burgerLine.addEventListener("click", function() {
    burgerContent.classList.toggle("active");
    body.classList.toggle("overflow-hidden");
})