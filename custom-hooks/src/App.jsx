import TopToBottom from "./components/TopToBottom/TopToBottom";
import UseFetchTest from "./components/useFetch/UseFetchTest";
import UseOnClickOutsideTest from "./components/useOnClickOutside/UseOnClickOutsideTest";
import UseWindowResizeTest from "./components/useWindowResize/UseWindowResizeTest";

const App = () => {
  return (
    <div className="container">
      <h1>Custom Hooks</h1>
      <h1>useFetch Hooks</h1>
      {/* import UseFetchTest */}
      <UseFetchTest />
      <h1>useOnClickOutside Hooks</h1>
      {/* import UseOnClickOutsideTest */}
      <UseOnClickOutsideTest />
      <h1>use Window Resize</h1>
      <UseWindowResizeTest />

      <h1>scroll to top and bottom</h1>
      <TopToBottom />
    </div>
  );
};

export default App;
