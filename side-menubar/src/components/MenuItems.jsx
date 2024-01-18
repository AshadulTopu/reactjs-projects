/* eslint-disable react/prop-types */
import MenuItem from "./MenuItem";

const MenuItems = ({ items = [] }) => {
  return (
    <ul className="menu-items">
      {items && items.length
        ? items.map((item) => <MenuItem key={item.label} item={item} />)
        : null}
    </ul>
  );
};

export default MenuItems;
