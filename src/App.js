import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import TaskData from './tasks.json';
import { useState } from 'react';

const App = () => {
  const [taskData, setTaskData] = useState(TaskData);

  const toggleComplete = (id) => {
    const newTaskData = TaskData.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: (task.isComplete = !task.isComplete) };
      } else {
        return task;
      }
    });
    setTaskData(newTaskData);
  };

  const deleteTask = (id) => {
    const newTaskData = taskData.filter((task) => {
      if (task.id !== id) {
        return true;
      }
    });
    setTaskData(newTaskData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList
            tasks={taskData}
            setComplete={toggleComplete}
            deletetask={deleteTask}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
