import './styles.css';
import '../global.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPost } from '../../state/index.js';
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
  const loginResponse = JSON.parse(localStorage.getItem('auth'));
  const loggedInUserId = loginResponse.user._id;
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;

  const patchLike = async () => {
    const response = await fetch(
      `http://localhost:8080/api/v1/posts/${postId}/like`,
      {
        method: 'PATCH',
        body: JSON.stringify({ userId: loggedInUserId }),
      }
    );
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  return (
    <div className="frame-parent-post">
      <div className="frame-wrapper">
        <div className="frame-group">
          <PostProfile
            friendId={postUserId}
            name={name}
            subtitle={location}
            userPicturePath={userPicturePath}
            className="posy-profile-margin"
          />
          <div className="use-border-utilities">{description}</div>
          <div className="imageblog-card1">
            {picturePath && (
              <img
                width="100%"
                height="auto"
                alt="post"
                style={{ borderRadius: '0.75rem', marginTop: '0.75rem' }}
                src={`http://localhost:8080/assets/${picturePath}`}
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
