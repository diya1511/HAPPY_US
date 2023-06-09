import React from "react";
import { useState } from "react";
import data from '../data.js'
import Tours from './Tours.js'
import {Route,Routes } from "react-router-dom";
import MeditationDetail from './MeditationDetail.js'
import './Meditation.css'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';


 
const App = () => {

  const [tours,setTour] = useState(data);


  function removeTour(id){
    const newTours = tours.filter(tours=>tours.id!==id);
    setTour(newTours); 
  }

  if(tours.length === 0){
    return(
      <div className="refresh">
        <h2> No Events Left</h2>

        <button className="btn-white" onClick={ ()=>setTour(data) }>
          Refresh
        </button>
      </div>
    );
  }

  return(

    <div className="contents card-list">
      <Link className="arrowBtn" to='/meditation'>
        <AiOutlineArrowLeft className="arrow"></AiOutlineArrowLeft>
      </Link>
    <div className="app">
      <Tours tours ={tours} removeTour = {removeTour}></Tours>

      <Routes>
        <Route path='/medDetail' element={<MeditationDetail></MeditationDetail>}></Route>
      </Routes>

    </div>
    </div>    
  );
};

export default App;
