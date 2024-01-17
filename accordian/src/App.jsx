import CombineAccordion from "./components/CombineAccoridon";
import MultipleAccordion from "./components/MultipleAccoridon";
import SingleAccordion from "./components/SingleAccordion";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Custom Accordion</h1>
      {/* import Accordion */}
      {/* Single selection accordion */}
      <h3 style={{ textAlign: "center" }}>Single Selection Accordion</h3>
      <SingleAccordion />
      {/* Multiple selection accordion */}
      <h3 style={{ textAlign: "center" }}>Multiple Selection Accordion</h3>
      <MultipleAccordion />
      {/* Combine selection accordion */}
      <h3 style={{ textAlign: "center" }}>Combine Selection Accordion</h3>
      <CombineAccordion />
    </div>
  );
};

export default App;
