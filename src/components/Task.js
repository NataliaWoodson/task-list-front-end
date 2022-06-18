import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

// const Task = ({ id, title, isComplete }) => {
const Task = ({ id, title, isComplete, setComplete }) => {
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';

  const markComplete = () => {
    setComplete(id);
  };
  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={markComplete}
      >
        {title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  setComplete: PropTypes.func.isRequired,
};

export default Task;
