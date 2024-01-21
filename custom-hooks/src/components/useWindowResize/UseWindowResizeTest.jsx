import useWindowResize from "./useWindowResize";

const UseWindowResizeTest = () => {
  const { width: width, height } = useWindowResize();
  return (
    <div>
      <h1>Use Window Resize</h1>
      <p>please resize the window</p>
      <p>width: {width}</p>
      <p>height: {height}</p>
    </div>
  );
};

export default UseWindowResizeTest;
