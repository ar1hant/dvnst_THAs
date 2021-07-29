import "./styles.css";
import {updateNameInput, updateEmailInput} from "./reducers/action.js";
import {useSelector, useDispatch} from "react-redux";

function App() {
  const Name = useSelector(state => state.Name);
  const Email = useSelector(state => state.Email);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Input</h2>
      <div>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => dispatch(updateNameInput(e.target.value))}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => dispatch(updateEmailInput(e.target.value))}
        />
      </div>
      <h2>Data</h2>
      <h4>Username :{Name}</h4>
      <h4>Email : {Email}</h4>
    </div>
  );
}

export default App;