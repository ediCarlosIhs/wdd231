import { courses } from './courses.js';

const allCourses = document.querySelector("#allCourses");
const cseCourses = document.querySelector("#cseCourses");
const wddCourses = document.querySelector("#wddCourses");
const coursesDiv = document.querySelector("#coursesDiv");
const totalCredits = document.querySelector("#totalCredits");

function createCard(coursesList) {

    coursesDiv.innerHTML = "";

    let coursesTotalCredit = 0;

    coursesList.forEach(course => {

        coursesTotalCredit += course.credits;

        const p = document.createElement("p");
    
        const span = document.createElement("span");
    
        span.innerHTML = "&#10004";

        course.completed ? p.appendChild(span) : "";

        !course.completed ? p.classList.add('undone') : "";

        p.innerHTML += ` ${course.subject} ${course.number}`;

        coursesDiv.appendChild(p);
    }) 

    totalCredits.textContent = coursesTotalCredit;

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