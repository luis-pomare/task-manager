import TaskItem from './TaskItem';

function TaskList({ taskList, deleteHandler }) {
  return (
    <ol>
      <ol>
        {taskList.map((currentTask) => (
          <TaskItem
            key={currentTask.id}
            currentTask={currentTask}
            deleteHandler={deleteHandler}
          />
        ))}
      </ol>
    </ol>
  );
}

export default TaskList;
