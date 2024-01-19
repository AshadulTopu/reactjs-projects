const Suggestion = ({ data, handleSelect }) => {
  console.log(data);
  return (
    <ul className="suggestion">
      {data && data.length > 0
        ? data.map((item, index) => (
            <li key={index}>
              <div className="suggestion-item">
                <div className="suggestion-thumb">
                  <img src={item.thumbnail} />
                </div>
                <div className="suggestion-title" onClick={handleSelect}>
                  {item.title}
                </div>
              </div>
            </li>
          ))
        : null}
    </ul>
  );
};

export default Suggestion;
