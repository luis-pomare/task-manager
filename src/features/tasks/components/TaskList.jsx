import TaskItem from './TaskItem';

function TaskList({ taskList, deleteTask, toggleCompleted }) {
  return (
    <ol id='list-container'>
      <p>The current amound of tasks is: {taskList.length}</p>
      {taskList.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </ol>
  );
}

export default TaskList;
