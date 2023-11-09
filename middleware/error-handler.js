const { CustomApiError } = require("../errors/custom-error");

const errorHandler = (err, req, res, next) => {
  console.log("Error handled using custom middleware");
  if (err instanceof CustomApiError) {
    return res.status(err.status).json({ msg: err.message });
  }
  //   console.log(err);
  return res
    .status(500)
    .json({ msg: "Something went wrong, please try again" });
};

module.exports = errorHandler;
