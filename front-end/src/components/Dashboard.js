import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Filter from './Filter';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const filterTasks = (query) => {
    setFilteredTasks(
      tasks.filter((task) => task.toLowerCase().includes(query.toLowerCase()))
    );
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <Filter onFilter={filterTasks} />
      <TaskList tasks={filteredTasks} onDelete={deleteTask} />
    </div>
  );
};

export default Dashboard;
