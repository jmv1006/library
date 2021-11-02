let titleInput;
let authorInput;
let pageInput;
let newBook;
const bookDisplay = document.getElementById('bookDisplayArea');
let bookCards = document.getElementById('bookCards');
let myLibrary = [];

//transfers user input from DOM
function saveInputs() {
    titleInput = document.getElementById('titleInput').value;
    authorInput = document.getElementById('authorInput').value;
    pageInput = document.getElementById('pageInput').value;
    assignInputsToBook();
};

//Object constructor
function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
};

//These are just adding sample books to myLibrary array
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 152);
const book2 = new Book('Moby Dick', 'Herman Melville', 427);
const book3 = new Book('The Art of War', 'Sun Tzu', 288);
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);

//this creates the cards for each array item
function displayBookOnPage(title, author, pages) {
    if (myLibrary.length > 3) {
        createCards();
    } else {
        myLibrary.forEach(function(item, index, array) {
            createCards();
          })
    }
};

//this assigns user inputs to the newBook variable
function assignInputsToBook() {
    newBook = new Book(titleInput, authorInput, pageInput);
    addBookToLibrary();
};

//this sends the new book to the myLibrary array 
function addBookToLibrary() {
    myLibrary.push(newBook);
    displayBookOnPage();
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
function createCards() {
    createBookCard = document.createElement('div');
    bookInfo = document.createElement('div');
    bookDisplay.appendChild(createBookCard).id = 'bookCards';
    bookDisplay.appendChild(createBookCard).innerHTML = `${newBook.title}, ${newBook.author}, ${newBook.pages}`;
}

//displayBookOnPage();