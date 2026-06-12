const spanCurrentYear = document.querySelector("#currentYear");
const today = new Date();

spanCurrentYear.textContent = `${today.getFullYear()}`;

const pLastModified = document.querySelector("#lastModified");

const lastModifiedString = document.lastModified;

// console.log(lastModifiedString);
const lastModifiedDate = new Date(lastModifiedString);

const formattedDate = lastModifiedDate.toLocaleDateString("en-us", {
    month: "long",
    year: "numeric"
})

pLastModified.innerHTML = `Updated: ${formattedDate}`;