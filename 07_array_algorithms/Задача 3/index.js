const productListElement = document.querySelector(".product-list");
const addButton = document.querySelector(".add-button");

let productList = ["Арбуз", "Книга", "Кофе", "Макароны", "Молоко", "Сахар", "Яблоки"];

function sortArray(arr, comparator) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let k = 0; k < len - (i + 1); k++) {
            if (!comparator(arr[k], arr[k+1])) {
                let tempValue = arr[k];
                arr[k] = arr[k+1];
                arr[k+1] = tempValue; 
            }
        }
    }
}

function reprintList() {
    productListElement.innerHTML = "";
    for (product of productList) {
        const productElement = document.createElement("li");
        productElement.textContent = product;
        productListElement.append(productElement);
    }
}

const isLesserThan = (a, b) => a < b;

sortArray(productList, isLesserThan);
reprintList();

addButton.onclick = function () {
    let productName = prompt("Введите название товара");
    if (productName === "" || productName === null) {
        alert("Название товара не введено!");
    } else {
        productList.push(productName);
        sortArray(productList, isLesserThan);
        reprintList();
    }
}