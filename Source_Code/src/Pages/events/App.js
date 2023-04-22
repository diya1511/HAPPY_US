<<<<<<< HEAD
import React from 'react'
import Slider from './components/Slider'
import Cards from './components/Cards'
import EventDetail from './components/EventDetail'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <div className='wrapper'>
      <Slider></Slider>
      <h1 className='eventHeader'>Upcoming Events</h1>
      <Cards></Cards>
    </div>
    
    <Routes>
        <Route path='/eventDetail' element = {<EventDetail></EventDetail>}></Route>
    
    </Routes>
    
    </>

  )
}
=======
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
>>>>>>> 40234349f98c2c29d4236ee230bf65b7078512c1

export default App;
