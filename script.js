const myLibrary = [];
const bookTitleInput = document.getElementById("book-title");
const bookAuthorInput = document.getElementById("book-author");
const addBookBtn = document.getElementById("add-book");

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function addBookToLibrary() {
    const title = bookTitleInput.value;
    const author = bookAuthorInput.value;
    const newBook = new Book(title, author);
    myLibrary.push(newBook);
}

addBookBtn.addEventListener("click", () => {
    addBookToLibrary();
    console.log(myLibrary);
});
