import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-500 shadow-md">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center py-4 text-white">
          <NavLink to="/">
            <h1 className="text-2xl font-bold">Blog Site</h1>
          </NavLink>

          <ul className="flex items-center justify-center gap-6 text-lg ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-red-500" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) => (isActive ? "text-red-500" : "")}
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
