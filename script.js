let titleInput;
let authorInput;
let pageInput;
let newBook;
const bookDisplay = document.getElementById('bookDisplayArea');
let myLibrary = [];

function saveInputs() {
    titleInput = document.getElementById('titleInput').value;
    authorInput = document.getElementById('authorInput').value;
    pageInput = document.getElementById('pageInput').value;
    assignInputsToBook();
};

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
/*
let newBook = new Book('The Great Gatsby', 'J Fitzgerald', 532);
newBook.info();
*/

function assignInputsToBook() {
    newBook = new Book(titleInput, authorInput, pageInput);
    addBookToLibrary();
};


//this sends the new book to the myLibrary array
function addBookToLibrary() {
    myLibrary.push(newBook);
    displayBookInLibrary();
    clear();
};

function clear() {
    document.getElementById('titleInput').value = '';
    document.getElementById('authorInput').value = '';
    document.getElementById('pageInput').value = '';
};

//To display different books, I will classify them by their array numbers.
//for example, I will use myLibrary[0] to display the first book and so on.
//I will create a div every time a book is added, similar to the grid project!

function displayBookInLibrary() {
    const createBookCard = document.createElement('div');
    bookDisplay.appendChild(createBookCard).className = 'bookCards';
}