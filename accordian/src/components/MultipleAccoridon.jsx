// single selection accordion
// multiple selection accordion

//this is multiple selection
import { useState } from "react";
import data from "../assets/db";
import "./Accordion.css";

const MultipleAccordion = () => {
  const [checked, setChecked] = useState([]);

  const handleChecked = (id) => {
    // console.log(id);
    if (checked.includes(id)) {
      setChecked(checked.filter((item) => item !== id));
    } else {
      setChecked([...checked, id]);
    }
  };

  return (
    <div className="accordion-wrapper multiple">
      <div className="accordion">
        {/* checking is data present */}
        {data && data.length > 0 ? (
          // if data present
          data.map((item) => {
            return (
              <div
                className={`accordion-item ${
                  checked.includes(item.id) ? "active" : ""
                }`}
                key={item.id}
                onClick={() => handleChecked(item.id)}
              >
                <div className="title">
                  <h3>{item.question}</h3>
                  <span>{checked.includes(item.id) ? "-" : "+"}</span>
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

export default MultipleAccordion;
