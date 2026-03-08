import { useState } from 'react';

function TaskForm({ addTask }) {
  const [newTask, setNewTask] = useState('');

  function onChangeHandler(event) {
    setNewTask(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    addTask(newTask);
    setNewTask('');
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type='text'
        value={newTask}
        placeholder='Enter the new task'
        onChange={onChangeHandler}
        name='newTask'
      />

      <button type='submit' disabled={!newTask}>
        Add
      </button>
    </form>
  );
}

export default TaskForm;
