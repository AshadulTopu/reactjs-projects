import StarRating from "./components/StarRating/StarRating";

const App = () => {
  return (
    <div>
      Star Rating Count and Update
      {/* import StarRating */}
      <StarRating noOfStars={10} />
    </div>
  );
};

export default App;
