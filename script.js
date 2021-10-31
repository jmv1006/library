let title;
let author;

function storeValues() {
    let titleInput = document.getElementById('titleInput').value;
    let authorInput = document.getElementById('authorInput').value;
    title = titleInput;
    author = authorInput;
}



let myLibrary = [];

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.info = function () {
        console.log(`${title} by ${author} is ${pages} pages long.`)
    }
};

//link title, author, and page number to user input. Ex,
// newBook = new Book('userTitleInput', 'userAuthorInput', 'userPageNumInput');
let newBook = new Book('The Great Gatsby', 'J Fitzgerald', 532);
newBook.info();


//this sends the new book to the myLibrary array
function addBookToLibrary() {
    myLibrary.push(newBook);
}

addBookToLibrary();

