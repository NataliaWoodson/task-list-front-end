import React, { useEffect } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
// import TaskData from './tasks.json';
import { useState } from 'react';
import axios from 'axios';

const kBaseUrl = 'http://localhost:5000';

const taskApiToJson = (task) => {
  const { description, id, title, is_complete: isComplete } = task;
  return { description, id, title, isComplete };
};

const getTasks = () => {
  return axios
    .get(`${kBaseUrl}/tasks`) // promise1
    .then((response) => {
      return response.data.map(taskApiToJson);
    }) // promise2
    .catch((err) => {
      console.log(err);
    }); // promise3
};

const toggleComplete = (id) => {
  return axios
    .patch(`${kBaseUrl}/tasks/${id}/mark_complete`)
    .then((response) => {
      return taskApiToJson(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const toggleIncomplete = (id) => {
  return axios
    .patch(`${kBaseUrl}/tasks/${id}/mark_incomplete`)
    .then((response) => {
      return taskApiToJson(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const App = () => {
  const [taskData, setTaskData] = useState([]);

  const updateTasks = () => {
    getTasks().then((tasks) => {
      setTaskData(tasks);
    });
  };

  useEffect(() => {
    updateTasks();
  }, []);

  const markComplete = (id) => {
    toggleComplete(id).then((updatedTask) => {
      const newTaskData = taskData.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isComplete: (updatedTask.isComplete = !task.isComplete),
          };
        } else {
          return task;
        }
      });
      setTaskData(newTaskData);
    });
  };

  const markIncomplete = (id) => {
    toggleIncomplete(id).then((updatedTask) => {
      const newTaskData = taskData.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isComplete: (updatedTask.isComplete = !task.isComplete),
          };
        } else {
          return task;
        }
      });
      setTaskData(newTaskData);
    });
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
            setComplete={markComplete}
            deletetask={deleteTask}
            setIncomplete={markIncomplete}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
