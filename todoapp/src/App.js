import React, {useState, useEffect, useRef} from 'react';
import { useTodoLayerValue } from './context/TodoContext';
import TodoList from './components/TodoList';
import './App.css';
const App = () => {
  const [{ todos }, dispatch] = useTodoLayerValue();
  const [content, setContent] = useState('');

  const inputRef= useRef(null);

useEffect(() => {
inputRef.current.focus();
}, [])

  
  const handleSubmit=(event) => {
    event.preventDefault(); //değer girildiğinde sayfa yenilenmemesi için.

    if(content)  {
    const newTodo = {
      id: Math.floor(Math.random() * 39399393),
      content:content,
      isCompleted: false,
    };

    //react Redux'ta componentler asla doğrudan erişmez connect bunu bizim için yapar. Componentlerin eylemleri göndermesine izin vermek için dispatch kullanırız.
  dispatch({
    type: 'ADD_TODO',
    payload: newTodo,
  });
  setContent(' ');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input 
        type="text" 
        value={content}
        className="todo-input" 
        placeholder="Ne yapacaksın bakalım?"
        ref={inputRef}
        onChange={(event) => setContent(event.target.value)} 
        />
        
        <button className="todo-button">Ekle</button>
      </form>

      {/* Todo Listesi */}
  <TodoList todos={todos} />  {/* todos adında prop oluşturup içeriğini de yukarıdaki todos[]  dizesinden çektim ve compenents teki Todolistin içine atadım. */} 
    </div>
  );
};

export default App;
