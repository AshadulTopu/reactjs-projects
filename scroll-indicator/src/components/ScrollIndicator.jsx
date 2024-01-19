/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const ScrollIndicator = ({ data }) => {
  const [scrollPercent, setScrollPercent] = useState(0);

  //   console.log(data);
  const handleScroll = () => {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );

    const scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(scrollPosition);

    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    // console.log(scrollHeight);

    const scrolled = (scrollPosition / scrollHeight) * 100;
    setScrollPercent(scrolled);
    // console.log(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="container">
      <div className="scroll-indicator-wrapper">
        <h1>Page Scroll Indicator</h1>
        <div
          className="scroll-indicator"
          style={{ width: `${scrollPercent}%` }}
        ></div>
      </div>
      {data.map((item) => (
        <div className="content-container" key={item.id}>
          <img className="image" src={item.img} alt={item.name} />
          <p className="title">{item.name}</p>
          <p className="price">{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ScrollIndicator;
