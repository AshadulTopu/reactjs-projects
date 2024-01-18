import LightDarkController from "./components/LightDarkController";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Light & Dark Mode using localStorage and custom hook
      </h1>
      {/* <h1>Light Mode</h1>
      <h1>Dark Mode</h1> */}
      <LightDarkController />
    </div>
  );
};

export default App;
