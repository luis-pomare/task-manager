import TaskItem from './TaskItem';

function TaskList({ taskList }) {
  return (
    <ol id='list-container'>
      {taskList.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ol>
  );
}

export default TaskList;
