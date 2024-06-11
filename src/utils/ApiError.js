class ApiError extends Error {
  constructor(
    statusCode,
    meaasge = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(meaasge);
    this.statusCode = statusCode;
    this.data = null;
    this.message = meaasge;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
