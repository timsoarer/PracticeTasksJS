const addButton = document.getElementById("add-button");
const removeButton = document.getElementById("remove-button");
const dynamicList = document.getElementById("dynamic-list");

addButton.onclick = function () {
    let listElement = document.createElement("li");
    listElement.textContent = "Новый элемент списка";
    dynamicList.append(listElement);
};

removeButton.onclick = function () {
    let listElement = dynamicList.lastElementChild;
    if (listElement) listElement.remove();
}