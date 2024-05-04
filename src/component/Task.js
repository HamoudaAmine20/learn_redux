// Task.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../store';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(
      editTask(task.id, {
        ...task,
        isDone: !task.isDone,
      })
    );
  };

  return (
    <div>
      <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
      <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
        {task.description}
      </span>
    </div>
  );
};

export default Task;
