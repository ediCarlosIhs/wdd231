const openButton1 = document.querySelector("#openButton1");
const openButton2 = document.querySelector("#openButton2");
const openButton3 = document.querySelector("#openButton3");

const dialobBox = document.querySelector("#dialogBox");
const dialogBoxText = document.querySelector("#dialogBox div");
const closeButton = document.querySelector("#closeButton");


openButton1.addEventListener('click', () => {
    dialogBoxText.innerHTML = "An Apple has 95 calories";
    dialobBox.showModal();
});

openButton2.addEventListener('click', () => {
    dialogBoxText.innerHTML = "An Orange has 45 calories";
    dialobBox.showModal();
});

openButton3.addEventListener('click', () => {
    dialogBoxText.innerHTML = "A Banana has 105 calories";
    dialobBox.showModal();
})

closeButton.addEventListener('click', () => {
    dialobBox.close();
})