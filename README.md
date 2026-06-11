# 📝 Note Backend API

A production-ready RESTful Note Taking Backend built with **Node.js**, **Express.js**, **MongoDB**, and **JWT Authentication** following the **MVC Architecture** pattern.

## 🚀 Features

### Authentication

* User Registration
* User Login
* Password Hashing with bcrypt
* JWT Authentication
* Protected Routes
* User Logout

### Notes Management

* Create Notes
* Get All Notes
* Get Single Note
* Update Notes
* Delete Notes

### Security

* JWT Token Authentication
* Password Encryption
* Environment Variables Support
* Input Validation
* Error Handling Middleware

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcryptjs
* dotenv

---

## 📂 Project Structure

```bash
note-backend/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── note.controller.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Note.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── note.routes.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│   │
│   └── app.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/mithun2020ait/note-backend.git

cd note-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_super_secret_key

NODE_ENV=development
```

### 4. Run Server

Development Mode

```bash
npm run dev
```

Production Mode

```bash
npm start
```

Server will run on:

```bash
http://localhost:5000
```

---

## 🔐 Authentication APIs

### Register User

```http
POST /api/auth/register
```

Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

---

### Login User

```http
POST /api/auth/login
```

Request Body

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

Response

```json
{
  "token": "jwt_token"
}
```

---

### Logout User

```http
POST /api/auth/logout
```

---

## 📝 Notes APIs

### Create Note

```http
POST /api/notes
```

Headers

```http
Authorization: Bearer <token>
```

Request Body

```json
{
  "title": "My First Note",
  "content": "This is my note."
}
```

---

### Get All Notes

```http
GET /api/notes
```

---

### Get Single Note

```http
GET /api/notes/:id
```

---

### Update Note

```http
PUT /api/notes/:id
```

Request Body

```json
{
  "title": "Updated Title",
  "content": "Updated Content"
}
```

---

### Delete Note

```http
DELETE /api/notes/:id
```

---

## 🔒 Protected Routes

Add JWT token in request header:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 🧪 Testing with Postman

1. Register User
2. Login User
3. Copy JWT Token
4. Add Token to Authorization Header
5. Access Protected Routes

---

## 📌 Future Improvements

* Refresh Token Authentication
* Password Reset
* Email Verification
* Swagger API Documentation
* Rate Limiting
* Role Based Access Control (RBAC)
* Docker Support

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to your branch
5. Create a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Mithun**

GitHub: https://github.com/mithun2020ait
