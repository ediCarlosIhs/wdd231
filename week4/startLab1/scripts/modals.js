const openButton = document.querySelector("#openButton");
const dialobBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");

openButton.addEventListener('click', () => {
    dialobBox.showModal();
})

closeButton.addEventListener('click', () => {
    dialobBox.close();
})