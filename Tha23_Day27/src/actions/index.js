const addItem = (item) => {
  return {
    type: "add_item",
    payload: item,
  };
};

const removeItem = (id) => {
  return{
    type: "rem_item",
    payload: id,
  };
};

const editItem = (id) => {
  return{
    type: "edit_item",
    payload: id,
  }
}

const removeAll = () => {
  return {
    type: "rem_all",
  }
}

export {addItem, removeItem, removeAll, editItem};