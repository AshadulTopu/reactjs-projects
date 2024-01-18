import { MenuData } from "./Database/MenuData";
import SideMenuBar from "./components/SideMenuBar";

const App = () => {
  return (
    <div>
      <h1>Side Menu Bar</h1>
      <h1>Nested Data</h1>
      <h1>Recursive Menu</h1>
      <h1>Tree View Data</h1>

      {/* import SideMenuBar */}
      <SideMenuBar menus={MenuData} />
    </div>
  );
};

export default App;
