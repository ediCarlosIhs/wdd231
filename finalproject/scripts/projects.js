import {changeToPortuguese, changeToEnglish} from './projectsPortuguese.js';

const article = document.querySelector("#projects");
const path = './data/projects.json';
const idiom = localStorage.getItem('language');

const projectModal = document.querySelector("#projectModal");
const closeModal = document.querySelector("#closeModal");

const projectModalTitle = document.querySelector("#projectModal-title");
const projectModalDetails = document.querySelector("#projectModal-details");

async function getProjects() {
    try {
        const response = await fetch(path);
        const data = await response.json();
        // console.table(data.projects);
        displayProjects(data.projects);
        if (idiom) {
            changeToPortuguese();
        }
    } catch (error) {
        console.error("Error fetching members", error);
    }
}

const displayProjects = (projects) => {

    projects.forEach((project, index) => {

        // create the image
        const projectImage = document.createElement("img");
        projectImage.src = `./images/projects/${project.imagePath}`;
        projectImage.setAttribute("width", "298");
        projectImage.setAttribute("height", "144");
        projectImage.setAttribute("alt", `${project.name} webpage Image`);

        if (index === 0) {
            projectImage.setAttribute("fetchpriority", "high");
        } else {
            projectImage.setAttribute("loading", "lazy");
        }

        // create the header
        const projectName = document.createElement("h2");
        projectName.textContent = project.name;

        // create the project description
        const projectDescription = document.createElement("p");
        projectDescription.textContent = project.description;

        const detailButton = document.createElement("button");
        detailButton.textContent= "See Details";
        detailButton.addEventListener('click', () => {
            callModal(project.name, project.deploy, project.repository, project.description);
        })

        const section = document.createElement("section");
        section.classList.add("project-card");
        section.appendChild(projectImage);
        section.appendChild(projectName);
        section.appendChild(projectDescription);
        section.appendChild(detailButton);

        article.appendChild(section);
    });

};

getProjects();




// modal code
closeModal.addEventListener("click", () => {
    projectModal.close();
});

function callModal(projectName, projectDeploy, projectRepository, projectDescription) {

    projectModalTitle.textContent = projectName;

    projectModalDetails.innerHTML = `
        <p>${projectDescription}</p>
        <ul>
            <li><a href="${projectDeploy}" target="_blank">Deploy</a></li>
            <li><a href="${projectRepository}" target="_blank">Repository</a></li>
        </ul>
    `


    projectModal.showModal();

}