let title;
let author;

function storeValues() {
    let titleInput = document.getElementById('titleInput').value;
    let authorInput = document.getElementById('authorInput').value;
    title = titleInput;
    author = authorInput;

    return titleInput;
    return authorInput;
}

function clear() {
    
}

let myLibrary = [];

function Book(title, author) {
    this.title = title
    this.author = author
};

const book1 = new Book();


function addBookToLibrary() {

}

