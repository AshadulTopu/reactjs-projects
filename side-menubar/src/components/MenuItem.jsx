/* eslint-disable react/prop-types */
import { useState } from "react";
import MenuItems from "./MenuItems";

const MenuItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [displayMenu, setDisplayMenu] = useState({});

//   console.log(open);
  const handleMenuToggle = (label) => {
    setDisplayMenu({
      ...displayMenu,
      [label]: !displayMenu[label],
    });
    setOpen(!open);
  };
  //   console.log(displayMenu);
//   console.log(open);
  return (
    <li className="menu-item">
      <button
        className="menu-link"
        onClick={() => handleMenuToggle(item.label)}
      >
        <p>{item.label}</p>
        {item.children && item.children.length > 0 ? <span>
            {open ? "-" : "+"}
        </span> : null}
      </button>
      {/* <div>{item.url}</div> */}
      {item.children && item.children.length > 0 && displayMenu[item.label] && (
        <MenuItems items={item.children} />
      )}
    </li>
  );
};

export default MenuItem;
