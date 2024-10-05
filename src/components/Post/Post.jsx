import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
const Post = ({ post }) => {
  const { id, title, body } = post;
  const navigate = useNavigate();

  const handleShowDetail = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="bg-amber-400 p-6 rounded-md text-red font-semibold">
      <div className="mb-6">
        <h3>Post Id: {id}</h3>
        <h2>Title: {title}</h2>
        <p>Description: {body}</p>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <Link
          className="bg-rose-600 p-4 rounded-lg text-xl font-bold"
          to={`/post/${id}`}
        >
          <button>Show Post Details</button>
        </Link>
        <Link
          className="bg-green-600 p-4 rounded-lg text-xl font-bold"
          to={`/`}
        >
          <button>Back to Home</button>
        </Link>
        <button
          className="bg-blue-950 text-white p-4 rounded-lg text-xl font-bold"
          onClick={handleShowDetail}
        >
          Navigate
        </button>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
