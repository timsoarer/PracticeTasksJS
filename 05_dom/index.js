function addToCart(productName) {
    const cartId = document.querySelector("#cart")
    let productElement = document.createElement("li")
    productElement.textContent = productName
    cartId.append(productElement)
}