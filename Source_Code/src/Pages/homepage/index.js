import React from 'react';
import Navbar from '../../Components/Navbar';
import FreindListHome from '../../Components/Friend Box Home';
// import Postbox from '../../Components/Post Box';
import Posts from '../../Components/Posts';
import { useAuth } from '../../Context/auth';
import './styles.css';
import Postbox from '../../Components/Post Box';
const Homepage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <div className="Background">
      <div className="contents">
        <div className="Navbar">
          <Navbar />
        </div>
        <div className="Feed">
          <Postbox />
          <Posts />
          <Posts />
          <Posts />
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
