import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div className="grid grid-cols-2 gap-4">
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
};

export default Posts;
