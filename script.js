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
const bookReadInput = document.getElementById("book-read");
const newBookBtn = document.getElementById("new-book");
const library = document.querySelector(".library");
const favDialog = document.getElementById("favDialog");
const cancelBtn = document.getElementById("cancelBtn");
const confirmBtn = favDialog.querySelector("#confirmBtn");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const title = bookTitleInput?.value;
    const author = bookAuthorInput?.value;
    const pages = bookPagesInput.value;
    const read = bookReadInput.checked;
    const newBook = new Book(title, author, pages, read);
    myLibrary.unshift(newBook);
    console.log(myLibrary);
}

function createCard(book) {
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

    let read = document.createElement("button");
    read.textContent = book.read ? "Read" : "Not Read";
    read.addEventListener("click", () => {
        book.read = !book.read;
        read.textContent = book.read ? "Read" : "Not Read";
    });

    card.appendChild(read);

    return card;
}

function createDeleteButton(index) {
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        myLibrary.splice(index, 1);
        displayBooks();
    });

    return deleteBtn;
}

function displayBooks() {
    library.innerHTML = "";
    myLibrary.forEach((book, index) => {
        let card = createCard(book);
        let deleteBtn = createDeleteButton(index);

        card.appendChild(deleteBtn);
        library?.appendChild(card);
    });
}

newBookBtn?.addEventListener("click", () => {
    favDialog.showModal();
    bookTitleInput.value = "";
    bookAuthorInput.value = "";
    bookPagesInput.value = "";
    bookReadInput.checked = false;
});

cancelBtn?.addEventListener("click", () => {
    favDialog?.close();
});

confirmBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.form.checkValidity()) {
        addBookToLibrary();
        displayBooks();
        favDialog.close();
    } else {
        alert("Please fill out all required fields.");
    }
});
displayBooks();
