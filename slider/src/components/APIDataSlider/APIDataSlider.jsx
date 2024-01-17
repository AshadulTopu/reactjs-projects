/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const APIDataSlider = ({ url, limit = 5, slideTime = 3000 }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const fetchData = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=1&limit=${limit}`);
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

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
    }, slideTime); // adjust the interval time (in milliseconds) as needed

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide, data.length]);

  useEffect(() => {
    if (url !== "") fetchData(url);
  }, [url]);

  // check loading or error
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
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
            <img src={item.download_url} alt={item.author} />
            {/* other data to be displayed */}
            {/* <p>{item.author}</p> */}
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

export default APIDataSlider;
