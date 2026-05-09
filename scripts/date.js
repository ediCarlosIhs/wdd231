const spanCurrentYear = document.querySelector('#currentYear');
const today = new Date();

spanCurrentYear.textContent = `${today.getFullYear()}`;

// last modified configuration
const pLastModified = document.querySelector("#lastModified");

const lastModifiedString = document.lastModified;

const lastModifiedDate = new Date(lastModifiedString);

const formattedDate = lastModifiedDate.toLocaleDateString('pt-Br', {
    day: "2-digit",
    month: "2-digit",
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
});

pLastModified.innerHTML = `Last Modification (day/month/year):<br> ${formattedDate}`;