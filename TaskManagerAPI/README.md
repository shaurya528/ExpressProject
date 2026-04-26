# Task Manager API

A RESTful API for managing tasks, built with **Express.js** following the **MVC (Model‑View‑Controller)** pattern. Currently uses a JSON file for data persistence, with plans to integrate **MongoDB** in the future.

## 🚀 Current Features

- Full CRUD operations (Create, Read, Update, Delete)
- MVC architecture (Models, Controllers, Routes)
- File‑based storage using `Data.json`
- Automatic ID generation (with persistent counter to avoid reuse)
- Input validation and sanitization
- Custom error handling


## 🔮 Upcoming Features

- **MongoDB integration** – replace JSON file with a real database using Mongoose ODM
- **Authentication & Authorization** – JWT‑based user authentication (separate user roles)
- **Due date reminders** – background jobs to notify about pending tasks


## 🛠️ Setup & Installation

1. Clone the repository  
   `git clone https://github.com/shaurya528/ExpressProject.git`

2. Install dependencies  
   `npm install`

3. Start the server  
   `npm start` or `node server.js`

The API will run on `http://localhost:3004` by default.

## 📖 API Endpoints

| Method | Endpoint               | Description            |
|--------|------------------------|------------------------|
| GET    | `/tasks`               | Get all tasks          |
| GET    | `/tasks/id/:id`        | Get task by ID         |
| GET    | `/tasks/status?status=`| Filter by status       |
| POST   | `/tasks/add`           | Create a new task      |
| PUT    | `/tasks/edit/:id`      | Update a task          |
| DELETE | `/tasks/delete/:id`    | Delete a task          |

## 📦 Dependencies

- express – web framework
- uuid / simple‑counter – ID generation (optional)
- express-validator – request validation (planned)
- mongoose – MongoDB ODM (future)

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

