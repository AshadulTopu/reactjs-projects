import { useState } from "react";
import AdvanceModelBody from "./AdvanceModelBody";

const AdvanceModelParent = () => {
  const [openAdvanceModel, setOpenAdvanceModel] = useState(false);
  const toggleAdvanceModel = () => {
    setOpenAdvanceModel(!openAdvanceModel);
  };
  const modelHead = <h1>This is Advance Model Header</h1>;
  const modelBody = (
    <div>
      <h1>This is Advance Model Body</h1> <p>This is Advance Model Body</p>
    </div>
  );
  const modelFooter = <h1>This is Advance Model Footer</h1>;
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Advance Model parent</h1>
      <button onClick={toggleAdvanceModel}>Open Advance Model</button>
      <AdvanceModelBody
        modelBody={modelBody}
        modelHead={modelHead}
        modelFooter={modelFooter}
        setOpenAdvanceModel={setOpenAdvanceModel}
        openAdvanceModel={openAdvanceModel}
        dir="bottom-center"
        width="600px"
        height="60vh"
        transitionTime="1s"
      />
    </div>
  );
};

export default AdvanceModelParent;
