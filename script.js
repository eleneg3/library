const newBookButton = document.getElementById("add-new-book");
const myLibrary = [];

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read
};

function addBookToLibrary(title, author, read) {
    let id = crypto.randomUUID();
    let newBook = new Book();
    myLibrary.push(newBook);
}

addBookToLibrary("harry potter", "j.k. rowling", "read");
console.log(myLibrary)

newBookButton.addEventListener("click")