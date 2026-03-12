function TaskItem({ task, deleteTask }) {
  return (
    <>
      <li>
        {task.text}
        <button onClick={deleteTask}>Delete</button>
      </li>
    </>
  );
}

export default TaskItem;
