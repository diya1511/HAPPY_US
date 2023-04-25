import React from 'react';
import { Link } from 'react-router-dom';
import './MedStart.css';
const MedStart = () => {
  return (
  
    <div className="containermeditation">
      <Link className="yoga" to='/meditationstart'>
        <h1 className="medHeading">Meditation</h1>
        <div className="yogaImg"></div>
      </Link>
      <div className="excercise">
        <h1 className="excerHeading">Exercises</h1>
        <div className="excerImg"></div>
      </div>
        </div>       
     
  );
};

export default MedStart;
