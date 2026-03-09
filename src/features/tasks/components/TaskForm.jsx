import { useState } from 'react';

function TaskForm() {
  const [newTask, setNewTask] = useState('');

  return (
    <form>
      <p>Please enter a new task</p>
      <input
        type='text'
        placeholder='new task'
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />
    </form>
  );
}

export default TaskForm;
