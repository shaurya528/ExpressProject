# 📁 File Upload to S3 with Node.js + JWT

A secure file upload microservice that lets users upload files directly to AWS S3 using **presigned URLs**. Built with **Node.js**, **Express**, **MongoDB**, **JWT authentication**, and **AWS SDK v3**.

---

## 🚀 Features

- ✅ User registration & login with JWT
- 🔐 Protected routes (only authenticated users can upload/manage files)
- 📤 Generate presigned **upload URLs** (client uploads directly to S3)
- 📥 Generate presigned **download URLs** (private files) or public URLs
- 🗄️ Store file metadata (name, size, folder, visibility) in MongoDB
- ✅ Upload confirmation via `HeadObject` – verifies file exists and records actual size
- 📂 Optional folder support (e.g., `profile`, `documents`, `gallery`)
- 🔒 Public / private file visibility toggle
- ⏱️ Configurable URL expiration times

---

## 🧰 Tech Stack

- **Runtime**: Node.js (ES Modules)
- **Framework**: Express
- **Database**: MongoDB + Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **Cloud Storage**: AWS S3 (SDK v3)
- **File Upload**: Presigned URLs (PUT method)
- **Environment**: dotenv

---

## 📁 Project Structure
