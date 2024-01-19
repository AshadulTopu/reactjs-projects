/* eslint-disable react/prop-types */


const InputController = ({ username, setUsername, handleSearch }) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default InputController;
