const wrapper = document.querySelector('.wrapper');
const addBtn = document.querySelector('.addBtn');
const dialog = document.querySelector('#form-dialog');
const newBookBtn = document.querySelector('.newBook');
const form = document.querySelector('.form');
const cancel = document.querySelector('.cancel');


const myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(name, author, pages, read){
    const newBook = new Book(name, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

    function displayBooks(){
        wrapper.innerHTML = '';
    for(let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');

        const textContainer = document.createElement('div');
        textContainer.classList.add('text-container');

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        const bookTitle = document.createElement('h1');
        bookTitle.classList.add('title-item');
        bookTitle.textContent = myLibrary[i].name;

        const author = document.createElement('p');
        author.classList.add('author-item');
        author.textContent = `by ${myLibrary[i].author}`;

        const pages = document.createElement('p');
        pages.classList.add('page-item');
        pages.textContent = `${myLibrary[i].pages} pages`;

        const readBtn = document.createElement('button');
        readBtn.classList.add('read-item');
        readBtn.textContent = myLibrary[i].read ? 'Read' : 'Not Read';

        readBtn.addEventListener('click', () => {
        myLibrary[i].read = !myLibrary[i].read;
        readBtn.textContent = myLibrary[i].read ? 'Read' : 'Not Read';
        });
     
        const removeBook = document.createElement('button');
        removeBook.classList.add('remove-item');
        removeBook.textContent = 'Remove Book';
        removeBook.addEventListener ('click', () => {
            myLibrary.splice(i, 1);
            displayBooks();
        });

        textContainer.appendChild(bookTitle);
        textContainer.appendChild(author);
        textContainer.appendChild(pages);

        buttonContainer.appendChild(readBtn);
        buttonContainer.appendChild(removeBook);

        card.append(textContainer);
        card.append(buttonContainer);

        wrapper.appendChild(card);
    }
}



addBtn.addEventListener('click', () => {
   dialog.showModal();
});

cancel.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.close();
});

newBookBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const bookName = document.querySelector('#bookName').value;
    const bookAuthor = document.querySelector('#bookAuthor').value;
    const bookPages = document.querySelector('#bookPages').value;
    const bookRead = document.querySelector('#bookStatus').checked;

addBookToLibrary(bookName, bookAuthor, bookPages, bookRead);
form.reset();
dialog.close();
});