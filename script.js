const openModalButton = document.getElementById("add-new-book");
const closeModalButton = document.getElementById("cancel-button");
const submitButton = document.getElementById("submit-button")
const myModal = document.querySelector("dialog");
const bookTitleDisplay = document.getElementsByClassName("book-title-display");
const bookAuthorDisplay = document.getElementsByClassName("book-autor-display");
const bookContainer = document.getElementById("library")
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
console.log(myLibrary);

openModalButton.addEventListener("click", () => myModal.showModal());

let html = '';
for (let i = 0; i < myLibrary.length; i++) {
  html += `
        <div class="book">
            <p>${myLibrary[i].title}</p>
            <p>${myLibrary[i].author}</p>
        </div>`;
}
bookContainer.innerHTML = html;

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const bookTitleFinal = document.getElementById("book-title").value
    const bookAuthorFinal = document.getElementById("book-author").value
    addBookToLibrary(bookTitleFinal, bookAuthorFinal);
    html = "";
    for (let i = 0; i < myLibrary.length; i++) {
        html += `
                <div class="book">
                    <p>${myLibrary[i].title}</p>
                    <p>${myLibrary[i].author}</p>
                </div>`;
    }
    bookContainer.innerHTML = html;
});

