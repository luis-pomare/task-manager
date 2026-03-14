import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function TaskManager() {
  const [taskList, setTaskList] = useState([]);

  function addTask(newTask) {
    setTaskList((prevState) => [
      ...prevState,
      { text: newTask, completed: false, id: Date.now() },
    ]);
  }

  function deleteTask(id) {
    setTaskList(taskList.filter((task) => task.id !== id));
  }

  function toggleCompleted(id) {
    setTaskList(
      taskList.map((currentTask) =>
        currentTask.id === id
          ? { ...currentTask, completed: !currentTask.completed }
          : currentTask,
      ),
    );
  }

  return (
    <>
      <TaskList
        taskList={taskList}
        deleteTask={deleteTask}
        toggleCompleted={toggleCompleted}
      />
      <TaskForm addTask={addTask} />
    </>
  );
}

export default TaskManager;
