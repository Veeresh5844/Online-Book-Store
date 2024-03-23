const books = [
    { id: 1, title: 'Book 1', price: 10, image: 'book1.jpg' },
    { id: 2, title: 'Book 2', price: 15, image: 'book2.jpg' },
    { id: 3, title: 'Book 3', price: 20, image: 'book3.jpg' },
    { id: 4, title: 'Book 4', price: 25, image: 'book4.jpg' },
    { id: 5, title: 'Book 5', price: 30, image: 'book5.jpg' },
    { id: 6, title: 'Book 6', price: 35, image: 'book6.webp' },
];

const bookList = document.getElementById('book-list');
const totalSpan = document.getElementById('total');
let total = 0;

function renderBooks() {
    bookList.innerHTML = '';
    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('book');
        div.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>$${book.price}</p>
            <button id="btn" onclick="addToCart(${book.id})">Add to Cart</button>`;
        bookList.appendChild(div);
    })
}

function addToCart(id) {
    const book = books.find(book => book.id === id);
    if (book) {
        total += book.price;
        totalSpan.textContent = total;
    }
}

renderBooks();
