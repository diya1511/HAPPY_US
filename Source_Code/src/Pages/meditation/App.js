import React from "react";
import { useState } from "react";
// import MeditationDetail from "./components/MeditationDetail";
import MedStart from "./components/MedStart";
import './components/MedStart.css'
import Meditation from './components/Meditation'
import {Route,Routes } from "react-router-dom";


const App = () => {
  return (
    <div>
      <MedStart></MedStart>

      <Routes>
        <Route path='/meditation' element={<Meditation></Meditation>}></Route>
      </Routes>
    </div>
  )
}

export default App
