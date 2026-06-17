const portugueseLanguage = document.querySelector("#pt-br");
const englishLanguage = document.querySelector("#en");
const idiom = localStorage.getItem('language');

// page elements
const projectsLink = document.querySelector("#projectsLink");
const aboutmeLinks = document.querySelectorAll(".aboutmeLink");
const myDream = document.querySelector('.myDream');



portugueseLanguage.addEventListener('click', () => {
    // console.log('portuguese language');
    if (!idiom)
        localStorage.setItem('language', 'pt-br');

    changeToPortuguese();

});

englishLanguage.addEventListener('click', () => {
    // console.log('English language');
    localStorage.removeItem('language');
    changeToEnglish();
})

if (idiom) {
    changeToPortuguese();
}

function changeToPortuguese() {
    projectsLink.textContent = 'Projetos';
    myDream.textContent = "Desenvolvedor de Software";

    aboutmeLinks.forEach(link => {
        link.textContent = "Sobre Mim";
    })
}

function changeToEnglish() {
    projectsLink.textContent = 'Projects';
    myDream.textContent = "Software Developer";
    aboutmeLinks.forEach(link => {
        link.textContent = "About Me";
    })
}
