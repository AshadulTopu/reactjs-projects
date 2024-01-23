import { Link } from "react-router-dom";

const RecipeItem = ({ recipe }) => {
//   console.log(recipe);
  return (
    <div className="bg-slate-100 border border-black rounded-md max-w-80 w-full p-4">
      <div className="max-w-72 max-h-52 mb-4 mx-auto overflow-hidden hover:scale-110 transition ease-in-out duration-500">
        <img
          className="w-full rounded-md"
          src={recipe?.image_url}
          alt={recipe?.title}
        />
      </div>
      <h2 className="text-xl font-bold">{recipe?.title}</h2>
      <p className="text-lg">{recipe?.publisher}</p>
      <div className="w-full flex justify-between mt-10">
        <Link
          to={`/recipe-details/${recipe?.id}`}
          className="bg-red-500 text-white p-2 rounded-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeItem;
