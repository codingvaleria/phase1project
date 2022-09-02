const submit = document.getElementById("submit")

submit.addEventListener("click", function (event) {
    event.preventDefault();
    const location = document.getElementById("location").value;
    const image = document.getElementById("image").value;
    const description = document.getElementById("description").value;
    const policies = document.getElementById("policies").value;
    const workingHours = document.getElementById("working-hours").value;
    const entryCharges = {};
    const citizenShips = ["citizen", "resident", "non-resident"];
    const category = ["child", "student", "adult"];
    for (let i = 0; i < citizenShips.length; i++) {
        for (let j = 0; j < category.length; j++) {
            const id = `${citizenShips[i]}-${category[j]}-charge`;
            entryCharges[id] = document.getElementById(id).value;
        }
    }

})

