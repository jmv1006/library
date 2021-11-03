let titleInput;
let authorInput;
let pageInput;
let newBook;
let dataType;
const bookDisplay = document.getElementById('bookDisplayArea');
let myLibrary = [];
let index = -1;
let boxIndex = 0;

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

//this assigns user inputs to the newBook variable & pushes it to myLibrary
function assignInputsToBook() {
    newBook = new Book(titleInput, authorInput, pageInput);
    myLibrary.push(newBook);
    clear();
    displayBookOnPage();
};

//Actually loops through array and calls function that creates card
function displayBookOnPage(title, author, pages) {
    index++;
    boxIndex++;
    //creates a card for each book
    for(let i=0; i < myLibrary.length; i++) {
        if(i < myLibrary.length && myLibrary.length - i == 1)
        createCard();
        continue;
    };
};

//clear stuff
function clear() {
    document.getElementById('titleInput').value = '';
    document.getElementById('authorInput').value = '';
    document.getElementById('pageInput').value = '';
};

//To display different books, I will classify them by their array numbers.
//for example, I will use myLibrary[0] to display the first book and so on.
//I will create a div every time a book is added, similar to the grid project!

function createCard() {
    createBookCard = document.createElement('div');
    createButton = document.createElement('button');
    //bookDisplay.appendChild(createBookCard).setAttribute("data-main", index);
    bookDisplay.appendChild(createBookCard).id = boxIndex;
    bookDisplay.appendChild(createBookCard).classList.add('bookCards');
    bookDisplay.appendChild(createBookCard).innerHTML = `${newBook.title} by ${newBook.author}, ${newBook.pages} pages long.`;
    bookDisplay.appendChild(createBookCard).appendChild(createButton).classList.add('deleteButton');
    bookDisplay.appendChild(createBookCard).appendChild(createButton).id = index;
    bookDisplay.appendChild(createBookCard).appendChild(createButton).innerHTML = 'X';
    //
    deleteCards();
};



function deleteCards() {
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
                if(button.id == 0) {
                    //document.getElementById(1).remove();
                };
            });
        });
};





//Need to find a way to uninquely identify each card...
//going to need to use a for loop & continue to skip over already created array elements...