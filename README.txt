My Bookstore Application
Welcome to the My Bookstore application repository! This application allows users to browse books, view details, add them to a cart, and perform pagination. It also includes a simple user authentication feature.

Running the Application Locally
To run the application locally, follow these steps:

Prerequisites
Node.js installed on your local machine
Any modern web browser (e.g., Google Chrome, Mozilla Firefox)
Installation
Clone the repository to your local machine:

bash
Copy code
git clone <repository-url>
cd "my bookstore"
Replace <repository-url> with the actual URL of your repository.

Install dependencies using npm:

bash
Copy code
npm install
Running the Application
Start the development server:

bash
Copy code
npm start
Open your web browser and navigate to http://localhost:3000 to view the application.

Features Implemented
Homepage: Displays a list of books with pagination.
Book Details: Clicking on "View Details" shows information about the selected book.
Cart: Allows users to add books to a cart, view total price, and remove items.
Search: Provides a search bar to filter books by title or author.
User Authentication: Clicking on "Login" opens a modal for entering credentials (username: user, password: password for demo purposes).
Assumptions and Decisions
Pagination: Implemented with a fixed number of books per page (configurable in JavaScript).
User Authentication: Simple authentication with hardcoded credentials for demo purposes.
Design: Used responsive design principles with Sass for enhanced styling and readability.
Code Structure: Separated HTML, CSS (Sass), and JavaScript for better maintainability.
Additional Features
Added pagination for better navigation through the book list.
Implemented a modal for user authentication to simulate login functionality.