/* eslint-disable react/prop-types */
const UserCard = ({ userData }) => {
  console.log(userData);
  return (
    <div className="github-profile">
      <h3>Github Profile</h3>
      <div className="card">
        {userData.avatar_url && (
          <div className="img-area">
            <img
              src={`${userData.avatar_url}`}
              alt={`${userData.avatar_url}`}
            />
          </div>
        )}
        <div className="info-area">
          <h3>
            Name :{" "}
            {(userData.name && `${userData.name}`) ||
              (userData.login && `${userData.login}`)}{" "}
          </h3>
          <p>
            Total Public Repos :{" "}
            {userData.public_repos && `${userData.public_repos}`}
          </p>
          <p>
            Public Gists : {userData.public_gists && `${userData.public_gists}`}
          </p>
          <p>
            {" "}
            Total Followers : {userData.followers && `${userData.followers}`}
          </p>
          <p>Total Following {userData.following && `${userData.following}`}</p>
          <p>
            Created at :{" "}
            {userData.created_at &&
              `${new Date(userData.created_at).toDateString()}`}
          </p>
          <p>
            Updated at :{" "}
            {userData.updated_at &&
              `${new Date(userData.updated_at).toDateString()}`}
          </p>
          <p>Location : {userData.location && `${userData.location}`}</p>
          <p>Company : {userData.company && `${userData.company}`}</p>
          {/* <p>
            Organization :{" "}
            {userData.orgs_url && `${userData.orgs_url}`}
          </p> */}
          <p>
            Organization URl:{" "}
            {userData.organizations_url && `${userData.organizations_url}`}
          </p>
          <p>Blog : {userData.blog && `${userData.blog}`}</p>
          <p>
            Twitter :{" "}
            {userData.twitter_username && `${userData.twitter_username}`}
          </p>
          <p>Bio : {userData.bio && `${userData.bio}`}</p>
          {userData.html_url && (
            <a target="_blank" rel="noreferrer" href={`${userData.html_url}`}>
              {" "}
              Visit Profile : {`${userData.html_url}`}{" "}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
