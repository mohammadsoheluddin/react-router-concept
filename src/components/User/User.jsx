import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div className="bg-blue-950 text-white p-6 rounded-md w-[400px]">
      <div className="mb-4">
        <span>ID: {id}</span>
        <h2>Name: {name}</h2>
        <h3>Email: {email}</h3>
        <h4>Phone: {phone}</h4>
      </div>
      <Link
        className="bg-rose-600 ml-4 p-4 rounded-lg text-xl font-bold"
        to={`/user/${id}`}
      >
        Show Details
      </Link>
      <Link to={`/user/${id}`}>
        <button className="bg-green-500 ml-4 p-4 rounded-lg text-xl font-bold">
          Click Me
        </button>
      </Link>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
};
export default User;
