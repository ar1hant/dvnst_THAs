export const Reducer = (state = {Name: "", Email: "",}, action) => {
    if(action.type === "updateName")
      return {
        ...state,
        Name: action.payload,
      };
    else if(action.type === "updateMail")
      return {
        ...state,
        Email: action.payload,
      };
    return state;
};