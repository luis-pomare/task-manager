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

  return (
    <>
      <TaskList taskList={taskList} deleteHandler={deleteHandler} />
      <TaskForm setTaskList={setTaskList} />
    </>
  );
}

export default TaskManager;
