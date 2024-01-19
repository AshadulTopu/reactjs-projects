/* eslint-disable react/prop-types */
const PopupModalBody = ({ modalContent, openPopup, setOpenPopup }) => {
  return (
    <div className={`popup-modal ${openPopup ? "active" : ""}`}>
      <div className="model-header">
        {modalContent.title && <h1>{modalContent.title}</h1>}
      </div>
      <div className="model-body">
        {modalContent.body && <p>{modalContent.body}</p>}
      </div>
      {/* <h1>{modalContent.title}</h1> */}
      {/* <p>{modalContent.body}</p> */}
      <div className="model-footer">
        <button onClick={() => setOpenPopup(false)}>close</button>
      </div>
    </div>
  );
};

export default PopupModalBody;
