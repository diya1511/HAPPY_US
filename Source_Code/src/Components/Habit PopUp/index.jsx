import React, { useState } from 'react';
import './styles.css';

function Popup(props) {
  const [title, setTitle] = useState('');
  const [countPopUp, setCountPopUp] = useState(1);

  const { onSubmit } = props;

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleCountChange = (e) => {
    e.preventDefault();
    setCountPopUp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, countPopUp });
    setTitle('');
    setCountPopUp(0);
  };

  const handleClose = (e) => {
    e.preventDefault();
    props.onClose();
    setTitle('');
    setCountPopUp(0);
  };

  const handleIncrease = (e) => {
    e.preventDefault();
    if (countPopUp + 1 <= 100) {
      setCountPopUp(countPopUp + 1);
    }
  };

  const handleDecrease = (e) => {
     e.preventDefault();
    if (countPopUp - 1 >= 1) {
      setCountPopUp(countPopUp - 1);
    }
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Enter Title</h2>
        <input type="text" value={title} onChange={handleTitleChange} />
        <h2>Enter Count</h2>
        <div className="count-input">
          <button onClick={handleDecrease}>-</button>
          <input
            className="num-input"
            type="number"
            min="0"
            max="100"
            value={countPopUp}
            onChange={handleCountChange}
          />
          <button onClick={handleIncrease}>+</button>
        </div>
        <div className="button-container">
          <button onClick={handleClose}>Close</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
