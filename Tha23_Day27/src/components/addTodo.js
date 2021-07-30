import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addItem} from '../actions';
import { v4 as uuidv4 } from 'uuid';

const AddTodo = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  return(
    <div>
      <input type="text" placeholder="Enter Text" value={item} onChange={(e) => {
        setItem(e.target.value)
      }} />
      <button onClick={() => {
        if(item.length > 0){
          dispatch(addItem({
            title: item,
            done: false,
            id: uuidv4(),
          }));setItem("");
        }
      }}>Add</button>
    </div>
  )
}

export default AddTodo;