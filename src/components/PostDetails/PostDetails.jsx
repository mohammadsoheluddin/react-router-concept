import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  const navigate = useNavigate();
  const handleBackToMainPost = () => {
    // navigate(`/posts`);
    navigate(-1);
  };

  const { postId } = useParams();
  console.log(postId);

  return (
    <div className="bg-green-400 p-8 space-y-4 rounded-lg">
      <h4>
        <span className="text-xl font-bold">Post ID: {id}</span>
      </h4>
      <h1 className="text-xl font-bold">Title of Post: {title}</h1>
      <p>Post Description: {body}</p>
      <Link to={`/posts`}>
        <button className="bg-rose-600 p-4 rounded-lg text-xl font-bold mt-6 mr-4">
          Back to Post Link
        </button>
      </Link>
      <button
        onClick={handleBackToMainPost}
        className="bg-yellow-400 p-4 rounded-lg text-xl font-bold mt-6"
      >
        Back to Post Navigate
      </button>
    </div>
  );
};

export default PostDetails;
