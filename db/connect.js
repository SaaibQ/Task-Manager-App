const mongoose = require("mongoose");

// const connectionString =
//   "mongodb+srv://saaibqazi:iatbm@nodeexpressprojects.xgqnixe.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";

// mongoose
//   .connect(connectionString, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("CONNECTED TO THE DB..."))
//   .catch((err) => console.log(err));

// to connect to DB first, and then start the server
// return promise
const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
