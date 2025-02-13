const giftArr = [
    {
      title: "Скидка 20% на первую покупку в нашем магазине!",
      icon: "img/discount.svg"
    },
    {
      title: "Скидка 10% на всё!",
      icon: "img/discount_2.svg"
    },
    {
      title: "Подарок при первой покупке в нашем магазине!",
      icon: "img/gift.svg"
    },
    {
      title: "Бесплатная доставка для вас!",
      icon: "img/delivery.svg"
    },
    {
      title: "Сегодня день больших скидок!",
      icon: "img/discount_3.svg"
    }
];

const bodyEl = document.getElementsByTagName("body")[0];

function randomFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function deletePopupCard() {
    let blurEl = document.querySelector(".card-bg-blur");
    let cardEl = document.querySelector(".card");
    blurEl.remove();
    cardEl.remove();
}

function createPopupCard(randomArray, num) {
    let blurEl = document.createElement("div");
    blurEl.classList.add("card-bg-blur");
    bodyEl.append(blurEl);
    
    let cardEl = document.createElement("div");
    cardEl.classList.add("card");
    
    let imageEl = document.createElement("img");
    imageEl.classList.add("card-image");
    imageEl.src = randomArray[num].icon;
    cardEl.append(imageEl);

    let contentEl = document.createElement("div");
    cardEl.append(contentEl);
    
    let textEl = document.createElement("p");
    textEl.textContent = randomArray[num].title;
    contentEl.append(textEl);

    let buttonEl = document.createElement("button")
    buttonEl.classList.add("accept-button");
    buttonEl.onclick = deletePopupCard;
    buttonEl.textContent = "Отлично!";
    contentEl.append(buttonEl);

    bodyEl.append(cardEl);
}

setTimeout(() => {
    createPopupCard(giftArr, randomFromInterval(0, giftArr.length - 1));
}, 3000); 