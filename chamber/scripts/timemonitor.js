const timeMonitor = document.querySelector("#timeMonitor");

// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 86400000;

let visitTime = localStorage.getItem('lastVisit');
// console.log(visitTime);

if (visitTime == null) {
    timeMonitor.textContent = "Wellcome! Let us know if you have any questions.";
    localStorage.setItem('lastVisit', Date.now());
} else {
    let difference = (Date.now() - visitTime) / msToDays;
    // console.log(difference);

    // difference = 1;

    if (difference < 1) {
        timeMonitor.innerHTML = `Back so soon! Awesome!`
    } else {

        let endText;

        difference == 1 ? endText = "day ago" : endText = "days ago";

        timeMonitor.innerHTML = `You last visited ${Math.floor(difference)} ${endText}`;
    }
    
}
