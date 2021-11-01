let titleInput;
let authorInput;
let pageInput;
let newBook;
let createBookCard;
let card;
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

//These are just adding sample books to myLibrary array
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 152);
const book2 = new Book('Moby Dick', 'Herman Melville', 427);
const book3 = new Book('The Art of War', 'Sun Tzu', 288);
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book2);

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
    createBookCard = document.createElement('div');
    bookInfo = document.createElement('div');
    bookDisplay.appendChild(createBookCard).className = 'bookCards';
}

//function that loops over array and displays books on page
function displayBookOnPage() {

}