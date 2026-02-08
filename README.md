This project is a Full-Stack E-Commerce Platform built using the MERN (MongoDB, Express, React, Node.js) stack. It provides a comprehensive solution for online shopping, featuring a dynamic frontend and a secure, scalable backend.

## Core Architecture

The application follows a decoupled architecture where the React frontend communicates with a RESTful API built with Node.js and Express. Data is managed through MongoDB, providing a flexible schema for products, users, and orders.

## Key Features

User Authentication: Secure signup and login functionality using JWT (JSON Web Tokens) for session management and bcrypt for password encryption.

Product Management: A robust system for browsing products, viewing details, and managing stock levels.

Shopping Cart & Orders: A fully functional cart system that allows users to add items, modify quantities, and proceed to a structured checkout process.

Payment Integration: Real-world transaction processing via the Razorpay API, including secure payment verification logic.

Admin Dashboard: Specialized routes and permissions that allow administrators to manage the product catalog and track customer orders.

## Technical Highlights

State Management: Utilizes React hooks (and potentially Redux) to handle complex application states like cart persistence and user sessions.

Secure API: Implements CORS for cross-origin resource sharing and custom middleware for role-based access control (RBAC).

Database Integration: Uses Mongoose as an ODM to ensure data integrity and facilitate efficient querying of the MongoDB database.
