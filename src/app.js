require("dotenv").config();

const express = require("express");
const http = require("http");

const cors = require("cors");
const { connectDB } = require("./Config/database");
const ItemRoutes = require("./Routes/ItemRoutes");

const app = express();
const server = http.createServer(app);

app.use(cors());
// Middlewares
app.use(express.json());

// Routes
app.use("/items", ItemRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler (optional, recommended)
app.use((err, req, res, next) => {
  console.error("Global error:", err);
  res.status(500).json({ message: "Internal server error" });
});

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await connectDB();
    console.log("Database connected");

    server.listen(PORT, () => {
      console.log(`Server is listening on PORT ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect DB:", err);
    process.exit(1);
  }
})();
