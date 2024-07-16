document.addEventListener('DOMContentLoaded', () => {
    const books = [
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        price: '₹500.00',
        description: 'A novel set in the Jazz Age that tells the story of the mysterious millionaire Jay Gatsby and his obsession with the beautiful Daisy Buchanan.',
        image: 'great_gatsby.jpg'
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        price: '₹400.00',
        description: 'A story of racial injustice and childhood innocence in the American South.',
        image: 'to_kill_a_mockingbird.jpg'
      },
      {
        title: '1984',
        author: 'George Orwell',
        price: '₹350.00',
        description: 'A dystopian novel set in a totalitarian society ruled by Big Brother.',
        image: '1984.jpg'
      },
      {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        price: '₹300.00',
        description: 'A romantic novel that also critiques the British landed gentry at the end of the 18th century.',
        image: 'pride_and_prejudice.jpg'
      },
      {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        price: '₹450.00',
        description: 'The story of teenage angst and alienation as told by the iconic character Holden Caulfield.',
        image: 'catcher_in_the_rye.jpg'
      },
      {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        price: '₹550.00',
        description: 'A fantasy novel that follows the adventures of Bilbo Baggins as he embarks on an epic quest.',
        image: 'the_hobbit.jpg'
      }
    ];
  
    const booksPerPage = 2;
    let currentPage = 1;
    let totalPages = Math.ceil(books.length / booksPerPage);
  
    const bookList = document.getElementById('bookList');
    const bookDetails = document.getElementById('bookDetails');
    const searchBar = document.getElementById('searchBar');
    const cartList = document.getElementById('cartList');
    const totalPriceElement = document.getElementById('totalPrice');
    const loginBtn = document.getElementById('loginBtn');
    const authModal = document.getElementById('authModal');
    const authBtn = document.getElementById('authBtn');
    const closeBtn = document.querySelector('.close');
  
    let cart = [];
    let totalPrice = 0;
  
    function displayBooks(page, filteredBooks) {
      bookList.innerHTML = '';
      const startIndex = (page - 1) * booksPerPage;
      const endIndex = startIndex + booksPerPage;
      const booksToDisplay = filteredBooks.slice(startIndex, endIndex);
  
      booksToDisplay.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book';
        bookElement.innerHTML = `
          <img src="images/${book.image}" alt="${book.title}">
          <h2>${book.title}</h2>
          <h3>by ${book.author}</h3>
          <p>${book.price}</p>
          <button onclick="viewDetails(${index + startIndex})">View Details</button>
        `;
        bookList.appendChild(bookElement);
      });
  
      document.getElementById('pageNum').textContent = currentPage;
    }
  
    displayBooks(currentPage, books);
  
    window.viewDetails = function (index) {
      const book = books[index];
      document.getElementById('bookTitle').textContent = book.title;
      document.getElementById('bookAuthor').textContent = `by ${book.author}`;
      document.getElementById('bookPrice').textContent = book.price;
      document.getElementById('bookDescription').textContent = book.description;
      document.getElementById('bookImage').src = `images/${book.image}`;
      bookDetails.classList.remove('hidden');
      bookList.classList.add('hidden');
      document.getElementById('addToCart').onclick = () => addToCart(book);
    };
  
    function addToCart(book) {
      cart.push(book);
      totalPrice += parseFloat(book.price.slice(1));
      updateCart();
    }
  
    function updateCart() {
      cartList.innerHTML = '';
      cart.forEach((book, index) => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${book.title} - ${book.price}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => {
          cart.splice(index, 1);
          totalPrice -= parseFloat(book.price.slice(1));
          updateCart();
        };
        cartItem.appendChild(removeButton);
        cartList.appendChild(cartItem);
      });
      totalPriceElement.textContent = `₹${totalPrice.toFixed(2)}`;
    }
  
    document.getElementById('backToList').onclick = () => {
      bookDetails.classList.add('hidden');
      bookList.classList.remove('hidden');
    };
  
    document.getElementById('prevPage').onclick = () => {
      if (currentPage > 1) {
        currentPage--;
        displayBooks(currentPage, books);
      }
    };
  
    document.getElementById('nextPage').onclick = () => {
      if (currentPage < totalPages) {
        currentPage++;
        displayBooks(currentPage, books);
      }
    };
  
    searchBar.addEventListener('input', () => {
      const searchString = searchBar.value.toLowerCase();
      const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchString) ||
        book.author.toLowerCase().includes(searchString)
      );
      currentPage = 1;
      totalPages = Math.ceil(filteredBooks.length / booksPerPage);
      displayBooks(currentPage, filteredBooks);
    });
  
    loginBtn.onclick = () => {
      authModal.style.display = 'block';
    };
  
    closeBtn.onclick = () => {
      authModal.style.display = 'none';
    };
  
    window.onclick = (event) => {
      if (event.target == authModal) {
        authModal.style.display = 'none';
      }
    };
  
    authBtn.onclick = () => {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      if (username === 'user' && password === 'password') {
        alert('Login successful');
        authModal.style.display = 'none';
      } else {
        alert('Invalid credentials');
      }
    };
  });
  