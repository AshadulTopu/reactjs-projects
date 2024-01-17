// single selection accordion
// multiple selection accordion

//this is single selection
import { useState } from "react";
import data from "../assets/db";
import "./Accordion.css";

const SingleAccordion = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="accordion-wrapper">
      <div className="accordion">
        {/* checking is data present */}
        {data && data.length > 0 ? (
          // if data present
          data.map((item) => {
            return (
              <div
                className={`accordion-item ${
                  active === item.id ? "active" : ""
                }`}
                key={item.id}
                onClick={() => setActive(active === item.id ? null : item.id)}
              >
                <div className="title">
                  <h3>{item.question}</h3>
                  <span>{active === item.id ? "-" : "+"}</span>
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

export default SingleAccordion;
