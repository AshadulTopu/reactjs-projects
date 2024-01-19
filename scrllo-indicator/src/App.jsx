import ScrollIndicator from "./components/ScrollIndicator";
import data from "./Database/data";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Page Scroll Indicator</h1>
      <ScrollIndicator data={data} />
    </div>
  );
};

export default App;
