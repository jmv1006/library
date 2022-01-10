let titleInput;
let authorInput;
let pageInput;
let checkStatus;
let newBook;
const bookDisplay = document.getElementById('bookDisplayArea');


//sets up myLibrary array
let myLibrary = [];
//a counter that allows me to assign an id to each card
let index = -1;

//class
class Book {
    constructor(title, author, pages, checkStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.checkStatus = checkStatus;
    }
};

//Sample books
const newbook1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 152, 'Read');
myLibrary.push(newbook1);
const newbook2 = new Book('Moby Dick', 'Herman Melville', 789, 'Not Read');
myLibrary.push(newbook2);
displayBookOnPage();
displayBookOnPage();


//transfers user input from DOM
function saveInputs() {
    titleInput = document.getElementById('titleInput').value;
    authorInput = document.getElementById('authorInput').value;
    pageInput = document.getElementById('pageInput').value;

    if (document.getElementById('readStatus').checked) {
        checkStatus = 'Read';
    } else {
        checkStatus = 'Not Read';
    };


    if(titleInput == '' || authorInput == '' || pageInput == '' ) {
        alert('Missing Input!');
    } else {
        addBookToLibrary();
    };
};

//this assigns user inputs to the newBook variable & pushes it to myLibrary
function addBookToLibrary() {
    newBook = new Book(titleInput, authorInput, pageInput, checkStatus);
    myLibrary.push(newBook);
    clear();
    displayBookOnPage();
}

//Actually loops through array and calls function that creates card
function displayBookOnPage() {
    //creates a card for each book
    for(let i=0; i < myLibrary.length; i++) {
        if(i < myLibrary.length && myLibrary.length - i == 1) {
        createCard();
        };
    };
};

//function that creates card for books
function createCard() {
    index++;
    createBookCard = document.createElement('div');
    createButton = document.createElement('button');
    bookDisplay.appendChild(createBookCard).classList.add('bookCards');
    bookDisplay.appendChild(createBookCard).innerHTML = `${myLibrary[index].title} by ${myLibrary[index].author}, ${myLibrary[index].pages} pages long, ${myLibrary[index].checkStatus}.`;
    bookDisplay.appendChild(createBookCard).appendChild(createButton).classList.add('deleteButton');
    bookDisplay.appendChild(createBookCard).appendChild(createButton).id = index;
    bookDisplay.appendChild(createBookCard).appendChild(createButton).innerHTML = 'X';
    
    function getClasses() {
        document.getElementById(index).addEventListener('click', function() {
            const cardPosition = this.id;
            myLibrary.splice(cardPosition, 1);
            index = -1;
            bookDisplay.innerHTML = '';
            myLibrary.forEach(function() {
                createCard();
            });
        });
    };
    getClasses();
};


//clear stuff
function clear() {
    document.getElementById('titleInput').value = '';
    document.getElementById('authorInput').value = '';
    document.getElementById('pageInput').value = '';
};

