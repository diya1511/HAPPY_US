import React from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";

const EventDetail = () => {
  return (
    <div className='container'>
        <div className='mainImg'>
        <button className="arrowBtn"><AiOutlineArrowLeft className="arrow"></AiOutlineArrowLeft></button>
            <div className='insideImg'></div>
        </div>

        <h1 className='heading'>Be More With Less</h1>
        <p className='authorName'>Olivia Rhye</p>
        <button className='likeBtn'>Like <AiTwotoneHeart className='heart'></AiTwotoneHeart>  </button>
        
      
    </div>
  )
}

export default EventDetail
