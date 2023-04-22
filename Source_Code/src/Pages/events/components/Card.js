import React from 'react';
<<<<<<< HEAD
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

=======
import { FaHeart } from 'react-icons/fa';
import '../index.css';
import { Link } from 'react-router-dom';
>>>>>>> 40234349f98c2c29d4236ee230bf65b7078512c1
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
<<<<<<< HEAD

          <Link to='/eventDetail'>
            <button class="button-70" role="button">Join now</button>
          </Link>
             
             
=======
          <Link className="button-70" to="/eventdetails">
            Join now
          </Link>
>>>>>>> 40234349f98c2c29d4236ee230bf65b7078512c1
        </div>

        <div>
          <cite className="footer">by:Olivia Rhye</cite>
        </div>
      </div>
    </div>
  );
};

export default Card;
