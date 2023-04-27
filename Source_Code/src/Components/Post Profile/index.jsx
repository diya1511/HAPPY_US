import { Link } from 'react-router-dom';
import './styles.css';
const PostProfile = () => {
  return (
    <div className="image-product-parent">
      <img
        className="image-product"
        alt="profile"
        loading="eager"
        src="/image-product.png"
      />
      <div className="title-parent">
        <Link className="title-profile" id="ProfileName">
          Mathew Glock
        </Link>
        <Link className="details" id="PostDate">
          Posted on 28 February
        </Link>
      </div>
    </div>
  );
};

export default PostProfile;
