let titleInput;
let authorInput;
let pageInput;
let newBook;
const bookDisplay = document.getElementById('bookDisplayArea');
//sets up myLibrary array
let myLibrary = [];
//a counter that allows me to assign an id to each card
let index = -1;

//Object constructor
function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
};

const newbook1 = new Book('The Great Min', 'Dew Dew', 26);
myLibrary.push(newbook1);
const newbook2 = new Book('Moby Dick', 'Herman Melville', 789);
myLibrary.push(newbook2);
displayBookOnPage();
displayBookOnPage();

//transfers user input from DOM
function saveInputs() {
    titleInput = document.getElementById('titleInput').value;
    authorInput = document.getElementById('authorInput').value;
    pageInput = document.getElementById('pageInput').value;
    addBookToLibrary();
};

//this assigns user inputs to the newBook variable & pushes it to myLibrary
function addBookToLibrary() {
    newBook = new Book(titleInput, authorInput, pageInput);
    myLibrary.push(newBook);
    clear();
    displayBookOnPage();
};

//Actually loops through array and calls function that creates card
function displayBookOnPage() {
    //creates a card for each book
    for(let i=0; i < myLibrary.length; i++) {
        if(i < myLibrary.length && myLibrary.length - i == 1)
        createCard();
        continue;
    };
    deleteCard();
};

//function that creates card for books
function createCard() {
    index++;
    createBookCard = document.createElement('div');
    createButton = document.createElement('button');
    //bookDisplay.appendChild(createBookCard).setAttribute("data-main", index);
    bookDisplay.appendChild(createBookCard).classList.add('bookCards');
    bookDisplay.appendChild(createBookCard).innerHTML = `${myLibrary[index].title} by ${myLibrary[index].author}, ${myLibrary[index].pages} pages long.`;
    bookDisplay.appendChild(createBookCard).appendChild(createButton).classList.add('deleteButton');
    bookDisplay.appendChild(createBookCard).appendChild(createButton).id = index;
    bookDisplay.appendChild(createBookCard).appendChild(createButton).innerHTML = 'X';
};

function deleteCard() {
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            if(button.id == 0) {
                console.log('worked');
                myLibrary.shift()
                index = -1;
                afterDelete();
            };
        });
    });
};

//clear stuff
function clear() {
    document.getElementById('titleInput').value = '';
    document.getElementById('authorInput').value = '';
    document.getElementById('pageInput').value = '';
};


function clearPage() {
    bookDisplay.innerHTML = '';
};

function afterDelete() {
    displayLibros();
};

function displayLibros() {
    myLibrary.forEach(function() {
        createCard();
    });
};