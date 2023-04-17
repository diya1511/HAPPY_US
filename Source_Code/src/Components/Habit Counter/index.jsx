import ProgressBar from '../Progress bar';
import './styles.css';
import React, { useState } from 'react';

const HabitCounter = (props) => {
    const [count, setCount] = useState(0);
    const maxLimit = 15; // set the maximum limit of the counter here
    const [percentComplete, setpercentComplete] = useState((count/maxLimit)*100);

    const handleIncrement = () => {
        setCount(count + 1);
        if (percentComplete != 100){
            setpercentComplete(Math.trunc(((count+1)/maxLimit)*100));
        }
    };

    const handleDecrement = () => {
      if (count > 0) {
        setCount(count - 1);
        if ((count-1) <= maxLimit){
            setpercentComplete(Math.trunc(((count-1)/maxLimit)*100));
        }
      }
    };

    const counterColor = count >= maxLimit ? 'green' : 'black'; // set the color to green when the counter reaches its maximum limit
    const counterBG = count >= maxLimit ? '#c6e2e64f' : 'rgba(255, 255, 255, 0)'; // set the color to green when the counter reaches its maximum limit

    return (
      <>
        <div className="frame-parent-habit">
          <a className="exercise" id="habit-id" Exercise>
            Exercise
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
          </div>
          <div className="progress-bar">
            <div className="bar">
                <ProgressBar percent={percentComplete} />
            </div>
            <span>
                {percentComplete}%
            </span>
          </div>
        </div>
      </>
    );
};

export default HabitCounter;