const hamButton = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");
const body = document.body;

hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('show');
    navBar.classList.toggle('show');
    body.classList.toggle('body-no-scroll');
});