const allNumbersEl = document.querySelector(".all-elements");
const minButton = document.querySelector(".min");
const maxButton = document.querySelector(".max");
const minNumberEl = document.querySelector(".minNumber");
const maxNumberEl = document.querySelector(".maxNumber");

const numbers = [12, 5, 8, 20, 3, 16];

for (num of numbers) {
    allNumbersEl.textContent += num + ", ";
}

maxButton.onclick = function () {
    let maxNum = numbers[0];
    for (num of numbers) {
        if (maxNum < num) {
            maxNum = num;
        }
    }
    maxNumberEl.textContent = maxNum;
}

minButton.onclick = function () {
    let minNum = numbers[0];
    for (num of numbers) {
        if (minNum > num) {
            minNum = num;
        }
    }
    minNumberEl.textContent = minNum;
}