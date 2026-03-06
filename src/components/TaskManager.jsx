import { useState } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

function TaskManager() {
  const [taskList, setTaskList] = useState([]);

  function deleteHandler(elementId) {
    setTaskList((prevState) =>
      prevState.filter((task) => task.id !== elementId),
    );
  }

  return (
    <>
      <ol>
        {taskList.map((currentTask) => (
          <TaskItem
            key={currentTask.id}
            currentTask={currentTask}
            deleteHandler={deleteHandler}
          />
        ))}
      </ol>
      <TaskForm setTaskList={setTaskList} />
    </>
  );
}

export default TaskManager;
