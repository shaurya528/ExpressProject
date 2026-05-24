# Express Auth System (MVC + MongoDB)

A secure authentication system built with Express, MongoDB, and JWT.  
Features user registration, login, JWT access/refresh tokens, protected routes, and logout.

## ✅ Features Implemented

- User registration (bcrypt hashed passwords)
- User login (returns access + refresh tokens)
- Protected profile route (JWT verification middleware)
- Refresh token endpoint (get new access token)
- Logout (invalidate refresh token in DB)
- MVC folder structure

## 🚫 Not yet implemented (planned later)

- Admin role & admin-only routes
- Password change endpoint
- Rate limiting on login
- Email verification



## run this project
git clone <your-repo>
cd your-project
npm install

npm run dev   # (nodemon) or node server.js