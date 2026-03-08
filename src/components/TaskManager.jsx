import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function TaskManager() {
  const [taskList, setTaskList] = useState([]);

  function deleteHandler(elementId) {
    setTaskList((prevState) =>
      prevState.filter((task) => task.id !== elementId),
    );
  }

  function addTask(newTask) {
    setTaskList((prevState) => [
      ...prevState,
      {
        text: newTask,
        id: Date.now(),
      },
    ]);
  }

  return (
    <>
      <TaskList taskList={taskList} deleteHandler={deleteHandler} />
      <TaskForm addTask={addTask} />
    </>
  );
}

export default TaskManager;
