import {temples} from '../data/temples.js';
// console.log(temples);

import {url} from '../data/temples.js';
// console.log(url);

// GRAB a reference to the division where we display the items
const showHere = document.querySelector("#showHere");

// get a reference to the html dialog element
const mydialog = document.querySelector("#mydialog");
const mytitle = document.querySelector("#mydialog h2");
const myinfo = document.querySelector("#mydialog p");
const myclose = document.querySelector("#mydialog button");

myclose.addEventListener('click', () => {
    mydialog.close();
})

function displayItems(data) {
    // console.log(data);

    data.forEach(x => {
        console.log(x);
        const photo = document.createElement('img');
        photo.src = `${url}${x.path}`;
        photo.alt = x.name;
        
        showHere.appendChild(photo);
    });
}

displayItems(temples);
