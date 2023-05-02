import { EditOutlined, DeleteOutlined } from '@mui/icons-material';
import { Box, Divider, Typography, IconButton } from '@mui/material';
import Dropzone from 'react-dropzone';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from '../../state/index.js';
import WidgetWrapper from '../WidgetWrapper';
import FlexBetween from '../FlexBetween';
import './styles.css';
import '../global.css';

const Postbox = () => {
  const dispatch = useDispatch();
  const _id = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState('');

  //==============================================================//
  //API//
  //=============================================================//
  const handlePost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('userId', _id);
    formData.append('description', post);
    if (image) {
      formData.append('picture', image);
      formData.append('picturePath', image.name);
    }

    const response = await fetch(`http://localhost:8080/api/v1/posts`, {
      method: 'POST',
      // headers: { Authorization: `${token}` },
      body: formData,
    });
    const posts = await response.json();
    dispatch(setPosts({ posts }));
    setImage(null);
    setPosts('');
  };

  // const handlePost = () =>{
  //   console.log(image);
  //   console.log(isImage);
  //   console.log(post);
  // }

  return (
    <WidgetWrapper>
      <div className="frame-parent">
        <div className="frame-group">
          <div className="ellipse-parent">
            <img
              className="frame-child"
              alt=""
              id="profile-pic"
              src="/profile_pic.svg"
            />
            <input
              className="frame-item"
              type="text"
              placeholder="What’s on your mind"
              onChange={(e) => setPost(e.target.value)}
              value={post}
            />
          </div>
          <Divider sx={{ margin: '1.25rem 0' }} className="frame-inner" />
          {isImage && (
            <div className="add-image-box">
              <Box
                border={`1px solid var(--accent)`}
                borderRadius="5px"
                mt="1rem"
                p="1rem"
              >
                <Dropzone
                  acceptedFiles=".jpg,.jpeg,.png"
                  multiple={false}
                  onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div>
                      <Box
                        {...getRootProps()}
                        border={`2px dashed var(--accent)`}
                        p="1rem"
                        width="94%"
                        sx={{ '&:hover': { cursor: 'pointer' } }}
                      >
                        <input {...getInputProps()} />
                        {!image ? (
                          <p className="add-img-text">Add Image Here</p>
                        ) : (
                          <div>
                            <Typography>{image.name}</Typography>
                            <EditOutlined />
                          </div>
                        )}
                      </Box>
                      {image && (
                        <IconButton
                          onClick={() => setImage(null)}
                          sx={{ width: '15%' }}
                        >
                          <DeleteOutlined />
                        </IconButton>
                      )}
                    </div>
                  )}
                </Dropzone>
              </Box>
            </div>
          )}

          <div className="frame-container">
            <button
              className="image-parent-btn"
              onClick={() => setIsImage(!isImage)}
            >
              <div className="image-txt">Image</div>
              <img className="imagesmode-icon" alt="" src="/photo icon.svg" />
            </button>
            <button
              className="send-parent"
              disabled={!post}
              onClick={handlePost}
            >
              <div className="send">Send</div>
              <img className="imagesmode-icon" alt="" src="/send.svg" />
            </button>
          </div>
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default Postbox;
