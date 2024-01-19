import CustomTab1 from "./components/Tab1/CustomTab";
import CustomTab2 from "./components/Tab2/CustomTab";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Custom Tab Navigation</h1>
      {/* import CustomTabNavigation */}
      <h1 style={{ textAlign: "center" }}>Tab 1</h1>
      <CustomTab1 />
      <h1 style={{ textAlign: "center" }}>Tab 2</h1>
      <CustomTab2 />
    </div>
  );
};

export default App;
