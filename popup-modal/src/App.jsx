import AdvanceModelParent from "./AdvanceModel/AdvanceModelParent";
import PopupModalParent from "./PopupModal/PopupModalParent";

const App = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Popup Modal</h1>
      {/* <PopupModalParent /> */}

      <h1 style={{ textAlign: "center" }}>
        Advance Model with dynamic functionality
      </h1>
      <AdvanceModelParent />
    </div>
  );
};

export default App;
