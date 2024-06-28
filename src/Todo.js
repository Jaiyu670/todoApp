import React, { useState } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1 className='animation1'>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
      />
      {/* <button onClick={addTask}>Add Task</button> */}
      <button type="button" class="btn btn-success" onClick={addTask}>➕ Add Task</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t} <button type="button" class="btn btn-warning" onClick={() => removeTask(index)}>➖ Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
