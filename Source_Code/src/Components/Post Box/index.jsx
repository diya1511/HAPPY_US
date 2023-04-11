import "./styles.css";
import "../global.css";
// import Addfriend from "../Add Friend Button";

const Postbox = () => {
  return (
    <div className="frame-parent">
      <div className="frame-group">
        <div className="ellipse-parent">
          <img
            className="frame-child"
            alt=""
            id="profile-pic"
            src='/profile_pic.svg'
          />
          <input
            className="frame-item"
            type="text"
            placeholder="What’s on your mind"
          />
        </div>
        <img className="frame-inner" alt="" src="/Vector 7.svg" />
        <div className="frame-container">
          <button className="image-parent">
            <div className="image">Image</div>
            <img className="imagesmode-icon" alt="" src="/photo icon.svg" />
          </button>
          <button className="send-parent">
            <div className="send">Send</div>
            <img className="imagesmode-icon" alt="" src="/send.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Postbox;
