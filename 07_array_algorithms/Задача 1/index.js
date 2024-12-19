const bookListElement = document.querySelector(".book-list");
const addButton = document.querySelector(".add-book-button");
const findButton = document.querySelector(".find-book-button");
let highlightedBook = null;

let bookList = ["Мастер и Маргарита", "Гарри Поттер", "За пропастью во ржи", "Властелин колец", "Дюна"];
let bookElementList = [];

function addBook(bookName) {
    const bookElement = document.createElement("li");
    bookElement.textContent = bookName;
    bookListElement.append(bookElement);
    bookElementList.push(bookElement);
}

function findBook(elementList, bookName) {
    for (bookElement of elementList) {
        if (bookElement.textContent === bookName) {
            if (highlightedBook != null) {
                highlightedBook.classList.toggle("highlight");
            }
            
            highlightedBook = bookElement;
            highlightedBook.classList.toggle("highlight");
            
            return true;
        }
    }
    return false;
}

for (book of bookList) {
    addBook(book);
}

addButton.onclick = function () {
    let bookTitle = prompt("Введите название книги");
    if (bookTitle === "" || bookTitle === null) {
        alert("Название книги не введено!");
    } else {
        addBook(bookTitle);
    }
}

findButton.onclick = function () {
    let bookTitle = prompt("Введите название книги");
    if(bookTitle != null && !findBook(bookElementList, bookTitle)) {
        alert("Книга не найдена!");
    }
}