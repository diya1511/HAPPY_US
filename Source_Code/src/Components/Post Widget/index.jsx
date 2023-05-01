import './styles.css';
import '../global.css';
import { Box, Divider, IconButton, Typography, useTheme } from '@mui/material';
import FlexBetween from '../FlexBetween';
import WidgetWrapper from '../WidgetWrapper';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPost } from 'state';
import { Link } from 'react-router-dom';
import PostProfile from '../Post Profile';

const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,
}) => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;

  const patchLike = async () => {
    const response = await fetch(`http://localhost:8080/posts/${postId}/like`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: loggedInUserId }),
    });
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  return (
    <div className="frame-parent-post">
      <div className="frame-wrapper">
        <div className="frame-group">
          <PostProfile />
          <div className="use-border-utilities">
            Use border utilities to quickly style the border and border-radius
            of an element. Great for images, buttons.
          </div>
          <div className="imageblog-card1">
            {picturePath && (
              <img
                width="100%"
                height="auto"
                alt="post"
                style={{ borderRadius: '0.75rem', marginTop: '0.75rem' }}
                src={`http://localhost:3001/assets/${picturePath}`}
              />
            )}
          </div>
          <div className="footer-parent">
            <div className="favorite-parent">
              <img className="favorite-icon" alt="" src="/favorite.svg" />
              <Link className="a" id="Likes">
                {likeCount}
              </Link>
              <img className="favorite-icon" alt="" src="/chat_bubble.svg" />
              <Link className="a" id="Comments">
                {comments.length}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostWidget;
