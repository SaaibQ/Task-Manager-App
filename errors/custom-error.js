class CustomApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

const createInstanceError = function (msg, status) {
  return new CustomApiError(msg, status);
};

module.exports = { createInstanceError, CustomApiError };
