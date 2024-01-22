const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
