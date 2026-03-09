import { useState } from 'react';
import TaskForm from './components/TaskForm';

function TaskManager() {
  const [taskList, setTaskList] = useState([]);

  function addTask(newTask) {
    setTaskList((prevState) => [
      ...prevState,
      { text: newTask, id: Date.now() },
    ]);
  }

  return (
    <>
      <TaskForm addTask={addTask} />
    </>
  );
}

export default TaskManager;
