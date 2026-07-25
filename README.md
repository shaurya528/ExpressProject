# 🚀 Node.js Backend Mastery Series

A comprehensive collection of four backend projects built with **Node.js** and **Express**, progressively covering everything from basic CRUD operations to advanced cloud integrations.

---

## 📚 Projects Overview

| # | Project | Focus Area |
|---|---------|------------|
| 1 | **Task Manager API** | CRUD operations, MongoDB integration, RESTful design |
| 2 | **Authentication API** | JWT-based user authentication, password hashing, security |
| 3 | **Blog API** | Relational data modeling, user-post relationships, search & filtering |
| 4 | **File Upload Service** | Direct-to-S3 uploads using presigned URLs, zero server-side memory footprint |

---

## 🎯 Learning Progression

This repository is structured to take you from **beginner** to **advanced** backend development:

### 1️⃣ Task Manager API (Foundation)
- ✅ Full CRUD operations (Create, Read, Update, Delete)
- ✅ MongoDB with Mongoose ODM
- ✅ Error handling & input validation
- ✅ RESTful API design principles

### 2️⃣ Authentication API (Security)
- ✅ User registration & login
- ✅ JWT (JSON Web Token) generation & verification
- ✅ Password hashing with bcrypt
- ✅ Protected routes & middleware
- ✅ Secure session management

### 3️⃣ Blog API (Relationships)
- ✅ One-to-many relationships (users ↔ posts)
- ✅ Population & referencing in MongoDB
- ✅ Search functionality
- ✅ Pagination & sorting

### 4️⃣ File Upload Service (Cloud Integration)
- ✅ Direct uploads to **AWS S3** using presigned URLs
- ✅ Zero server-side memory usage (no temporary file storage)
- ✅ Public / private file visibility
- ✅ Upload confirmation with S3 `HeadObject`
- ✅ Presigned download URLs with configurable expiration
- ✅ File metadata storage in MongoDB
- ✅ Folder-wise file organization

---

## 🛠️ Tech Stack (Across All Projects)

| Component | Technology |
|-----------|------------|
| **Runtime** | Node.js (ES Modules) |
| **Framework** | Express.js |
| **Database** | MongoDB + Mongoose |
| **Authentication** | JWT + bcryptjs |
| **File Storage** | AWS S3 (SDK v3) |
| **Environment** | dotenv |
| **Validation** | express-validator / custom middleware |

---

Prerequisites
Before you begin, make sure you have the following installed:

Node.js (v16 or higher) – Download

npm (comes with Node.js)

MongoDB – Local installation or MongoDB Atlas (cloud cluster)

Postman (recommended for testing APIs) – Download

AWS Account – Only required for the FileUpload project (you'll need an S3 bucket and IAM credentials)

📥 Clone the Repository
Open your terminal and run:

bash
git clone https://github.com/shaurya528/ExpressProject.git
Navigate into the project folder:

bash
cd ExpressProject
. Navigate to the Project Folder
bash
cd TaskManagerAPI   # or Auth_system, Blog_Api, FileUpload
2. Install Dependencies
bash
npm install
3. Set Up Environment Variables
Each project has an .env.example file. Copy it to create your own .env file:

bash
cp .env.example .env
Then open .env and fill in your values (see project-specific details below).

4. Start the Server
bash
npm start
For development with auto-restart (if nodemon is installed):

bash
npm run dev
The server will run on the port defined in your .env (default: 5000).


