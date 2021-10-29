let dog = 'chi';
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const form = document.querySelector('form').addEventListener('submit', function() {
    dog = 'i pressed it';
});

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = Boolean
    this.info = function() {
        switch(read) {
            case(true):
                console.log(`${title} by ${author}, ${pages} pages long, read.`);
                break;
            case(false):
            console.log(`${title} by ${author}, ${pages} pages long, not read.`);
            break;
    }};  
};

const book1 = new Book('Algorithms', 'Jonathan', 290, false);
book1.info();


function addBookToLibrary() {

}

