import { courses } from './courses.js';

const allCourses = document.querySelector("#allCourses");
const cseCourses = document.querySelector("#cseCourses");
const wddCourses = document.querySelector("#wddCourses");
const coursesDiv = document.querySelector("#coursesDiv");
const totalCredits = document.querySelector("#totalCredits");
const courseDetails = document.querySelector("#course-details");

function createCard(coursesList) {

    coursesDiv.innerHTML = "";

    // let coursesTotalCredit = 0;

    coursesList.forEach(course => {

        const p = document.createElement("p");

        p.addEventListener('click', () => {
            displayCourseDetails(course);
        });

        // p.setAttribute("id", `${course.subject.toLowerCase()}${course.number}`);
        // p.classList.add('courseCard');
    
        const span = document.createElement("span");
    
        span.innerHTML = "&#10004";

        course.completed ? p.appendChild(span) : p.classList.add('undone');

        // !course.completed ? p.classList.add('undone') : "";

        p.innerHTML += ` ${course.subject} ${course.number}`;

        coursesDiv.appendChild(p);
    }) 

    totalCredits.textContent = coursesList.reduce((total, course) => total + course.credits, 0);

}

function displayCourseDetails(course) {
    courseDetails.innerHTML = '';

    courseDetails.innerHTML = `
        <div>
        <h2>${course.subject} ${course.number}</h2>
        <button id="closeModal">❌</button>
        </div>
        <h3>${course.title}</h3>
        <p><strong>Credits</strong>: ${course.credits}</p>
        <p><strong>Certificate</strong>: ${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    `;

    courseDetails.showModal();

    closeModal.addEventListener('click', () => {
        courseDetails.close();
    });
}

createCard(courses);

allCourses.addEventListener('click', () => {

    createCard(courses);

})

cseCourses.addEventListener('click', () => {

    const filteredCourses = courses.filter(course => course.subject == 'CSE');

    createCard(filteredCourses);

});

wddCourses.addEventListener('click', () => {

    const filteredCourses = courses.filter(course => course.subject == 'WDD');

    createCard(filteredCourses);

});