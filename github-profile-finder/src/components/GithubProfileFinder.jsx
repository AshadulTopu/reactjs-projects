import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Loader from "./Loader";
import InputController from "./InputController";

const GithubProfileFinder = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({});
  //   const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //   const handleInput = (e) => {
  //     setUsername(e.target.value);

  //   }

  const fetchGithubProfile = () => {
    if (username) {
      setIsLoading(true);
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
          setIsLoading(false);
        });
    }
  };
  //   console.log(userData);

  const handleSearch = () => {
    fetchGithubProfile();
    setUsername("");
  };

//   useEffect(() => {
//     fetchGithubProfile();
//     setUsername("");
//   }, []);
  return (
    <div className="container">
      <InputController
        username={username}
        setUsername={setUsername}
        handleSearch={handleSearch}
      />
      {isLoading && <Loader />}
      {userData && !isLoading && <UserCard userData={userData} />}
    </div>
  );
};

export default GithubProfileFinder;
