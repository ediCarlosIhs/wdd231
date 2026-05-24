const article = document.querySelector("#members");
const path = "./data/members.json";

const gridButton = document.querySelector('#grid');
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
    gridButton.className = "active";
    listButton.className = "";
    article.className = "grid";
});

listButton.addEventListener("click", () => {
    listButton.className = "active";
    gridButton.className = "";
    article.className = "list";
});

async function getMembers() {
    try {
        const response = await fetch(path);
        const data = await response.json();
        // console.table(data.members);
        displayMembers(data.members);
    } catch (error) {
        console.error("Error fetching members", error);
        
    }
}

const displayMembers = (members) => {

    members.forEach((member, index) => {
        
        const companyImage = document.createElement("img");
        companyImage.src = `./images/directory/${member.imagePath}`;
        companyImage.setAttribute("width", "300");
        companyImage.setAttribute("height", "200");
        companyImage.setAttribute("alt", `${member.name} Company Image`);

        if (index === 0) {
            companyImage.setAttribute("fetchpriority", "high");
        }
        else {
            companyImage.setAttribute("loading", "lazy");
        }


        const companyName = document.createElement("h2");
        companyName.textContent = member.name;

        const address = document.createElement("p");
        address.textContent = member.address;

        const phone = document.createElement("p");
        phone.textContent = member.phone;

        const website = document.createElement("a");
        website.setAttribute("href", member.url);
        website.setAttribute("target", "_blank");
        website.textContent = "Website";

        const memberLevel = document.createElement("p");
        switch (member.level) {
            case 1:
                memberLevel.textContent = "Level = Member";
                break;
            case 2:
                memberLevel.textContent = "Level = Silver";
                break;
            case 3:
                memberLevel.textContent = "Level = Gold";
                break;
        }

        const section = document.createElement("section");
        section.appendChild(companyImage);
        section.appendChild(companyName);
        section.appendChild(address);
        section.appendChild(phone);
        section.appendChild(website);
        section.appendChild(memberLevel);

        article.appendChild(section);

    });

}

getMembers();