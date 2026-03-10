import { useState } from 'react';

function TaskForm({ addTask }) {
  const [newTask, setNewTask] = useState('');

  function submitHandler(event) {
    event.preventDefault();
    addTask(newTask);
    setNewTask('');
  }

  return (
    <form onSubmit={submitHandler} id='form-container'>
      <h1>Please enter a new task</h1>
      <input
        type='text'
        placeholder='new task'
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        id='task-input'
      />
      <button type='submit' disabled={!newTask.trim()} id='submit'>
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
