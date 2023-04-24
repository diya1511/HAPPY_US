import React from 'react';
import Slider from './components/Slider';
import Cards from './components/Cards';
import './index.css';
// import Navbar from '../../Components/Navbar';
const App = () => {
  return (
    <>
      <div className="wrapperevent">
        <Slider />
        <h1 className="eventHeader">Upcoming Event</h1>
        <Cards />
      </div>
    </>
  );
};

export default App;
