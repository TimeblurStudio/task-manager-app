// frontend/src/components/TaskItem.js
import React from 'react';
import axios from 'axios';
import config from '../config';

const TaskItem = ({ task, onUpdateTask, onDeleteTask }) => {
  const updateTask = async (status) => {
    try {
      const response = await axios.put(`${config.SERVER_URL}/tasks/${task._id}`, { ...task, status });
      onUpdateTask(response.data);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async () => {
    try {
      await axios.delete(`${config.SERVER_URL}/tasks/${task._id}`);
      onDeleteTask(task._id);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <button onClick={() => updateTask('To Do')}>To Do</button>
      <button onClick={() => updateTask('In Progress')}>In Progress</button>
      <button onClick={() => updateTask('Done')}>Done</button>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default TaskItem;

