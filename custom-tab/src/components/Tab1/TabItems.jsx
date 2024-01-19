/* eslint-disable react/prop-types */
import { useState } from "react";

const TabItems = ({ tabContent, onChange }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="wrapper">
      <div className="tabs-header">
        {tabContent.map((item, index) => {
          return (
            <button
              className={`tab-item ${activeTab === index ? "active" : ""}`}
              key={item.label}
              onClick={() => {
                setActiveTab(index);
                onChange(index);
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="tabs-content">
        {tabContent[activeTab] && tabContent[activeTab].content}
      </div>
    </div>
  );
};

export default TabItems;
