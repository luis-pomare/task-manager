import { useState } from 'react';

function TaskManager() {
  /*  const [taskList, setTaskList] = useState({
    text: '',
    id: '',
  });
*/
  const [newTask, setNewTask] = useState('');

  function onChangeHandler(event) {
    setNewTask(event.target.value);
  }

  return (
    <>
      <form>
        <input
          type='text'
          value={newTask}
          placeholder='Enter the new task'
          onChange={onChangeHandler}
        />
      </form>
    </>
  );
}

export default TaskManager;
