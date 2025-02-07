// Мне влом копипастить HTML код, поэтому изображения добавляются таким вот образом

const imageUrlList = [
    "planet_arid.jpg",
    "planet_atoll.jpg",
    "planet_forest.jpg",
    "planet_gasfrozen.jpeg",
    "planet_jungle.jpg",
    "planet_mediterranian.jpg",
    "planet_snow.jpg",
    "planet_terran.jpg"
];

const imageList = document.getElementById("image-list");

imageUrlList.forEach((image) => {
    let imageElement = document.createElement("img");
    imageElement.src = image;
    imageElement.classList.add("gallery-image");
    imageList.append(imageElement);
});