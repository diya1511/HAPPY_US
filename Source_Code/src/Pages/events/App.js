import React from 'react';
import Slider from './components/Slider';
import Cards from './components/Cards';
import './index.css';
// import Navbar from '../../Components/Navbar';
const App = () => {
  return (
    <>
      <div className="wrapper">
        <Slider/>
        <Cards/>
      </div>
    </>
  );
};

export default App;
