/* eslint-disable react/prop-types */
const AdvanceModelBody = ({
  modelHead,
  modelBody,
  modelFooter,
  setOpenAdvanceModel,
  openAdvanceModel,
  dir,
  width,
  height,
  transitionTime,
}) => {
  return (
    <div
      className={`advance-model ${dir} ${openAdvanceModel ? "active" : ""}`}
      style={{
        width: `${width}`,
        height: `${height}`,
        transition: `all ${transitionTime} ease`,
      }}
    >
      <button
        className="close-advance-model"
        onClick={() => setOpenAdvanceModel(false)}
      >
        &#x2715;
      </button>
      <div className="model-header">{modelHead ? modelHead : null}</div>
      <div className="model-body">{modelBody ? modelBody : null}</div>
      <div className="model-footer">{modelFooter ? modelFooter : null}</div>
    </div>
  );
};

export default AdvanceModelBody;
