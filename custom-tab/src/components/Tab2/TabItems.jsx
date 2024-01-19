/* eslint-disable react/prop-types */
import { useState } from "react";

const TabItems = ({ tabContent }) => {
  const [activeTab, setActiveTab] = useState(0);
  // console.log(tabContent);
  console.log(activeTab);
  return (
    <div>
      <div className="tabs-header">
        {tabContent.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setActiveTab(index);
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="tabs-card">
        {tabContent[activeTab].content ? (
          <div>
            <h1>{tabContent[activeTab].content.heading}</h1>
            <p>{tabContent[activeTab].content.des}</p>
            <ul>
              {tabContent[activeTab].content.list.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
            {/* <button>{tabContent[activeTab].content.path.text}</button> */}
            <a href={tabContent[activeTab].content.path.link}>
              {tabContent[activeTab].content.path.text}
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TabItems;
