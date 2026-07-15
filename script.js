const openModalButton = document.getElementById("add-new-book");
const closeModalButton = document.getElementById("cancel-button");
const submitButton = document.getElementById("submit-button")
const bookAddingModal = document.querySelector("dialog");
const bookTitleDisplay = document.getElementsByClassName("book-title-display");
const bookAuthorDisplay = document.getElementsByClassName("book-autor-display");
const bookContainer = document.getElementById("library");
const bookInputForm = document.querySelector("form");
const myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
    // this.read = read
};

function addBookToLibrary(title, author) {
    let id = crypto.randomUUID();
    let newBook = new Book(title, author);
    myLibrary.push(newBook);
}

addBookToLibrary("harry potter", "j.k. rowling", "read");
addBookToLibrary("twilight", "stephenie meyer", "read");
addBookToLibrary("casual vacancy", "j.k. rowling", "read");

openModalButton.addEventListener("click", () => bookAddingModal.showModal());

function showBooks() {
    let html = "";
    for (let i = 0; i < myLibrary.length; i++) {
        html += `
            <div class="book">
                <p>${myLibrary[i].title}</p>
                <p>${myLibrary[i].author}</p>
            </div>`;
    }
    bookContainer.innerHTML = html;
}

showBooks();

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const bookTitleFinal = document.getElementById("book-title").value
    const bookAuthorFinal = document.getElementById("book-author").value
    bookAddingModal.close();
    bookInputForm.reset();
    addBookToLibrary(bookTitleFinal, bookAuthorFinal);
    showBooks();
});

closeModalButton.addEventListener("click", () => {
    bookInputForm.reset;
    bookAddingModal.close();
});