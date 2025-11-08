# Nexora Fashion - Shopping Cart

A full-stack e-commerce web application built with **React.js** (frontend) and **Node.js/Express** (backend) that allows users to browse products, add them to the cart, and checkout seamlessly.  

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Screenshots](#screenshots)
- [Demo Video](#demo-video)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- Browse products with images, prices, and descriptions.
- Add products to cart and update quantities.
- Checkout with order summary.
- Dynamic frontend and backend integration.
- Responsive design for mobile and desktop.

---

## Tech Stack
- **Frontend:** React.js, HTML, CSS, JavaScript, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (or MySQL if applicable)
- **Version Control:** Git & GitHub

---

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ShubhangiWakchaure/shopping-cart.git
cd shopping-cart

2. Install backend dependencies:


cd backend
npm install


3. Install frontend dependencies:

cd ../frontend
npm install


4. Create .env file in backend with your environment variables:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret


5. Run the backend server:

cd backend
npm start


6. Run the frontend:

cd frontend
npm start

The app will open at http://localhost:3000.

---

Usage

Browse products on the home page.

Click Add to Cart to include products in your shopping cart.

View cart and adjust quantities.

Proceed to checkout to view order summary.

---

Folder Structure

shopping-cart/
│
├── backend/                 # Backend Node.js API
│   ├── controllers/         # Route controllers
│   ├── models/              # Database models
│   ├── routes/              # API routes
│   ├── config/              # Database and server configs
│   └── server.js            # Backend entry point
│
├── frontend/                # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components (Home, Products, Cart)
│   │   ├── App.js
│   │   └── index.js
│
├── .gitignore
├── package.json
└── README.md

---

Screenshots






Demo Video

You can add your demo video link here:
Demo Video

Contributing

Contributions are welcome!

Fork the repository.

Create a new branch: git checkout -b feature-name.

Commit your changes: git commit -m "Add some feature".

Push to the branch: git push origin feature-name.

Open a pull request.