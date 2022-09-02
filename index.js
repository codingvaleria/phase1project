function newlinesToBreaks(str) {
    return str.replaceAll("\n", "<br />");
}

function fetchRecommendation(id) {
    fetch(`http://localhost:3000/recommendations/${id}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then((data) => {
            const title = document.getElementById("title");
            title.innerHTML = data.location;
            const image = document.getElementById("location-image");
            image.style.backgroundImage = `url(${data.image})`;

            const description = document.getElementById("description-container");
            description.innerHTML = newlinesToBreaks(data.description);

            const citizenShips = ["citizen", "resident", "non-resident"];
            const category = ["child", "student", "adult"];
            for (let i = 0; i < citizenShips.length; i++) {
                for (let j = 0; j < category.length; j++) {
                    const id = `${citizenShips[i]}-${category[j]}-charge`;
                    document.getElementById(id).innerHTML = data.entryCharges[id];
                }
            }

            const workingHours = document.getElementById("working-hours");
            workingHours.innerHTML = newlinesToBreaks(data.workingHours);

            const policies = document.getElementById("policy-list");
            const listItems = data.policies
                .split("\n")
                .map((policy) => {
                    return `<li> ${policy} </li>`
                })
            policies.innerHTML = listItems.join("");
        })

}

document.addEventListener("DOMContentLoaded", () => {
    fetchRecommendation(1);
    fetch("http://localhost:3000/recommendations")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            const locationsList = document.getElementById("locations");
            locationsList.innerHTML = data
                .map(function (recommendation) {
                    return `<li class="location">
                            <a onclick="fetchRecommendation(${recommendation.id})" href="#"> ${recommendation.location} </a>
                        </li>`;
                })
                .join("");
        })
})



