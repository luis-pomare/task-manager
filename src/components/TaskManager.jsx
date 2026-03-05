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
      { text: newTask, id: Date.now() },
    ]);
    setNewTask('');
  }

  function deleteHandler(elementId) {
    setTaskList((prevState) =>
      prevState.filter((task) => task.id !== elementId),
    );
  }

  return (
    <>
      <ol>
        {taskList.map((element) => (
          <li key={element.id}>
            {element.text}
            <button
              onClick={() => {
                deleteHandler(element.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
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
