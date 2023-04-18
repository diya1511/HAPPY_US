import React from 'react';
import Slider from './components/Slider';
import Cards from './components/Cards';
// import Navbar from '../../Components/Navbar';
const App = () => {
  return (
    <>
      <div className="wrapper">
        <Slider></Slider>
        <h1 className="eventHeader">Upcoming Events</h1>
        <Cards></Cards>
      </div>
    </>
  );
};

export default App;
