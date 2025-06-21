# CartX Backend

A RESTful backend API for the CartX e-commerce platform, built with Node.js, Express, and MongoDB.

## Features

- 🌐 REST API for managing items (products)
- ⚡ Fast and lightweight Express server
- 🗄️ MongoDB integration via Mongoose
- 🔒 Environment-based configuration
- 🔄 CORS support for local and production frontends
- 🛡️ Robust error handling

## Project Structure

```
src/
  app.js                # Main server entry point
  Config/
    database.js         # MongoDB connection logic
  Models/
    item.js             # Mongoose Item schema/model
  Routes/
    ItemRoutes.js       # Express routes for /items
.env                    # Environment variables (not committed)
package.json            # Project metadata and dependencies
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or local MongoDB instance

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/cartx-backend.git
   cd cartx-backend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in your MongoDB URI and desired port.
   - Example:
     ```
     MONGO_URI=your-mongodb-uri
     PORT=5000
     ```

4. **Start the server:**
   ```sh
   npm run dev
   ```
   The server will run on `http://localhost:5000` by default.

## API Endpoints

### Item Routes

- `GET /items`  
  Get all items.

- `GET /items/:id`  
  Get a single item by ID.

- `POST /items`  
  Create a new item.  
  **Body:**  
  ```json
  {
    "name": "Item Name",
    "type": "Category",
    "description": "Description",
    "imageUrl": "https://...",
    "additionalImages": ["https://...", "..."]
  }
  ```

## Environment Variables

| Variable    | Description                |
|-------------|---------------------------|
| MONGO_URI   | MongoDB connection string |
| PORT        | Server port (default 5000)|

## Scripts

| Command        | Description                |
|----------------|---------------------------|
| `npm start`    | Start server (production) |
| `npm run dev`  | Start server with nodemon |

## License

ISC

---

**Author:** Dhiraj Harane