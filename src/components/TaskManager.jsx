import { useState } from 'react';

function TaskManager() {
  const [taskList, setTaskList] = useState([]);

  const [newTask, setNewTask] = useState('');

  function onChangeHandler(event) {
    setNewTask(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    setTaskList((prevState) => [
      ...prevState,
      { text: [newTask], id: [Date.now()] },
    ]);
    setNewTask('');
  }

  return (
    <>
      <ol>
        <li>{taskList.length ? taskList[0].id : ''}</li>
      </ol>
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
    </>
  );
}

export default TaskManager;
