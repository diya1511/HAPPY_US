import { PersonAddOutlined, PersonRemoveOutlined } from '@mui/icons-material';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setFriends } from '../../state/index.js';
import FlexBetween from '../FlexBetween';
import './styles.css';

const PostProfile = ({ friendId, name, subtitle, userPicturePath }) => {
  const dispatch = useDispatch();
  const loginResponse = JSON.parse(localStorage.getItem('auth'));
  const _id = loginResponse.user._id;
  const friends = useSelector((state) => state.user?.friends || []);
  const { palette } = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = 'black';
  const medium = 'grey';

  const isFriend = friends.find((friend) => friend._id === friendId);

  const patchFriend = async () => {
    const response = await fetch(
      `http://localhost:8080/api/v1/users/${_id}/${friendId}`,
      {
        method: 'PATCH',
      }
    );
    console.log('I am frnd',friendId);
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
            <Typography color={main} variant="h5" fontWeight="500">
              {name}
            </Typography>
            <Typography color={medium} fontSize="0.75rem">
              {subtitle}
            </Typography>
          </Box>
        </FlexBetween>
      </div>
      <IconButton
        onClick={() => patchFriend()}
        sx={{ backgroundColor: primaryLight, p: '0.6rem' }}
      >
        {isFriend ? (
          <PersonRemoveOutlined sx={{ color: primaryDark }} />
        ) : (
          <PersonAddOutlined sx={{ color: primaryDark }} />
        )}
      </IconButton>
    </FlexBetween>
  );
};

export default PostProfile;
