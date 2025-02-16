import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [voice, setVoice] = useState(false);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleToggleCompleted = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleRemoveTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  const handleVoice = () => {
    setVoice(!voice);
    if (voice) {
      speechSynthesis.cancel();
    } else {
      const utterance = new SpeechSynthesisUtterance('Hello, what can I help you with?');
      utterance.lang = 'en-US';
      utterance.volume = 1;
      speechSynthesis.speak(utterance);
    }
  };

  const handleSpeak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.volume = 1;
    speechSynthesis.speak(utterance);
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '40px auto',
      marginTop:'250px',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      border: '1px solid #ddd',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    }}>
      <h1 style={{
        textAlign: 'center',
        marginBottom: '20px',
      }}>Todo App</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      />
      <button
        onClick={handleAddTodo}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Add Todo
      </button>
      
      <ul
        style={{
          listStyle: 'none',
          padding: '0',
          margin: '0',
        }}
      >
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              padding: '10px',
              borderBottom: '1px solid #ccc',
            }}
          >
            <div
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                fontSize: '18px',
                fontWeight: 'bold',
                paddingTop:"20px"
              }}
            >
              {todo.text}
            </div>
            <button
              onClick={() => handleToggleCompleted(index)}
              style={{
                float: 'right',
                marginTop: '10px',
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              {todo.completed ? 'Uncomplete' : 'Complete'}
            </button>
            <button
              onClick={() => handleRemoveTodo(index)}
              style={{
                float: 'right',
                marginTop: '10px',
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Remove<br/>
            </button>
            <button
              onClick={() => handleSpeak(todo.text)}
              style={{
                float: 'right',
                marginTop: '10px',
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Speak<br/>
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={handleVoice}
        style={{
            marginTop:'40px',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {voice ? 'Stop Voice' : 'Start Voice'}
      </button>
    </div>
  );
}

export default App;



