import React from 'react';
import { AiTwotoneHeart } from 'react-icons/ai';
import './EventDetail.css';
import '../index.css';
const EventDetail = () => {
  return (
    <div className="detailWrapper">
      <div className="detailSection">
        <div className="detailImageContainer">
          <div className="eventImg"></div>
        </div>

        <div className="eventHeader">
          <h1 className="eventTitle">Be More With Less</h1>
          <p className="hostName">Olivia Rhye</p>
        </div>

        <div className="btnContainer">
          <button className="eventLikeBtn">
            Like{' '}
            <div className="eventHeartCont">
              <AiTwotoneHeart></AiTwotoneHeart>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
