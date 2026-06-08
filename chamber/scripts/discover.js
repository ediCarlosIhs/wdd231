import { places } from '../data/places.mjs';
console.log(places);

const showHere = document.querySelector('#allplaces');

function displayItems(places) {

    places.forEach((place, index) => {
        // create the card element
        const thecard = document.createElement('div');

        // create the image element
        const thephoto = document.createElement('img');
        thephoto.src = `images/discover/${place.photoUrl}`;
        thephoto.alt = place.name;
        thephoto.width = "300";
        thephoto.height = "200";

        if (index == 0) {
            thephoto.setAttribute("fetchpriority", "high");
        }
        else {
            thephoto.setAttribute("loading", "lazy");
        }

        thecard.appendChild(thephoto);

        // create the title element
        const thetitle = document.createElement('h2');
        thetitle.innerText = place.name;
        thecard.appendChild(thetitle);

        // create the address element
        const theaddress = document.createElement('address');
        theaddress.innerHTML = `<span>Location</span>: ${place.address}`;
        thecard.appendChild(theaddress);

        // create the description element
        const theDescription = document.createElement('p');
        theDescription.innerText = place.description;
        theDescription.classList.add('description');
        thecard.appendChild(theDescription);

        const thePrice = document.createElement('p');
        thePrice.classList.add('cost');
        thePrice.innerHTML = `<span>Cost</span>: ${place.cost}`
        thecard.appendChild(thePrice);

        const learnMore = document.createElement('button');
        learnMore.innerText = `Learn More`;
        thecard.appendChild(learnMore);
    
        showHere.appendChild(thecard);
    });
}

displayItems(places);