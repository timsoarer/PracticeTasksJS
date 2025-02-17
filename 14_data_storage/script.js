const titleEl = document.querySelector("#title");
const genreEl = document.querySelector("#genre");
const releaseYearEl = document.querySelector("#releaseYear");
const isWatchedEl = document.querySelector("#isWatched");
const submitButtonEL = document.querySelector("#submit-button");
const cancelButtonEl = document.querySelector("#cancel-button");

const filmFormEl = document.querySelector("#film-form");
const sortButtonEl = document.querySelector("#sort-button");
const selectEl = document.querySelector("#sort-select");
const filmTableBodyEl = document.querySelector("#film-tbody");

let inEditMode = false;
let filmToEdit = 0;

function handleFormSubmit(e) {
    e.preventDefault();

    const title =  titleEl.value;
    const genre = genreEl.value;
    const releaseYear = Number(releaseYearEl.value);
    const isWatched = isWatchedEl.checked;

    const film = {
        title,
        genre,
        releaseYear,
        isWatched
    };

    // console.log("Read data from form!");
    if (inEditMode) {
        editFilmInLocalStorage(filmToEdit, film);

        inEditMode = false;
        submitButtonEL.textContent = "Добавить";

        titleEl.value = "";
        genreEl.value = "";
        releaseYearEl.value = "";
        isWatchedEl.checked = false;

        cancelButtonEl.classList.add("hidden");
    } else {
        addFilmToLocalStorage(film);
    }
}

function addFilmToLocalStorage(film) {
    const films = JSON.parse(localStorage.getItem("films")) || [];
    films.push(film);
    localStorage.setItem('films', JSON.stringify(films));

    // console.log("Added film to storage!");

    renderTable();
}

function deleteFilmFromLocalStorage(index) {
    const films = JSON.parse(localStorage.getItem("films")) || [];
    films.splice(index, 1);
    localStorage.setItem('films', JSON.stringify(films));

    renderTable();
}

function editFilmInLocalStorage(index, newFilm) {
    const films = JSON.parse(localStorage.getItem("films")) || [];
    films[index] = newFilm;
    localStorage.setItem('films', JSON.stringify(films));

    renderTable();
}

function sortLocalStorage(predicate) {
    const films = JSON.parse(localStorage.getItem("films")) || [];
    films.sort(predicate);
    localStorage.setItem('films', JSON.stringify(films));

    renderTable();
}

function switchToEditMode(index) {
    const films = JSON.parse(localStorage.getItem("films")) || [];

    titleEl.value = films[index].title;
    genreEl.value = films[index].genre;
    releaseYearEl.value = films[index].releaseYear;
    isWatchedEl.checked = films[index].isWatched;

    filmToEdit = index;

    if (!inEditMode) {
        inEditMode = true;
        submitButtonEL.textContent = "Обновить";
        cancelButtonEl.classList.remove("hidden");

        cancelButtonEl.onclick = function () {
            inEditMode = false;
            submitButtonEL.textContent = "Добавить";

            titleEl.value = "";
            genreEl.value = "";
            releaseYearEl.value = "";
            isWatchedEl.checked = false;

            cancelButtonEl.classList.add("hidden");
        }

        filmFormEl.appendChild(cancelButtonEl);
    }
}

function renderTable() {
    const films = JSON.parse(localStorage.getItem("films")) || [];

    filmTableBodyEl.innerHTML = "";

    films.forEach((film) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${film.title}</td>
            <td>${film.genre}</td>
            <td>${film.releaseYear}</td>
            <td>${film.isWatched ? "Да" : "Нет"}</td>
            <td><button class="edit-button">Редактировать</button><button class="delete-button">Удалить</button></td>
        `;

        filmTableBodyEl.appendChild(row);
    });

    const editButtonEls = document.querySelectorAll(".edit-button");
    const deleteButtonEls = document.querySelectorAll(".delete-button");

    for (let i = 0; i < editButtonEls.length; i++) {
        deleteButtonEls[i].onclick = function () {
            deleteFilmFromLocalStorage(i);
        };

        editButtonEls[i].onclick = function () {
            switchToEditMode(i);
        };
    }

    // console.log("Rendered table!");
}

filmFormEl.addEventListener("submit", handleFormSubmit);

sortButtonEl.onclick = function () {
    switch (selectEl.value) {
        case "name":
            sortLocalStorage((a, b) => a.title.localeCompare(b.title));
            break;
        case "genre":
            sortLocalStorage((a, b) => a.genre.localeCompare(b.genre));
            break;
        case "year":
            sortLocalStorage((a, b) => a.releaseYear - b.releaseYear);
            break;
    }
}

renderTable();