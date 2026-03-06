function TaskItem({ currentTask, deleteHandler }) {
  return (
    <>
      <li>
        {currentTask.text}
        <button
          onClick={() => {
            deleteHandler(currentTask.id);
          }}
        >
          Delete
        </button>
      </li>
    </>
  );
}

export default TaskItem;
