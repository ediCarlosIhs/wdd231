const getString = window.location.search;
// console.log(getString);

const formInfo = new URLSearchParams(getString);
// console.log(formInfo);

// console.log(formInfo.get("first"));
// console.log(formInfo.get("last"));
// console.log(formInfo.get("phone"));
// console.log(formInfo.get("organization"));
// console.log(formInfo.get("hiddendate"));

const hiddendate = new Date(formInfo.get('hiddendate'));

console.log(hiddendate);

const formattedHiddendate = hiddendate.toLocaleString('pg-Br', {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: '2-digit',
    minute: "2-digit",
    second: "2-digit",
    weekday: "long"
});

document.querySelector("#results").innerHTML = `
    <p>Application submission from ${formInfo.get("first")} ${formInfo.get("last")}</p>
    <p>Business name: ${formInfo.get("organization")}</p>
    <p>Phone: ${formInfo.get("phone")}</p>
    <p>Email: ${formInfo.get("email")}</p>
    <p>${formattedHiddendate}</p>
`