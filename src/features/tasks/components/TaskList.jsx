import TaskItem from './TaskItem';

function TaskList({ taskList, deleteTask }) {
  return (
    <ol id='list-container'>
      {taskList.map((task) => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </ol>
  );
}

export default TaskList;
