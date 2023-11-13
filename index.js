const express = require("express");
const router = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/error-handler");
require("dotenv").config("./env");

const app = express();
console.log("Task Manager App");
// console.log(notFound);

//middleware
app.use(express.json());
app.use(express.static("./public"));

// Routes
app.use(`/api/v1/tasks`, router);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

// to connect to the db first and then start the server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("CONNECTED TO THE DB...");
    app.listen(port, () => {
      console.log(`Server is listening on ${port}...`);
    });
  } catch (err) {
    console.log(`Failed to connect to the DB`);
  }
};

start();
