import AddTodo from './components/addTodo';
import ListTodo from './components/listTodo';
import './styles.css';

function App(){
  return(
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo />
      <ListTodo />
    </div>
  )
}

export default App;