##Here is the  vercel demo:

https://my-projects-softdev-gwgv.vercel.app/




https://github.com/user-attachments/assets/d2199802-eb32-40f2-bfdd-b6f00c2ca269



# Coffee & Bakery Store Web Application

## Overview
The **Coffee & Bakery Store** is a full-stack web application designed for an online cafe and bakery. Users can browse products, add items to a shopping cart, place orders and manage their profile, including earning loyalty points. The platform simulates a real e-commerce experience with a focus on JavaScript-driven interactivity.

This project demonstrates the integration of **frontend and backend technologies**, including user authentication, database operations, and dynamic UI updates.

---

## Features
- **Product Catalog**: Browse coffee, bakery items, lunch, dinner and birthday specials.
- **Category Pages**: Filter products by category.
- **Home section**: Rotating banner on the home page highlighting popular items.
- **Shopping Cart**: Add, remove, and update product quantities.
- **Checkout & Orders**: Place orders and automatically earn loyalty points.
- **User Authentication**: Register, login, and logout securely using JWT tokens.
- **Profile Page**: View order history and loyalty points.
- **Responsive Design**: Works on desktop and mobile devices.

---

## Frontend
- **HTML5**: Structure of all pages (index, categories, cart, login, register, profile).
- **CSS3**: Styling for UI components, including navigation, product cards,  and forms.
- **JavaScript (Vanilla)**:
  - Dynamic product fetching from the backend.
  - Cart functionality (add/remove/update items).
  - Checkout flow with API integration.
  - Login/logout and profile management.
 

**Frontend Pages**:  
- `index.html` – Home page with slider and featured images.  
- `coffee.html`, `bakery.html`, `lunch.html`, `dinner.html`, `birthday.html` – Category pages.  
- `cart.html` – Shopping cart and checkout page.  
- `login.html` / `register.html` – Authentication pages.  
- `profile.html` – User profile page.

---

## Backend
- **Node.js** – Runtime environment.
- **Express.js** – Web server framework.
- **MongoDB** – Database for storing products, users, and orders.
- **Mongoose** – ODM for MongoDB schemas and queries.
- **JWT (JSON Web Tokens)** – Authentication and authorization.
- **dotenv** – Environment variable management.
- **CORS** – Cross-origin resource sharing for frontend-backend communication.

**Backend API Routes**:  
- `/api/products` – Fetch products with optional category filters.  
- `/api/auth` – Register and login users.  
- `/api/orders` – Create and fetch user orders (protected).  

---

## Folder Structure

coffee-store/
├── server/
│   ├── config/
│   │   └── db.js          # MongoDB connection
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── Product.js
│   │   ├── User.js
│   │   └── Order.js
│   └── routes/
│       ├── authRoutes.js
│       ├── productRoutes.js
│       └── orderRoutes.js
├── client/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── auth.js
│   │   ├── cart.js
│   │   ├── navbar.js
│   │   ├── profile.js
│   │   └── slider.js
│   ├── index.html
│   ├── coffee.html
│   ├── bakery.html
│   ├── lunch.html
│   ├── dinner.html
│   ├── birthday.html
│   ├── cart.html
│   ├── login.html
│   ├── register.html
│   └── profile.html
└── package.json





### 1️. Clone the Repository
git clone https://github.com/yourusername/coffee-store.git

## 2.
cd coffee-store


## 3. Install Dependencies
npm install



## 4.create .env file

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000


## 5.Start the Development Server

node server.js

