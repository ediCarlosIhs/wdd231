import {portugueseProjects} from '../data/portugueseProjects.mjs';
import { englishProjects } from '../data/englishProjects.mjs';
// console.log(portugueseProjects['CSS Architecture']);

const portugueseLanguage = document.querySelector("#pt-br");
const englishLanguage = document.querySelector("#en");
const idiom = localStorage.getItem('language');

// page elements
const projectsLink = document.querySelector("#projectsLink");
const aboutmeLinks = document.querySelectorAll(".aboutmeLink");

const h1 = document.querySelector("h1");
const buttons = document.querySelectorAll('.project-card button');

const projectsDescriptions = document.querySelectorAll('p');

portugueseLanguage.addEventListener('click', () => {
    // console.log('portuguese language');
    if (!localStorage.getItem('language')) {
        localStorage.setItem('language', 'pt-br');
        changeToPortuguese();
    }


});

englishLanguage.addEventListener('click', () => {
    // console.log('English language');
    if (localStorage.getItem('language')) {
        localStorage.removeItem('language');
        changeToEnglish();
    }
});

// if (idiom) {
//     // console.log(projectsNames);
//     changeToPortuguese();
// }

export function changeToPortuguese() {
    
    const projectsNames = document.querySelectorAll('h2');

    projectsLink.textContent = 'Projetos';

    aboutmeLinks.forEach(link => {
        link.textContent = "Sobre Mim";
    });

    h1.textContent = 'Projetos';

    // console.log(projectsNames);

    projectsNames.forEach(projectName => {
        const projectDescriptionSibling = projectName.parentElement.querySelector('p');

        projectDescriptionSibling.textContent = portugueseProjects[projectName.textContent]?.description;

        projectName.textContent = portugueseProjects[projectName.textContent]?.name;
    });

    // projectsDescriptions.forEach(projectDescription => {
    //     projectDescription.textContent = portugueseProjects[projectDescription.textContent].description;
    // });

    buttons.forEach(button => {
        button.textContent = "Mais Detalhes"
    });
}

export function changeToEnglish() {
    const projectsNames = document.querySelectorAll('h2');

    projectsLink.textContent = 'Projects';

    aboutmeLinks.forEach(link => {
        link.textContent = "About Me";
    });

    h1.textContent = 'Projects';

    // console.log(projectsNames);

    projectsNames.forEach(projectName => {
        const projectDescriptionSibling = projectName.parentElement.querySelector('p');

        projectDescriptionSibling.textContent = englishProjects[projectName.textContent]?.description;

        projectName.textContent = englishProjects[projectName.textContent]?.name;
    });

    buttons.forEach(button => {
        button.textContent = "See Details";
    });

}