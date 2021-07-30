import { useSelector, useDispatch } from "react-redux";
import { removeItem, removeAll, editItem } from "../actions";

const ListTodo = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return(
    <>
    <div className="container">
      {
       todos.map((item,index) => (
         <div className="element" key={index}>
          <input type="checkbox" onClick={() => {
            dispatch(editItem(item.id))
          }} />
          {
            item.done ?
            <h2 className="Green">{item.title}</h2> : 
            <h2>{item.title}</h2>
          }
          <button onClick={() => {dispatch(removeItem(index))}}>Delete</button>
         </div>
       ))
      }
    </div>
    <button onClick={() =>{
        dispatch(removeAll())
      }}>Remove All</button>
    </>
  )
}

export default ListTodo;