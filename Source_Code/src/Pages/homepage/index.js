import React from 'react';
import Navbar from '../../Components/Navbar';
import FreindListHome from '../../Components/Friend Box Home';
import Postbox from '../../Components/Post Box';
import { useAuth } from '../../Context/auth';
import './styles.css';

import { useDispatch, useSelector } from 'react-redux';
import PostsWidget from '../../Components/Posts Widget';
const Homepage = () => {
  const [auth, setAuth] = useAuth();
  const _id  = useSelector((state) => state.user);
  const picturePath   = useSelector((state) => state.user);

  return (
    <div className="Background">
      <div className="contents">
        <div className="Navbar">
          <Navbar />
        </div>
        <div className="Feed">
          <Postbox />
          <PostsWidget userId={_id} />
        </div>
        <div className="FriendList">
          <FreindListHome />
        </div>
        {/* <pre>{JSON.stringify(auth)}</pre> */}
      </div>
    </div>
  );
};

export default Homepage;
