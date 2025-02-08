const submitButton = document.querySelector(".submit-button");
const formEl = document.querySelector(".delivery-form");
const tableEl = document.querySelector(".table-body");
const errorEl = document.querySelector(".error-text")

const nameEl = document.querySelector(".name");
const weightEl = document.querySelector(".weight");
const distanceEl = document.querySelector(".distance");

formEl.addEventListener("submit", function (e) {
    e.preventDefault();

    if (weightEl.value <= 0 || distanceEl.value <= 0) {
        errorEl.classList.remove("hidden");
    } else {
        errorEl.classList.add("hidden");

        let rowEl = document.createElement("tr");
        
        let cellEl = document.createElement("td");
        cellEl.textContent = nameEl.value;
        rowEl.append(cellEl);

        cellEl = document.createElement("td");
        cellEl.textContent = weightEl.value;
        rowEl.append(cellEl); 

        cellEl = document.createElement("td");
        cellEl.textContent = distanceEl.value;
        rowEl.append(cellEl); 

        cellEl = document.createElement("td");
        cellEl.textContent = ((distanceEl.value * weightEl.value) / 10) + " руб.";
        rowEl.append(cellEl); 

        tableEl.append(rowEl);

        nameEl.value = "";
        weightEl.value = "";
        distanceEl.value = "";
    }
});