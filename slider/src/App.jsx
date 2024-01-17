import APIDataSlider from "./components/APIDataSlider/APIDataSlider";
import CustomDataSlider from "./components/CustomDataSlider/CustomDataSlider";

const App = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Slider Project</h1>

      <h1 style={{ textAlign: "center" }}>Slider with custom data</h1>
      <CustomDataSlider />
      <h1 style={{ textAlign: "center" }}>Slider with API data</h1>
      <APIDataSlider
        url={"https://picsum.photos/v2/list"}
        limit={10}
        slideTime={5000}
      />
    </div>
  );
};

export default App;
