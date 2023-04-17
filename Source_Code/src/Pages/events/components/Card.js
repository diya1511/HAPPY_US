import React from 'react';
import { FaHeart } from "react-icons/fa";

const Card = () => {
  return (
    <div className='card'>
      <div className="cardImg"></div>
      <div className='imgHeader'>
        <h3 className='imgText'>Be More with less</h3>   
        <FaHeart className='likeIcon' />
      </div>
      <div className='btnContainer'>
        <div>
             <button class="button-70" role="button">Join now</button>
        </div>

        <div>
            <cite className='footer'>
                by:Olivia Rhye
            </cite>
        </div>

        

      </div>
    </div>
  )
}

export default Card



