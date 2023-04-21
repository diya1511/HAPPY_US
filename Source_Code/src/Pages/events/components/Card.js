import React from 'react';
import { FaHeart } from 'react-icons/fa';
import '../index.css';
import { Link } from 'react-router-dom';
const Card = () => {
  return (
    <div className="card">
      <div className="cardImg"></div>
      <div className="imgHeader">
        <h3 className="imgText">Be More with less</h3>
        <FaHeart className="likeIcon" />
      </div>
      <div className="btnContainer">
        <div>
          <Link className="button-70" to="/eventdetails">
            Join now
          </Link>
        </div>

        <div>
          <cite className="footer">by:Olivia Rhye</cite>
        </div>
      </div>
    </div>
  );
};

export default Card;
