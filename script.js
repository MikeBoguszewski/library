let myLibrary = [];
const booksContainer = document.querySelector('.books-container');
const addButton = document.querySelector('.add-button');
const body = document.querySelector('body');
const bookForm = document.querySelector('.book-form');
const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author')
const pagesInput = document.querySelector('#pages')
const readInput = document.querySelector('#read')

class Book {
    constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}
}

function addBookToLibrary (book) {
    myLibrary.push(book);
}

function removeBookFromLibrary (element) {
    console.log(element)
    myLibrary.splice(element.dataset.index, 1);
    booksContainer.removeChild(element);
    console.log(myLibrary)
}


function displayBooks () {
    booksContainer.textContent = ''
    for (book of myLibrary) {
        const currentBook = document.createElement('div');
        currentBook.classList.add('book');
        index = myLibrary.indexOf(book)
        currentBook.setAttribute('data-index', index)
        currentBook.innerHTML = `Title: ${book.title} <br> Author: ${book.author} <br> Pages: ${book.pages} <br> Read: ${book.read}`;
        booksContainer.appendChild(currentBook);
        const readButton = document.createElement('button');
        readButton.classList.add('read-button');
        readButton.innerHTML = 'Toggle Read';
        currentBook.appendChild(readButton);
        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-button');
        removeButton.innerHTML = 'Remove';
        currentBook.appendChild(removeButton); 
    }
    booksContainer.querySelectorAll('.book').forEach(element => {
        const removeButton = element.querySelector('.remove-button');
        removeButton.addEventListener('click', () => {
            removeBookFromLibrary(element)
        });
        const readButton = element.querySelector('.read-button');
        readButton.addEventListener('click', () => {
            myLibrary[element.dataset.index].read = !myLibrary[element.dataset.index].read
            displayBooks()
        })
        
    });
}

function toogleRead () {
console.log('toggle')
}

addButton.addEventListener('click', () => {
    bookForm.classList.add('active')
})

bookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary(new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked));
    bookForm.classList.remove('active');
    console.log(myLibrary);
    displayBooks()
})


let book1 = new Book('Harry Potter', 'J.K Rowling', 300, false)

addBookToLibrary(book1)
displayBooks()


console.log(booksContainer.querySelectorAll('.book'));