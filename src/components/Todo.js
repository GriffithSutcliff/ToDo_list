import React, { useState } from 'react';

function Todo(props) {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };
      const handleKeyPress = (e) => {
        if (e.key === 'Enter' && inputValue.trim()) {
          setTodos([...todos, {name: inputValue, state: 'active'}]);
          setInputValue('');
          console.log(inputValue)
        }
      };
    
    const setActive = (index) => {
        const updatedTodos = todos.map((todo, i) => {
          if (i === index) {
            return { ...todo, state: todo.state === 'active' ? 'completed' : 'active' };
          }
          return todo;
        });
        setTodos(updatedTodos);
      };

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'completed') {
          return todo.state === 'completed';
        }
        if (filter === 'active') {
          return todo.state === 'active';
        }
        return true;
    });

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
      };

    return (
        <div>
            <input className="todo-maker" placeholder="Create a new todo..." value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyPress}></input>
            <div className='todos'>
            {filteredTodos.map((todo, index) => (
                <div key={index}>
                    <div className={`todo`}>
                        <div
                        className={`circle ${todo.state === 'completed' ? 'active' : ''}`}
                        onClick={() => setActive(index)}>
                        </div>
                            {todo.name}
                    </div>
                            <div className='line'></div>
                </div>
                ))}
            </div>
            <div className='todo-info'>
                <div className='length'>{`${filteredTodos.length}`} items left</div>
                    <div className='info-middle'>
                        <div className={`filter ${filter === 'all' ? 'active' : ''}`} onClick={() => handleFilterChange('all')}>All</div>
                        <div className={`filter ${filter === 'active' ? 'active' : ''}`} onClick={() => handleFilterChange('active')}>Active</div>
                        <div className={`filter ${filter === 'completed' ? 'active' : ''}`} onClick={() => handleFilterChange('completed')}>Completed</div>
                    </div>
                <div className="clear" onClick={() => setTodos(todos.filter(todo => todo.state !== 'completed'))}>Clear completed</div>
            </div>
        </div>
    );
}

export default Todo;