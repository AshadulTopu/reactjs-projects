import { useRef, useState } from "react";
import useOnClickOutside from "./useOnClickOutside";

const UseOnClickOutsideTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setShowContent(false));
  return (
    <div>
      <h1>Use OnClick Outside Test</h1>
      {/* <button
        onClick={() => {
          //   setShowContent(!showContent);
          setShowContent(true);
        }}
      >
        Click me
      </button> */}
      {showContent ? (
        <div ref={ref}>
          <h3>Here will be your content</h3>
          <p>
            please click outside to the content to close it. It won&apos;t close
            if you click inside of the content.
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Click me</button>
      )}
    </div>
  );
};

export default UseOnClickOutsideTest;
