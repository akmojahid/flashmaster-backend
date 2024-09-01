const express = require("express");
const { notFound, reqLogger } = require("./middlewares/errors_middleware");
const app = express();
const cors = require("cors");

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to log incoming requests
app.use(reqLogger);

//root routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API!, This page is under-development" });
});

//Handaling notfound requests
app.use(notFound);
//app listeners
require("dotenv").config();
const HOST = process.env.HOST;
const PORT = process.env.PORT || 4000;
app.listen(3000, () => {
  console.log(`Server running on ${HOST}:${PORT}`);
});
