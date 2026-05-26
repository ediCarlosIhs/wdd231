const modal = document.querySelector("#course-details");
const closeButton = document.querySelector("#closeModal");

const courseCard = document.querySelector('.courseCard');

courseCard.addEventListener('click', () => {
    modal.showModal();
});

closeButton.addEventListener('click', () => {
    modal.close();
});