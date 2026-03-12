import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function TaskManager() {
  const [taskList, setTaskList] = useState([]);

  function addTask(newTask) {
    setTaskList((prevState) => [
      ...prevState,
      { text: newTask, id: Date.now() },
    ]);
  }

  function deleteTask(id) {
    setTaskList(taskList.filter((task) => task.id != id));
  }

  return (
    <>
      <TaskList taskList={taskList} deleteTask={deleteTask} />
      <TaskForm addTask={addTask} />
    </>
  );
}

export default TaskManager;
