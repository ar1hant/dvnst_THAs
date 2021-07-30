const todoReducer = (state = [], action) => {
  if(action.type === "add_item"){
    return [...state,action.payload];
  }
  else if(action.type === "rem_item"){
    return state.filter((item, index) => index !== action.payload);
  }
  else if(action.type === "rem_all"){
    state = [];
    return state;
  }
  else if(action.type === "edit_item"){
    return state.map((ele) => {
      if(ele.id === action.payload){
        return {
          title: ele.title,
          done: !ele.done,
          id: ele.id,
        }
      }
    });
  }
  return state;
};

export default todoReducer;