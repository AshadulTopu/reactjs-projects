import { useEffect } from "react";
import { useState } from "react";
import Suggestion from "./Suggestion";
import ProductCard from "./ProductCard";

const SearchAutocomplete = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);

  // fetching data
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products`);
      const data = await response.json();
      if (data.products) {
        setSearchResults(data.products);
        // setSearchResults(data.products.map((product) => product.title));
        setIsError(false);
        setIsLoading(false);
      }
      //   console.log(data);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };
  //   console.log(searchResults);

  useEffect(() => {
    fetchData();
  }, []);

  const handleChangeInput = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);
    if (query.length > 1) {
      const results = searchResults.filter((product) =>
        product.title.toLowerCase().includes(query)
      );
      // setSearchResults(results);
      //   const filteredResults = searchResults.map((product) =>
      //     product.title.toLowerCase().includes(query) ? product : null
      //   );
      //   setFilteredResults(filteredResults);
      setFilteredResults(results);
      setShowDropdown(true);
    } else {
      setFilteredResults([]);
      setShowDropdown(false);
    }
  };

  //   console.log(filteredResults);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  const handleSelect = (e) => {
    setSearchTerm(e.target.innerText);
    setShowDropdown(false);
  };

  //   const handleSearch = (e) => {
  //     e.preventDefault();
  //     console.log(searchTerm);
  //   }
  return (
    <div>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChangeInput}
        />
      </div>
      {showDropdown && <Suggestion data={filteredResults}  handleSelect={handleSelect}/>}
      <ProductCard products={searchResults} />
    </div>
  );
};

export default SearchAutocomplete;
