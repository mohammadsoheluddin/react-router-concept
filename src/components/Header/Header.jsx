import { NavLink } from "react-router-dom";

const Header = () => {
  const activeClass = "bg-red-500 p-2 rounded-md";

  const getNavLinkClass = ({ isActive }) => (isActive ? activeClass : "");

  return (
    <div>
      <nav className="flex gap-4 text-lg font-bold bg-green-800 text-white rounded justify-center items-center h-16 mb-6 mt-4">
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="users" className={getNavLinkClass}>
          Users
        </NavLink>
        <NavLink to="/about" className={getNavLinkClass}>
          About Us
        </NavLink>
        <NavLink to="/contact" className={getNavLinkClass}>
          Contact Us
        </NavLink>
        <NavLink to="/posts" className={getNavLinkClass}>
          Posts
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
