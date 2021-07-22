import './styles.css';
import {useState} from "react";

function Card({item, index,updateItem, removeItem}) {
  const [isEdit, setIsEdit] = useState(false);
  return(
    <div className="card">
      {
        isEdit ? (<input type="text" name="title" id="title" value={item.title} onChange={e => updateItem(index, { title: e.target.value })} required ></input>) : 
        (<h3>{item.title}</h3>)
      }
      {
        isEdit ? (<input type="number" name="calorie" id="calorie" value={item.calorie} onChange={e => updateItem(index, { calorie: e.target.value })} required ></input>) : 
        (
					<p className="='card-text'">
						{' '}
						You have consumed {item.calorie} calories.
					</p>
				)
      }
      <div>
        <button className="del_btn BTN" onClick={() => removeItem(index)}>Delete</button>
        <button className="save_btn BTN" onClick={() => setIsEdit(!isEdit)}>{isEdit ? "Save" : "Edit"}</button>
      </div>
    </div>
  )
}

function App() {
  const [title, setTitle] = useState("");
  const [calorie, setCalorie] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = e => {
		e.preventDefault();
    addItem({ title, calorie });
		setTitle('');
		setCalorie('');
	};

  const updateItem = (index, newItem) => {
		setItems(
			items.map((item, i) => (i === index ? { ...item, ...newItem } : item))
		);
	};

	const addItem = item => {
		setItems([...items, item]);
	};

	const removeItem = index => {
		setItems(items.filter((item, i) => i !== index));
	};

  return(
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Item Name" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required></input>
        <input type="number" placeholder="Calorie Amt" name="number" id="number" value={calorie} onChange={(e) => setCalorie(e.target.value)} required></input><br/>
        <button type="submit" className="btn">Add Item</button>
      </form>
      {
        items.length === 0 ? 
        (<h1>Start Adding Items</h1>) : 
        (items.map((item, index) => 
        <Card item={item} key={index} index={index} updateItem={updateItem} removeItem={removeItem} />))
      }
    </div>
  );
}

export default App;