import { PersonAddOutlined, PersonRemoveOutlined } from '@mui/icons-material';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setFriends } from '../../state/index.js';
import FlexBetween from '../FlexBetween';
import './styles.css';

const PostProfile = ({ friendId, name, subtitle }) => {
  const dispatch = useDispatch();
  const loginResponse = JSON.parse(localStorage.getItem('auth'));
  const _id = loginResponse.user._id;
  const friends = useSelector((state) => state.user?.friends || []);
  const { palette } = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = 'black';
  const medium = 'grey';

  const isFriend =
    friends.length > 0
      ? friends[0].find((friend) => friend._id === friendId)
      : '';

  const patchFriend = async () => {
    const response = await fetch(
      `http://localhost:8080/api/v1/users/${_id}/${friendId}`,
      {
        method: 'PATCH',
      }
    );
    // console.log('I am frnd', friendId, name);
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  return (
    <FlexBetween style={{ width: '100%' }}>
      <div
        className="post-profile"
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <FlexBetween gap="1rem">
          <Box>
            <Typography
              color={main}
              variant="h5"
              fontWeight="500"
              style={{ marginBottom: '0.5rem' }}
            >
              {name}
            </Typography>
            <Typography
              color={medium}
              fontSize="0.75rem"
              style={{ marginBottom: '1rem' }}
            >
              {subtitle}
            </Typography>
          </Box>
        </FlexBetween>
      </div>
      {_id === friendId ? (
        <p>Hey! You..</p>
      ) : (
        <IconButton
          onClick={() => patchFriend()}
          sx={{
            backgroundColor: isFriend ? 'white' : 'var(--primary)',
            p: '0.5rem',
            color: isFriend ? 'red' : 'white',
          }}
        >
          {isFriend ? <PersonRemoveOutlined /> : <PersonAddOutlined />}
        </IconButton>
      )}
    </FlexBetween>
  );
};

export default PostProfile;
