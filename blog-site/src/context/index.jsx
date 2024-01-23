import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [recipeList, setRecipeList] = useState({});
  //   const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState();
  const [favorite, setFavorite] = useState([]);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        ` https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}&key=9b9884f2-6e9d-4fd6-b96c-8d0022cb92f2`
      );
      const data = await response.json();
      //   console.log(data);
      if (data.results) {
        setRecipeList(data.data);
        setLoading(false);
        navigate("/");
        // setTimeout(() => {
        //   setSearchParam("");
        // }, 3000);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      //   setSearchParam("");
    } finally {
      setLoading(false);
      //   setSearchParam("");
    }
  }

  const handleFavorite = (data) => {
    let newFavorite = [...favorite];
    const isExist = newFavorite.findIndex((item) => item.id === data.id);
    // console.log(isExist);
    if (isExist === -1) {
      newFavorite.push(data);
    } else {
      newFavorite.splice(isExist);
    }
    setFavorite(newFavorite);
    // console.log(data);
  };
  //   console.log(favorite);

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        recipeList,
        loading,
        setSearchParam,
        handleSubmit,
        recipeDetails,
        setRecipeDetails,
        favorite,
        handleFavorite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
