import { useContext } from "react";
import { GlobalContext } from "../../context";

const RecipeDetails = ({ data }) => {
  const { favorite, handleFavorite } = useContext(GlobalContext);
console.log(favorite);
  //   console.log(data);
  return (
    <div>
      <div className="flex justify-between gap-6">
        {/* image area  */}
        <div className="w-1/2 max-h-[500px]">
          <img
            className="w-full h-full"
            src={data?.image_url}
            alt={data?.title}
          />
        </div>
        {/* content area  */}
        <div className="w-1/2">
          <h1 className="text-3xl font-bold">{data?.title}</h1>
          <p className="text-xl font-semibold">Publisher : {data?.publisher}</p>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-md my-5 hover:scale-110 transition ease-in-out duration-500"
            onClick={() => handleFavorite(data)}
          >
            {favorite?.findIndex(
              (recipe) => (recipe?.id === data?.id) !== -1
            )
              ? "Add to favorites"
              : "Remove from favorites"}
          </button>

          <p className="text-xl font-semibold">ingredients :</p>
          <ul className="text-xl font-semibold flex flex-col gap-1">
            {data?.ingredients.map((ingredient, index) => {
              return (
                <li key={index}>
                  {/* Quantity{" "} */}
                  {ingredient?.quantity !== null
                    ? ingredient.quantity
                    : ""}{" "}
                  {/* - Unit : */}
                  {ingredient?.unit !== null ? ingredient.unit : ""}{" "}
                  {/* - Description :{" "} */}
                  {ingredient.description !== null
                    ? ingredient.description
                    : ""}
                </li>
              );
            })}
          </ul>
          <p className="text-xl font-semibold">
            Instructions : {data?.instructions}
          </p>
          <p className="text-xl font-semibold">Serving : {data?.servings}</p>
          <p className="text-xl font-semibold">
            Cook time : {data?.cooking_time}
          </p>
          <p className="text-xl font-semibold">Rating : {data?.rating}</p>
        </div>
      </div>
      {/* review comment and other info area  */}
    </div>
  );
};

export default RecipeDetails;
