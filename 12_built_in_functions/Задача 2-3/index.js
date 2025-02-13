const promocodeArr = [
    {
      promocode: 'PROM10',
      gift: "Скидка 10%"
    },
    {
      promocode: 'PROM50',
      gift: "Скидка 50%"
    },
    {
      promocode: 'GIFT',
      gift: "Подарок в корзине"
    }
]

function getCookie() {
    return document.cookie.split('; ').reduce((acc, item) => {
      const [name, value] = item.split('=');
      acc[decodeURIComponent(name)] = decodeURIComponent(value);
      return acc;
    }, {})
}

const promoInputEl = document.querySelector(".promocode-input");
const formEl = document.querySelector(".promo-form");
const cardEl = document.querySelector(".card");
const cookie = getCookie()

if (cookie["lastEnteredPromocode"]) {
    promoInputEl.value = cookie["lastEnteredPromocode"]
}

formEl.addEventListener("submit", function (e) {
    e.preventDefault();

    let foundAny = false;
    for (let i = 0; i < promocodeArr.length; i++) {
        if (promocodeArr[i].promocode == promoInputEl.value) {
            document.cookie = "lastEnteredPromocode=" + promocodeArr[i].promocode;
            promoInputEl.classList.add("success");
            
            let textEl = document.querySelector(".success-text");
            if(!textEl) {
                textEl = document.createElement("p");
                textEl.classList.add("success-text");
                cardEl.append(textEl);
            }
            textEl.textContent = "Промокод введён. " + promocodeArr[i].gift;
            
            foundAny = true;
        }
    }

    if (!foundAny) {
        promoInputEl.classList.remove("success");
        let textEl = document.querySelector(".success-text");
        if (textEl) textEl.remove();
    }
});