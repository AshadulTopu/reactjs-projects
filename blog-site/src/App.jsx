import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import Favorites from "./pages/Favorites/Favorites";

const App = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center">Blog Site</h1>
      <Navbar />
      {
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe-details/:id" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      }
    </div>
  );
};

export default App;
