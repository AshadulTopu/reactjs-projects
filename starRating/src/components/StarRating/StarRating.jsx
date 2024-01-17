import { useState } from "react";
import "./StarRating.css";
import { FaStar } from "react-icons/fa";
const StarRating = ({ noOfStars = 5 }) => {
  const [starCount, setStarCount] = useState(0);
  const [hoverCount, setHoverCount] = useState(0);
  // onClick
  const handleClick = (id) => {
    // console.log(id);
    setStarCount(id);
  };
  // onMouseEnter
  const handleMouseEnter = (id) => {
    // console.log("hovered");
    setHoverCount(id);
  };
  // onMouseLeave
  const handleMouseLeave = () => {
    // console.log("unhovered");
    setHoverCount(0);
  };
  return (
    <div className="container">
      {[...Array(noOfStars)].map(
        (_, index) => (
          (index += 1), // increment index for avoiding 0
          (
            <div key={index} className="star">
              <FaStar
                className={index <= (hoverCount || starCount) ? "active" : ""}
                key={index}
                onClick={() => handleClick(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                size={40}
              />{" "}
            </div>
          )
        )
      )}
    </div>
  );
};

export default StarRating;
