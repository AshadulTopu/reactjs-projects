import { useRef } from "react";
import useFetch from "../useFetch/useFetch";

const TopToBottom = () => {
  const { data, pending, error } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {
      // method: "GET",
      // headers: {
      //   "Content-Type": "application/json",
      // },
    }
  );

  const redRef = useRef();
  const greenRef = useRef();
  const blueRef = useRef();
  const yellowRef = useRef();
  const purpleRef = useRef();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  // another way
  //   const scrollToRed = () => {
  //     redRef.current.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   };

  //   const scrollToGreen = () => {
  //     greenRef.current.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   };

  //   const scrollToBlue = () => {
  //     blueRef.current.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   };

  //   const scrollToYellow = () => {
  //     yellowRef.current.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   };

  //   const scrollToPurple = () => {
  //     purpleRef.current.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   };

  const scrollToElement = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  //   const scrollToElementByClass = (className) => {
  //     const element = document.getElementsByClassName(className)[0];
  //     element.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   }

  const divData = [
    {
      id: 1,
      name: "red",
      background: "red",
      ref: redRef,
    },
    {
      id: 2,
      name: "green",
      background: "green",
      ref: greenRef,
    },
    {
      id: 3,
      name: "blue",
      background: "blue",
      ref: blueRef,
    },
    {
      id: 4,
      name: "yellow",
      background: "yellow",
      ref: yellowRef,
    },
    {
      id: 5,
      name: "purple",
      background: "purple",
      ref: purpleRef,
    },
  ];

  return (
    <div>
      <h1>Top To Bottom</h1>
      <button onClick={scrollToBottom}>scroll to bottom</button>
      {pending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && data.products.map((item) => <p key={item.id}>{item.title}</p>)}
      <button onClick={scrollToTop}>scroll to top</button>
      <hr />
      <h1>Scrollable Div</h1>
      <button onClick={() => scrollToElement(redRef)}>Goto Red</button>
      <button onClick={() => scrollToElement(greenRef)}>Goto Green</button>
      <button onClick={() => scrollToElement(blueRef)}>Goto Blue</button>
      <button onClick={() => scrollToElement(yellowRef)}>Goto Yellow</button>
      <button onClick={() => scrollToElement(purpleRef)}>Goto Purple</button>
      <hr />

      {divData.map((item) => (
        <div
          key={item.id}
          style={{
            backgroundColor: item.background,
            height: "500px",
            fontSize: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            border: "1px solid black",
            textTransform: "capitalize",
          }}
          ref={item.ref}
        >
          {item.name}
        </div>
      ))}

      {/* <div
        style={{
          height: "500px",
          backgroundColor: "red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
        }}
        ref={redRef}
      >
        {" "}
        Red{" "}
      </div>
      <div
        style={{
          height: "500px",
          backgroundColor: "green",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
        }}
        ref={greenRef}
      >
        Green
      </div>
      <div
        style={{
          height: "500px",
          backgroundColor: "blue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
        }}
        ref={blueRef}
      >
        Blue
      </div>
      <div
        style={{
          height: "500px",
          backgroundColor: "yellow",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
        }}
        ref={yellowRef}
      >
        Yellow
      </div>
      <div
        style={{
          height: "500px",
          backgroundColor: "purple",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
        }}
        ref={purpleRef}
      >
        Purple
      </div> */}

      <h1>end of the page</h1>
    </div>
  );
};

export default TopToBottom;
