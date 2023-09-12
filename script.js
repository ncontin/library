const myLibrary = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        pages: 296,
        read: false,
    },
    {
        title: "1984",
        author: "George Orwell",
        pages: 400,
        read: true,
    },
];
const bookTitleInput = document.getElementById("book-title");
const bookAuthorInput = document.getElementById("book-author");
const bookPagesInput = document.getElementById("book-pages");
const newBookBtn = document.getElementById("new-book");
const library = document.querySelector(".library");
const favDialog = document.getElementById("favDialog");
const confirmBtn = favDialog.querySelector("#confirmBtn");

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    const title = bookTitleInput?.value;
    const author = bookAuthorInput?.value;
    const pages = bookPagesInput.value;
    const newBook = new Book(title, author, pages);
    myLibrary.unshift(newBook);
    console.log(myLibrary);
}

function displayBooks() {
    library.innerHTML = "";
    myLibrary.forEach((book, index) => {
        let card = document.createElement("div");
        card.className = "book-card";
        let title = document.createElement("h2");
        title.textContent = book.title;
        card.appendChild(title);
        let author = document.createElement("p");
        author.textContent = "By " + book.author;
        card.appendChild(author);
        let pages = document.createElement("div");
        pages.textContent = book.pages + " Pages";
        card.appendChild(pages);
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            displayBooks();
        });
        card.appendChild(deleteBtn);

        library?.appendChild(card);
    });
}

newBookBtn?.addEventListener("click", () => {
    favDialog.showModal();
    bookTitleInput.value = "";
    bookAuthorInput.value = "";
    bookPagesInput.value = "";
});

confirmBtn?.addEventListener("click", () => {
    event.preventDefault();
    addBookToLibrary();
    favDialog.close();
    displayBooks();
});

displayBooks();
