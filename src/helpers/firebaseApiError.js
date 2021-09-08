const errorCodes = [
  {
    code: "auth/invalid-email",
    message: "Please insert a valid email.",
  },
  {
    code: "auth/invalid-password",
    message: "Please insert a valid password.",
  },
  {
    code: "auth/wrong-password",
    message: "Please insert a valid password.",
  },
  {
    code: "auth/user-not-found",
    message:
      "Your account not found, click <a href='/register'>here</a> to register your account.",
  },
];

const getErrorMessage = (errorCode) => {
  if (process.env.NODE_ENV === "development") {
    console.log(errorCode);
  }
  const error = errorCodes.find((error) => error.code === errorCode);
  return error ? error.message : "Something wrong!";
};

export { getErrorMessage, errorCodes };
