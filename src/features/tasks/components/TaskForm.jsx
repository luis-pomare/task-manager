import { useState } from 'react';

function TaskForm({ addTask }) {
  const [newTask, setNewTask] = useState('');

  function submitHandler(event) {
    event.preventDefault();
    addTask(newTask);
  }

  return (
    <form onSubmit={submitHandler}>
      <p>Please enter a new task</p>
      <input
        type='text'
        placeholder='new task'
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />
      <button type='submit' disabled={!newTask.trim()}>
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
