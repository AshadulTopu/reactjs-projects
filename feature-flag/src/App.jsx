import FeatureFlagGlobalState from "./components/Context";
import FeatureFlag from "./components/FeatureFlag";

const App = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Feature Flag</h1>
      <h3 style={{ textAlign: "center" }}>
        Feature Flag is a method to enable/disable components based on
        conditions, such as different offers. likes New Year offer, Eid Mubarak
        offer
      </h3>
      {/* import FeatureFlag */}
      <FeatureFlagGlobalState>
        <FeatureFlag />
      </FeatureFlagGlobalState>
    </div>
  );
};

export default App;
