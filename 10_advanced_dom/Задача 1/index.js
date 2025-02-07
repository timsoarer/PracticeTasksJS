const imageElementList = document.querySelectorAll(".gallery-image");
const largeImage = document.getElementById("large-image");

imageElementList.forEach((image) => {
    image.onclick = function () {
        largeImage.src = image.src;
    }
});