import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState(null);
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <h1>Things to do today...</h1>
      <input onChange={(e) => setInputValue(e.target.value) }/>
      <button onClick={() => setTodoList([...todoList, inputValue])}>Add</button>
      <h2>Things in my to do list: </h2>
      {todoList.map((item) => <p>{item}</p>)}
    </div>
  );
}

export default App;
