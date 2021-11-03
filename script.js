let titleInput;
let authorInput;
let pageInput;
let newBook;
const bookDisplay = document.getElementById('bookDisplayArea');
let bookCards = document.getElementById('bookCards');
let myLibrary = [];
let index = -1;

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

//swqsqaswq
function displayBookOnPage(title, author, pages) {
    createCard();
    index++;
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

//clear stuff
function clear() {
    document.getElementById('titleInput').value = '';
    document.getElementById('authorInput').value = '';
    document.getElementById('pageInput').value = '';
};

function clearPage() {
    const container = document.getElementById('bookDisplayArea');
    container.innerHTML = '';
    console.log('hi');
}

//To display different books, I will classify them by their array numbers.
//for example, I will use myLibrary[0] to display the first book and so on.
//I will create a div every time a book is added, similar to the grid project!

function createCard() {
    createBookCard = document.createElement('div');
    createButton = document.createElement('button');
    bookDisplay.appendChild(createBookCard).setAttribute("data-main", index);
    bookDisplay.appendChild(createBookCard).classList.add('bookCards');
    bookDisplay.appendChild(createBookCard).innerHTML = `${newBook.title} by ${newBook.author}, ${newBook.pages} pages long.`;
    bookDisplay.appendChild(createBookCard).appendChild(createButton).id = 'deleteButton';
    bookDisplay.appendChild(createBookCard).appendChild(createButton).innerHTML = 'X';
    deleteCards();
}


function deleteCards() {
    document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', function() {
                
            });
        });
};

//Need to find a way to uninquely identify each card...