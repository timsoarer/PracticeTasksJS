const cartId = document.querySelector("#cart")

function addToCart(productName) {
    let productElement = document.createElement("li")
    productElement.textContent = productName
    cartId.append(productElement)
}