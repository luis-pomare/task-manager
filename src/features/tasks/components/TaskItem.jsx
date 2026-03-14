function TaskItem({ task, deleteTask, toggleCompleted }) {
  return (
    <>
      <li className={task.completed ? 'completed' : ''}>
        <input
          type='checkbox'
          onChange={() => toggleCompleted(task.id)}
          checked={task.completed}
        />
        {task.text}
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </li>
    </>
  );
}

export default TaskItem;
