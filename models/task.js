const mongoose = require("mongoose");

// how to structure data for the document,which will be a part of the collection
// const taskSchema = new mongoose.Schema({ name: String, completed: Boolean });
// Adding Basic validation to schema
const taskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can't be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// SETUP THE MODEL
// model as the representation for the collection
// create Task as a collection on the MongoDB
// model object acts a interface to perform CRUD on the documents

// mongoose.model(collection, documentSchema)
module.exports = mongoose.model("Task", taskSchema);
