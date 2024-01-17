import { useEffect, useState } from "react";
import { sliderData } from "../../database/db";

const CustomDataSlider = () => {
  const [data, setData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);

  // fetch data
  useEffect(() => {
    setLoading(true);
    setData(sliderData);
    setLoading(false);
  }, []);

  // next slide
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % data.length);
  };

  // prev slide
  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + data.length) % data.length);
  };

  // auto next slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % data.length);
    }, 3000); // adjust the interval time (in milliseconds) as needed

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide, data.length]);

  // check loading or error
  if (loading) {
    return <div>Loading...</div>;
  }

  // render data
  return (
    <div>
      <div className="slider-container">
        <button onClick={prevSlide}>prev</button>
        {data.map((item, index) => (
          <div
            //   image
            key={index}
            className={`slide ${currentSlide === index ? "active" : ""}`}
          >
            <img src={item.image} alt={item.name} />
            {/* other data to be displayed */}
            <h3>{item.name}</h3>
            <p>{item.des}</p>
          </div>
        ))}
        <button onClick={nextSlide}>next</button>
      </div>
      <div>
        <span>
          Fraction of data: {currentSlide + 1} / {data.length}{" "}
        </span>
      </div>
      {/* pagination indicators */}
      <div className="circle-indicator-container">
        {data.map((__, index) => (
          <button
            key={index}
            className={`circle-indicator ${
              currentSlide === index ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CustomDataSlider;
