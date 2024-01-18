/* eslint-disable react/prop-types */
import MenuItems from "./MenuItems";

const SideMenuBar = ({ menus = [] }) => {
  return (
    <div className="container">
      <MenuItems items={menus} />
    </div>
  );
};

export default SideMenuBar;
