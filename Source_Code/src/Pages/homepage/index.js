import React from 'react';
import Navbar from '../../Components/Navbar';
import FriendListHome from '../../Components/Friend Box Home';
import Postbox from '../../Components/Post Box';
import './styles.css';
import { useSelector } from 'react-redux';
import PostsWidget from '../../Components/Posts Widget';
const Homepage = () => {
  const loginResponse = JSON.parse(localStorage.getItem('auth'));
  const _id = loginResponse.user._id;
  const frnd_id = localStorage.getItem('friendId');
  const picturePath = useSelector((state) => state.user);
  return (
    <div className="Background">
      <div className="contents">
        <div className="Navbar">
          <Navbar />
        </div>
        <div className="Feed">
          <Postbox picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </div>
        <div className="FriendList">
          <FriendListHome userId={frnd_id} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
