const submitButton = document.querySelector(".submit-button");
const formEl = document.querySelector(".survey-form");
const resultsEl = document.querySelector(".survey-results");
const nameEl = document.querySelector(".name");
const emailEl = document.querySelector(".email");
const ratingEl = document.querySelector(".rating");
const additionalCommentsEl = document.querySelector(".additional-comments");

const genderButtons = document.querySelectorAll(".gender");
const interestButtons = document.querySelectorAll(".interests");

function listCheckedBoxes(boxList) {
    let output = "";
    boxList.forEach((element) => {
        if (element.checked)
        {
            output += element.value + ", ";
        }
    });
    return output.substring(0, output.length - 2);
}

formEl.addEventListener("submit", function (e) {
    e.preventDefault();

    resultsEl.innerHTML = "";

    let surveyResultEl = document.createElement("h2");
    surveyResultEl.textContent = "Результаты опроса:";
    resultsEl.append(surveyResultEl);

    surveyResultEl = document.createElement("p");
    surveyResultEl.textContent = "Имя пользователя: " + nameEl.value;
    resultsEl.append(surveyResultEl);

    surveyResultEl = document.createElement("p");
    surveyResultEl.textContent = "Email: " + emailEl.value;
    resultsEl.append(surveyResultEl);

    surveyResultEl = document.createElement("p");
    surveyResultEl.textContent = "Пол: " + listCheckedBoxes(genderButtons);
    resultsEl.append(surveyResultEl);

    surveyResultEl = document.createElement("p");
    surveyResultEl.textContent = "Оценка сервиса: " + ratingEl.value;
    resultsEl.append(surveyResultEl);

    surveyResultEl = document.createElement("p");
    surveyResultEl.textContent = "Интересы пользователя: " + listCheckedBoxes(interestButtons);
    resultsEl.append(surveyResultEl);

    surveyResultEl = document.createElement("p");
    surveyResultEl.textContent = "Дополнительные комментарии: " + additionalCommentsEl.value;
    resultsEl.append(surveyResultEl);
});