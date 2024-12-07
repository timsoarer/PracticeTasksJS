// Исходный массив с товарами
const products = ["Мышка", "Клавиатура", "Наушники"];

const new_products = ["Монитор", "Принтер", "Флешка"];

for (product of new_products) {
    products.push(product);
}

const productListEl = document.querySelector(".products");

for (product of products) {
    const productEl = document.createElement("li");
    productEl.textContent = product;
    productListEl.append(productEl);
}