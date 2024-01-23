import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/RecipeItem/RecipeItem";

const Favorites = () => {
  const { favorite, loading } = useContext(GlobalContext);
  console.log(favorite);
  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-3xl font-bold text-center mb-6">Favorites</h1>
      {loading ? <p className="text-center text-2xl">Loading...</p> : null}
      <div className="flex flex-wrap gap-6 justify-center">
        {favorite && favorite.recipes && favorite.recipes.length > 0 ? (
          favorite.recipes.map((recipe) => {
            return <RecipeItem key={recipe.id} recipe={recipe} />;
          })
        ) : (
          <p className="text-center text-2xl text-red-500">
            No thing in your favorites
          </p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
