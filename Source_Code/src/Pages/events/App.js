import React from 'react';
import Slider from './components/Slider';
import Navbar from '../../Components/Navbar';
import Cards from './components/Cards';
import './index.css';
// import Navbar from '../../Components/Navbar';
const App = () => {
  return (

  <div className="Background">
    <div className="contents">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="wrapperevent">
        <Slider />
        <h1 className="eventHeader">Upcoming Event</h1>
        <Cards />
      </div>
      </div>
      </div>
  );
};

export default App;
