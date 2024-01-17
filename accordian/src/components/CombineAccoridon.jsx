// single selection accordion
// multiple selection accordion

//this is combine selection
import { useState } from "react";
import data from "../assets/db";
import "./Accordion.css";

const CombineAccordion = () => {
  const [active, setActive] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multipleSelect, setMultipleSelect] = useState([]);

  const handleSingleActive = (id) => {
    setActive(id === active ? null : id);
  };
  const handleMultipleActive = (id) => {
    if (multipleSelect.includes(id)) {
      setMultipleSelect(multipleSelect.filter((item) => item !== id));
    } else {
      setMultipleSelect([...multipleSelect, id]);
    }
  };

  const handleMultipleSelection = () => {
    // if (enableMultipleSelection) {
    //   setEnableMultipleSelection(false);
    // } else {
    //   setEnableMultipleSelection(true);
    // }
    setEnableMultipleSelection(!enableMultipleSelection);
    setMultipleSelect([]);
    setActive(null);
  };

  return (
    <div className="accordion-wrapper combined">
      <button onClick={handleMultipleSelection}>
        {enableMultipleSelection ? "Disable " : "Enable "}
        Multiple Selection
      </button>
      <div className="accordion">
        {/* checking is data present */}
        {data && data.length > 0 ? (
          // if data present
          data.map((item) => {
            return (
              <div
                className={`accordion-item ${
                  active === item.id ? "active" : ""
                } ${
                  enableMultipleSelection && multipleSelect.includes(item.id)
                    ? "active"
                    : ""
                }`}
                key={item.id}
                onClick={
                  enableMultipleSelection
                    ? () => handleMultipleActive(item.id)
                    : () => handleSingleActive(item.id)
                }
              >
                <div className="title">
                  <h3>{item.question}</h3>
                  <span>
                    {enableMultipleSelection
                      ? multipleSelect.includes(item.id)
                        ? "-"
                        : "+"
                      : active === item.id
                      ? "-"
                      : "+"}
                  </span>
                </div>
                <div className="content">
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })
        ) : (
          // if data not present
          <div> No data found </div>
        )}
      </div>
    </div>
  );
};

export default CombineAccordion;
