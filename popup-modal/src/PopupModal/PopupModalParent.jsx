import { useState } from "react";
import PopupModalBody from "./PopupModalBody";

const PopupModalParent = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const togglePopup = () => {
    setOpenPopup(!openPopup);
  };
  const modalContent = {
    title: "Popup Modal",
    body: "Popup Modal Body",
  };

  return (
    <div className="container">
      <PopupModalBody modalContent={modalContent} openPopup={openPopup} setOpenPopup={setOpenPopup} />

      {/* {openPopup && <PopupModalBody modalContent={modalContent} openPopup={openPopup} setOpenPopup={setOpenPopup} />} */}

      <h1>Other Content</h1>
      <h1>Click the button to open popup</h1>
      <button onClick={togglePopup}>Open</button>
    </div>
  );
};

export default PopupModalParent;
