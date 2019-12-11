import React from 'react';
import './App.css';
import TodoForm from './Components/TodoForm';

function App () {
    return (
        <div className="App">
            <div>
                <h2>Welcome to your Todo App!</h2>
                <TodoForm/>
            </div>
        </div>
    );
}

export default App;
