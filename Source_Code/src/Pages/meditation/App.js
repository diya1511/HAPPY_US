import React from 'react';
import MedStart from './components/MedStart';
import Navbar from '../../Components/Navbar';
import './styles.css';

const App = () => {
  return (
    <div className="Background">
    <div className="contents">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className='Med-Feed'>
        <MedStart></MedStart>
      </div>
      </div>
      </div>
  );
};

export default App;
