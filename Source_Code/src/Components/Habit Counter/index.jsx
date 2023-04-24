import ProgressBar from '../Progress bar';
import './styles.css';
import React, { useState, useEffect } from 'react';

const HabitCounter = (props) => {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem(props.habitTitle);
    return storedCount ? parseInt(storedCount) : 0;
  });
  const maxLimit = props.maxCount; // set the maximum limit of the counter here
  const [percentComplete, setPercentComplete] = useState(
    Math.trunc((count / maxLimit) * 100)
  );

  useEffect(() => {
    localStorage.setItem(props.habitTitle, count);
    props.onCountChange(count);
  }, [count, props.habitTitle, props.onCountChange]);

  const handleIncrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      setPercentComplete(Math.trunc((newCount / maxLimit) * 100));
      return newCount;
    });
    props.onCountChange(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => {
        const newCount = prevCount - 1;
        setPercentComplete(Math.trunc((newCount / maxLimit) * 100));
        return newCount;
      });
      props.onCountChange(count - 1);
    }
  };

  const handleDelete = () => {
    localStorage.removeItem(props.habitTitle);
    const index = props.index;
    props.onDelete(index);
  };

  useEffect(() => {
    localStorage.setItem(`countList[${props.index}]`, count);
  }, [count, props.index]);

  const counterColor = count >= maxLimit ? 'green' : 'black'; // set the color to green when the counter reaches its maximum limit
  const counterBG = count >= maxLimit ? '#c6e2e64f' : 'rgba(255, 255, 255, 0)'; // set the color to green when the counter reaches its maximum limit

  return (
    <>
      <div className="frame-parent-habit">
        <a className="exercise" id="habit-id" Exercise>
          {props.habitTitle}
        </a>
        <div className="frame-group-habit">
          <button className="wrapper" onClick={handleDecrement}>
            <div className="div">-</div>
          </button>
          <div className="counter-bg" style={{ backgroundColor: counterBG }}>
            <span
              className="span"
              id="counter-number"
              style={{ color: counterColor }}
            >
              {count}/{maxLimit}
            </span>
          </div>
          <button className="container" onClick={handleIncrement}>
            <div className="div1">+</div>
          </button>
          <button onClick={handleDelete} className="delete-button">
            Delete
          </button>
        </div>
        <div className="progress-bar">
          <div className="bar">
            <ProgressBar percent={percentComplete} />
          </div>
          <span>{percentComplete}%</span>
        </div>
      </div>
    </>
  );
};

export default HabitCounter;
