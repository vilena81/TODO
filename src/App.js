
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';
import TodoItem from './TodoItem';


function App() {
  const [inputVal, setInputVal] = useState("")
  const dispatch = useDispatch()
  const data = useSelector((state) => state)

  function addTodo(e) {
    e.preventDefault();
    if (inputVal.trim()) {
      dispatch({ type: "ADD_TODO", payload: inputVal })
    }

    setInputVal("")
  }

  function deleteAll() {
    dispatch({ type: "DELETE_ALL_TODO" })
  }
  return (
    <div className="App">
      
      <form onSubmit={(e) => addTodo(e)}>
        <input type="text" onChange={(e) => setInputVal(e.target.value)} value={inputVal} />
        <button>ADD TODO</button>
      </form>
      {data.map((todo) => <TodoItem key={todo.id} dispatch={dispatch} todo={todo} />)}
      {data.length ? <button onClick={deleteAll}>Delete All</button> : <></>}
      {/* <button onClick={deleteAll}>Delete All</button> */}
    </div>
  );
}

export default App;
