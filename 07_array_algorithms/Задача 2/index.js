const heightListElement = document.querySelector(".height-list");
const addButton = document.querySelector(".add-height-button");
const findButton = document.querySelector(".filter-button");
let minHeight = 0;

let heightList = [164, 157, 160, 143, 170];

function addHeight(num) {
    if (num >= minHeight) {
        const heightElement = document.createElement("li");
        heightElement.textContent = num;
        heightListElement.append(heightElement);
    }
}

function filterHeight() {
    heightListElement.innerHTML = "";
    for (num of heightList) {
        addHeight(num);
    }
}

for (num of heightList) {
    addHeight(num);
}

addButton.onclick = function () {
    let num = prompt("Введите рост ученика");
    if (num === "" || num === null || parseInt(num) === NaN) {
        alert("Рост не введён!");
    } else {
        heightList.push(num);
        addHeight(parseInt(num));
    }
}

findButton.onclick = function () {
    let num = prompt("Введите минимальный рост");
    if (num === "" || num === null || parseInt(num) === NaN) {
        minHeight = 0;
    } else {
        minHeight = parseInt(num);
    }
    filterHeight();
}