# Blog API (Node.js + Express + MongoDB)

## Project Status

🚧 Initial Development Stage

This project is a **Blog API** built using **Node.js, Express.js,
MongoDB, JWT, and bcrypt** following the **MVC architecture**.

The goal of this project is to build a real-world backend application
and strengthen backend development skills by implementing
authentication, authorization, blog management, comments, likes, search,
pagination, and role-based access.

------------------------------------------------------------------------

# Tech Stack

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose
-   JWT Authentication
-   bcrypt Password Hashing
-   MVC Architecture

------------------------------------------------------------------------

# Features (Planned)

## Authentication

-   User Registration
-   User Login
-   Password Hashing using bcrypt
-   JWT Authentication
-   Protected Routes

## User Profile

-   Get Profile
-   Update Profile
-   User Bio

## Blog Management

-   Create Blog
-   Read Blogs
-   Read Single Blog
-   Update Own Blog
-   Delete Own Blog

## Authorization

-   Ownership Check
-   Only Author Can Edit/Delete Blog

## Comments

-   Add Comment
-   View Comments
-   Delete Own Comment



## Pagination

-   Page and Limit Support

## Role-Based Access

-   User Role
-   Admin Role

## Reading Time

-   Automatic Reading Time Calculation



------------------------------------------------------------------------


------------------------------------------------------------------------


------------------------------------------------------------------------

# Installation

Clone the repository:

``` bash
git clone <repository-url>
```

Install dependencies:

``` bash
npm install
```

Create a `.env` file:

``` env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

Run the server:

``` bash
npm run dev
```

------------------------------------------------------------------------

# Current Progress

Currently working on the **initial backend setup and feature
implementation**.

Authentication is completed and the next step is building the Blog CRUD
system.

------------------------------------------------------------------------

# Learning Goals

This project is being built to:

-   Practice backend development
-   Understand MVC architecture
-   Learn authentication and authorization
-   Build real-world APIs
-   Improve MongoDB and Express skills

------------------------------------------------------------------------

## Author

Shaurya Raj
