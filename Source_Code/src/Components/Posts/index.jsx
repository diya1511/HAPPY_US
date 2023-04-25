import "./styles.css";
import "../global.css";
import PostProfile from "../Post Profile";
import Addfriend from "../Add Friend Button";

const Posts = () => {
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
            <img className="imageblog-card1-child" alt="" src="post_pic.png" />
          </div>
          <div className="footer-parent">
            <div className="favorite-parent">
              <img className="favorite-icon" alt="" src="/favorite.svg" />
              <a className="a" id="Likes">
                0
              </a>
              <img className="favorite-icon" alt="" src="/chat_bubble.svg" />
              <a className="a" id="Comments">
                0
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
