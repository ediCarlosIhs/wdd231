const article = document.querySelector("#members");
const path = "./data/members.json";

const gridButton = document.querySelector('#grid');
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
    gridButton.className = "active";
    listButton.className = "";
    article.className = "grid";
});

listButton.addEventListener("click", () => {
    listButton.className = "active";
    gridButton.className = "";
    article.className = "list";
});