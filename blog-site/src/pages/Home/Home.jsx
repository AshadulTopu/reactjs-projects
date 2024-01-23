import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/RecipeItem/RecipeItem";

const Home = () => {
  const { recipeList, loading } = useContext(GlobalContext);
  // console.log(recipeList);
  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-3xl font-bold text-center mb-6">Home</h1>
      {loading ? <p className="text-center text-2xl">Loading...</p> : null}
      <div className="flex flex-wrap gap-6 justify-center">
        {recipeList && recipeList.recipes && recipeList.recipes.length > 0 ? (
          recipeList.recipes.map((recipe) => {
            return <RecipeItem key={recipe.id} recipe={recipe} />;
          })
        ) : (
          <p className="text-center text-2xl text-red-500">
            No recipes found, search again
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
