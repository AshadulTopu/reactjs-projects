import { NavLink } from "react-router-dom";

import { GlobalContext } from "../../context";
import { useContext, useEffect } from "react";

const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  // const searchHandler = (e) => {
  //   setSearchParam(e.target.value);
  // };


  // useEffect(() => {
  //   setSearchParam("breakfast");
  //   handleSubmit();
  // }, []);

  return (
    <div className="bg-slate-500 fixed top-0 left-0 right-0">
      <nav className="container mx-auto flex justify-between items-center py-4 flex-col lg:flex-row ">
        <NavLink to="/">
          <h1 className="text-3xl font-bold">Blog Site</h1>
        </NavLink>
        <div className="search-box min-w-96">
          <form
            action=""
            className="flex items-center gap-2"
            onChange={handleSubmit}
          >
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              value={searchParam}
              onChange={(e) => setSearchParam(e.target.value)}
              // onChange={searchHandler}
              placeholder="Search"
            />
            {/* <button className="bg-red-500 text-white p-2 rounded-md ml-2">
              Search
            </button> */}
          </form>
        </div>
        <ul className="flex gap-4 text-xl">
          <li>
            <NavLink
              to="/"
              className="hover:underline  hover:text-red-500  hover:transition  hover:ease-in-out  hover:duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className="
                hover:underline  hover:text-red-500  hover:transition  hover:ease-in-out  hover:duration-300"
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
