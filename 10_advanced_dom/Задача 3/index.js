const ascendingButton = document.getElementById("ascending-button");
const descendingButton = document.getElementById("descending-button");
const dynamicList = document.getElementById("dynamic-list");
let nums = [100, 500, 250, 750, 300];

function reprintList(listElement, arrayToPrint) {
    listElement.innerHTML = "";
    arrayToPrint.forEach((a) => {
        const newElement = document.createElement("li");
        newElement.textContent = a;
        listElement.append(newElement);
    });
}

reprintList(dynamicList, nums);

ascendingButton.onclick = function () {
    nums.sort((a, b) => a - b);
    reprintList(dynamicList, nums);
};

descendingButton.onclick = function () {
    nums.sort((a, b) => b - a);
    reprintList(dynamicList, nums);
};
