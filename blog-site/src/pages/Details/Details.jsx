import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";
import RecipeDetails from "../../components/RecipeDetails/RecipeDetails";

const Details = () => {
  const { recipeDetails, setRecipeDetails } = useContext(GlobalContext);
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipeDetails(data.data.recipe);
      });
  }, [id]);

  // console.log(recipeDetails);

  return (
    <div className="mt-20">
      {recipeDetails && <RecipeDetails data={recipeDetails} />}
    </div>
  );
};

export default Details;
