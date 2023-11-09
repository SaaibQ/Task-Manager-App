const Task = require("../models/task");
const asyncWrapper = require("../middleware/async");
const {
  createInstanceError,
  CustomApiError,
} = require("../errors/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json({ tasks });
});

/*
getAllTasks = async (req, res,next) => {
    try {
      await fn(req, res);
    } catch (err) {
      next(err);
    }
  };
*/

// const getAllTasks = async (req, res) => {
//   try {
//     const tasks = await Task.find();
//     // console.log(tasks);
//     res.status(200).json({ tasks });
//     // res.status(200).json({ tasks, amount: tasks.length });
//     // res.status(200).json({ success: true, data: tasks });
//   } catch (err) {
//     res.status(500).json({ msg: err });
//   }
// };

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findById({ _id: taskID });
  if (!task) {
    return next(new createInstanceError("No task with id: ${taskID}", 404));
    // const error = new Error("Not Found!");
    // error.status = 404;
    // return next(error);
    // return res.status(404).json({ msg: `No task with id: ${taskID}` });
  }
  res.status(200).json({ task });
});

// const getTask = async (req, res) => {
//   const { id: taskID } = req.params;
//   try {
//     const task = await Task.findOne({ _id: taskID });
//   } catch (err) {
//     res.status(500).json({ msg: err });
//   }
// };

// const updateTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;
//     const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//       runValidators: true,
//       new: true,
//     });
//     console.log(task);
//     if (!task)
//       return res.status(404).json({ msg: `No task with id: ${taskID}` });
//     res.status(200).json({ task });
//   } catch (err) {
//     res.status(500).json({ msg: err });
//   }
// };

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    runValidators: true,
    new: true,
  });
  console.log(task);
  if (!task)
    return next(new createInstanceError("No task with id: ${taskID}", 404));
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndDelete({ _id: taskID });
  if (!task)
    return next(new createInstanceError("No task with id: ${taskID}", 404));
  res.status(200).json({ status: "Success", task: null });
});

// const deleteTask = async (req, res) => {
//   const { id: taskID } = req.params;
//   try {
//     const task = await Task.findByIdAndDelete({ _id: taskID });
//     if (!task)
//       return res.status(404).json({ msg: `No task with id: ${taskID}` });
//     // res.status(200).json({ task });
//     res.status(200).json({ status: "Success", task: null });
//   } catch (err) {
//     res.status(500).json({ msg: err });
//   }
// };

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
