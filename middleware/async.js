// Closure
const asyncWrapper = function (fn) {
  return async (req, res, next) => {
    try {
      // console.log(fn);
      await fn(req, res, next);
      // console.log(pv);
    } catch (err) {
      console.log("catching error");
      next(err);
    }
  };
};

module.exports = asyncWrapper;
