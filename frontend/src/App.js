// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import config from './config';
import './styles/App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${config.SERVER_URL}/tasks`);
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task._id === updatedTask._id ? updatedTask : task)));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task._id !== taskId));
  };

  const filteredTasks = tasks.filter(task => (filter === 'All' || task.status === filter));

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <div className="filter">
        <button onClick={() => setFilter('All')}  className={filter === 'All' ? 'selected' : ''}>All</button>
        <button onClick={() => setFilter('To Do')}  className={filter === 'To Do' ? 'selected' : ''}>To Do</button>
        <button onClick={() => setFilter('In Progress')}  className={filter === 'In Progress' ? 'selected' : ''}>In Progress</button>
        <button onClick={() => setFilter('Done')}  className={filter === 'Done' ? 'selected' : ''}>Done</button>
      </div>
      <TaskList tasks={filteredTasks} onUpdateTask={updateTask} onDeleteTask={deleteTask} />
    </div>
  );
};

export default App;

