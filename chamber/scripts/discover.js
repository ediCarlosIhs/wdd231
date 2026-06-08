import { places } from '../data/places.mjs';
console.log(places);

const showHere = document.querySelector('#allplaces');

function displayItems(places) {

    places.forEach(place => {
        // create the card element
        const thecard = document.createElement('div');

        // create the image element
        const thephoto = document.createElement('img');
        thephoto.src = `images/discover/${place.photoUrl}`;
        thephoto.alt = place.name;
        thecard.appendChild(thephoto);

        // create the title element
        const thetitle = document.createElement('h2');
        thetitle.innerText = place.name;
        thecard.appendChild(thetitle);

        // create the address element
        const theaddress = document.createElement('address');
        theaddress.innerText = place.address;
        thecard.appendChild(theaddress);

        // create the description element
        const theDescription = document.createElement('p');
        theDescription.innerText = place.description;
        theDescription.classList.add('description');
        thecard.appendChild(theDescription);

        const thePrice = document.createElement('p');
        thePrice.classList.add('cost');
        thePrice.innerText = `COST: ${place.cost}`
        thecard.appendChild(thePrice);

        const learnMore = document.createElement('button');
        learnMore.innerText = `Learn More`;
        thecard.appendChild(learnMore);
    
        showHere.appendChild(thecard);
    });
}

displayItems(places);