function TaskList({ taskList }) {
  return (
    <ol id='list-container'>
      {taskList.map((task) => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ol>
  );
}

export default TaskList;
