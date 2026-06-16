const getString = window.location.search;
console.log(getString);

const formInfo = new URLSearchParams(getString);
console.log(formInfo);

console.log(formInfo.get("first"));
console.log(formInfo.get("email"));
console.log(formInfo.get("description"));
console.log(formInfo.get('hiddendate'));

const user = document.querySelector("#user");
user.textContent = formInfo.get("first");

const hiddendate = new Date(formInfo.get('hiddendate'));

// console.log(hiddendate);
const formattedHiddendate = hiddendate.toLocaleDateString('en-US', {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "long"
});

const submissionDate = document.querySelector("#submissionDate");
submissionDate.textContent = formattedHiddendate;

document.querySelector("#results").innerHTML = `
    <p>${formInfo.get("email")}</p>
`
