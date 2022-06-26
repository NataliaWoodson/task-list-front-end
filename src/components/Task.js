import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

// const Task = ({ id, title, isComplete }) => {
const Task = ({
  id,
  title,
  isComplete,
  setComplete,
  deletetask,
  setIncomplete,
}) => {
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';

  const markComplete = () => {
    if (isComplete) {
      setIncomplete(id);
    } else {
      setComplete(id);
    }
  };

  const handleDelete = () => {
    deletetask(id);
  };

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={markComplete}
      >
        {title}
      </button>
      <button onClick={handleDelete} className="tasks__item__remove button">
        x
      </button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  setComplete: PropTypes.func.isRequired,
  deletetask: PropTypes.func.isRequired,
  setIncomplete: PropTypes.func.isRequired,
};

export default Task;
