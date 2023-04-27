// import { useState } from "react";
import React from 'react';
import Navbar from '../../Components/Navbar';
import FreindListHome from '../../Components/Friend Box Home';
// import Postbox from '../../Components/Post Box';
import Posts from '../../Components/Posts';
import './styles.css';
const Homepage = (props) => {
  return (
    <div className="Background">
      <div className="contents">
        <div className="Navbar">
          <Navbar />
        </div>
        <div className="Feed">
          {/* <Postbox /> */}
          <Posts />
          <Posts />
          <Posts />
        </div>
        <div className="FriendList">
          <FreindListHome />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
