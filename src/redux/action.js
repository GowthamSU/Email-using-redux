export const loginUser = (values) => {
  return {
    type: "LOGINUSER",
    payload: values,
  };
};

export const logOut = () => {
  return {
    type: "LOGOUT",
  };
};

export const composeMail = (values) => {
  return {
    type: "COMPOSEMAIL",
    payload: values,
  };
};
