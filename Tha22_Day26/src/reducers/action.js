export const updateNameInput = (input) => {
  return {
    type: "updateName",
    payload: input,
  };
};

export const updateEmailInput = (input) => {
  return {
    type: "updateMail",
    payload: input,
  };
};