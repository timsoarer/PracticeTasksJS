const inputEl = document.querySelector(".input-text");
const cardEl = document.getElementById("card");
const selectEl = document.querySelector(".color-select");

inputEl.addEventListener("input", function (e) {
    cardEl.textContent = inputEl.value;
});

inputEl.addEventListener("focus", function (e) {
    inputEl.classList.add("focused");
});

inputEl.addEventListener("blur", function (e) {
    inputEl.classList.remove("focused");
});

selectEl.addEventListener("change", function (e) {
    cardEl.classList.remove("red");
    cardEl.classList.remove("green");
    cardEl.classList.remove("blue");
    switch (selectEl.value) {
        case "red":
            cardEl.classList.add("red");
            break;
        case "green":
            cardEl.classList.add("green");
            break;
        case "blue":
            cardEl.classList.add("blue");
            break;
    }
});