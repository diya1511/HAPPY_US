import { Box, Typography, useTheme } from '@mui/material';
import PostProfile from '../Post Profile';
import WidgetWrapper from '../WidgetWrapper';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFriends } from '../../state/index.js';
import './styles.css';
import Addfriend from '../Add Friend Button';

export default function FriendListHome({ userId }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [friendsData, setFriendsData] = useState([]);
  const loginResponse = JSON.parse(localStorage.getItem('auth'));
  const _id = loginResponse.user._id;
  const dispatch = useDispatch();
  const friends = useSelector((state) => state.user?.friends || []);

  const getFriends = async () => {
    const response = await fetch(
      `http://localhost:8080/users/${_id}/friends`,
      {
        method: 'GET',
      }
    );
    const data = await response.json();
    // console.log(data.formattedFriends);
    // setFriendsData(data.formattedFriends);
    dispatch(setFriends({ friends: data }));
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    getFriends();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (windowWidth < 1000) {
    return null;
  }

  return (
    <div className="freind-list-home">
      <div className="frame-74 clip-contents">
        <div className="frame-86">
          <p className="friend-list">Friend List</p>
          <Box display="flex" flexDirection="column" gap="0.25rem" width={'100%'} className='friend-list-box'>
            {friends.length > 0 ? (
              friends.map((friendOuter) => (
                friendOuter.map((friend) => 
                <PostProfile
                  key={friend._id}
                  friendId={friend._id}
                  name={friend.name}
                  subtitle={friend.occupation}
                  userPicturePath={friend.picturePath}
                />
                )
              ))
            ) : (
              <div className="frame-149">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7soxun7ipnb-229%3A9971?alt=media&token=7778ba84-30e6-4791-a6ed-1ea63a66f04e"
                  alt="Not Found"
                  className="no-content-backup"
                />
                <div className="frame-148">
                  <p className="no-added-friends">No added friends!</p>
                  <div className="frame-85">
                    <p className="add-friends-by-clicking">
                      Add friends by clicking the{' '}
                    </p>
                    <Addfriend />
                    <p className="add-friends-by-clicking">button</p>
                  </div>
                </div>
              </div>
            )}
          </Box>
        </div>
      </div>
    </div>
  );
}
