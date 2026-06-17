const portugueseLanguage = document.querySelector("#pt-br");
const englishLanguage = document.querySelector("#en");
const idiom = localStorage.getItem('language');

// page elements
const h1 = document.querySelector('h1');
const firstParagraph = document.querySelector("#firstParagraph");
const secondParagraph = document.querySelector('#secondParagraph');
const thirdParagraph = document.querySelector("#thirdParagraph");
const h2 = document.querySelector('h2');
const labels = document.querySelectorAll('label');
const submitButton = document.querySelector('input[type="submit"]');

if (idiom) {
    // console.log(idiom);
    changeToPortuguese();
}

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
});

function changeToPortuguese() {
    h1.textContent = "Sobre Mim";

    firstParagraph.textContent = 'Olá, Sou Edi Carlos da Silva. Trabalhei por muitos anos como Suporte de TI em uma rede de Supermercados. E também sou professor Estadual em São Paulo.';

    secondParagraph.textContent = 'Também tenho experiência como Analista Fullstack na tecnologia .Net';

    thirdParagraph.textContent = 'Sou formado em Análise e Desenlvovimento de Sistemas e estou melhorando meus conhecimentos no Desenvolvimento de Software na Universidade da BYU. Quero muito uma oportunidade para trabalhar como Desenvolvedor com você. Por isso eu fiz esse portifolio para mostrar para você alguns dos meus projetos.';

    h2.textContent = "Contato";

    labels[0].textContent = 'Seu Nome';
    labels[2].textContent = "Mensagem";

    submitButton.value = 'Enviar';
}

function changeToEnglish() {
    h1.textContent = "About Me";

    firstParagraph.textContent = 'Hi! I am Edi Carlos da Silva. I have been working as IT support for many years. I also work as teacher in a public school.';

    secondParagraph.textContent = 'I also have some job experience as Fullstack Developer in .Net Tecnology.';

    thirdParagraph.textContent = 'I graduated Systems Analyst and Developer in my Country, and I am improving my knowledge in Software Development in BYU. I would love an opportunity to work with you. So I did this portfolio to show some of my projects.';

    h2.textContent = "Contact Me";

    labels[0].textContent = 'Your Name';
    labels[2].textContent = "Message";

    submitButton.value = 'Send Message';
}