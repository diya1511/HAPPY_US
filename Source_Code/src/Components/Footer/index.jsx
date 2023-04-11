import './styles.css';
import { Link } from 'react-router-dom';
const PostFooter = () => {
  return (
    <div className="footer-parent">
      <div className="favorite-parent">
        <img className="favorite-icon" alt="" src="/favorite.svg" />
        <Link className="a" id="Likes">
          0
        </Link>
        <img className="favorite-icon" alt="" src="/chat_bubble.svg" />
        <Link className="a" id="Comments">
          0
        </Link>
      </div>
      <button className="share-btn">
        <img className="favorite-icon" alt="" src="share.svg" />
      </button>
    </div>
  );
};

export default PostFooter;
