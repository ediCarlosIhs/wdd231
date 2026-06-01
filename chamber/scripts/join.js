const memberModal = document.querySelector("#memberModal");
const closeModal = document.querySelector("#closeModal");

const memberModalTitle = document.querySelector("#memberModal-title");
const memberModalDetails = document.querySelector("#memberModal-details")

closeModal.addEventListener('click', () => {
    memberModal.close();
});

// Modal - not for profit
const npbtn = document.querySelector("#btn-np");
npbtn.addEventListener('click', () => {
    memberModalTitle.innerHTML = "Non Profit Membership";

    memberModalDetails.innerHTML = `
        <p>Benefits include:</p>
        <ul>
            <li>You'll get a nice plaque with the mayor's stamp on it</li>
            <li>You get to ride on a float Saint Patty's Day</li>
        </ul>
        <p>COST: Free</p>
    `

    memberModal.showModal();
});

// Modal - bronze level
const btnBronze = document.querySelector("#btn-bronze");
btnBronze.addEventListener('click', () => {
    memberModalTitle.innerHTML = "Bronze Membership";

    memberModalDetails.innerHTML = `
        <p>Benefits include:</p>
        <ul>
            <li>Discount tickets to all Bowl Games</li>
            <li>You'll get a nice plaque with the mayor's stamp on it</li>
            <li>You get to ride on a float Saint Patty's Day</li>
        </ul>
        <p>COST: $10 annual</p>
    `

    memberModal.showModal();
});

// Modal - Silver level
const btnSilver = document.querySelector("#btn-silver");
btnSilver.addEventListener('click', () => {
    memberModalTitle.innerHTML = "Silver Membership";

    memberModalDetails.innerHTML = `
        <p>Benefits include:</p>
        <ul>
            <li>Free soda at the snack bar</li>
            <li>Discount tickets to all Bowl Games</li>
            <li>You'll get a nice plaque with the mayor's stamp on it</li>
            <li>You get to ride on a float Saint Patty's Day</li>
        </ul>
        <p>COST: $20 annual</p>
    `

    memberModal.showModal();
});

// Modal - Gold level
const btnGold = document.querySelector("#btn-gold");
btnGold.addEventListener('click', () => {
    memberModalTitle.innerHTML = "Gold Membership";

    memberModalDetails.innerHTML = `
        <p>Benefits include:</p>
        <ul>
            <li>Home Page Spotlight</li>
            <li>Invitaion to special events</li>
            <li>Free soda at the snack bar</li>
            <li>Discount tickets to all Bowl Games</li>
            <li>You'll get a nice plaque with the mayor's stamp on it</li>
            <li>You get to ride on a float Saint Patty's Day</li>
        </ul>
        <p>COST: $30 annual</p>
    `

    memberModal.showModal();
});