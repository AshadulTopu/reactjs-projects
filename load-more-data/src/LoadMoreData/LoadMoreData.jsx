import { useEffect, useState } from "react";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const json = await response.json();
    //   if (json && json.products && json.products.length > 0) {
    //     setData((prev) => [...prev, ...json.products]);
    //     setLoading(false);
    //   }
        if (count > 0) {
          setData((prev) => [...prev, ...json.products]);
          setLoading(false);
        } else {
          setData(json.products);
          setLoading(false);
        }
      //   setData(json);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // update data when count changes
  useEffect(() => {
    fetchData();
  }, [count]);

  // disable button when data length is 100
  useEffect(() => {
    if (data.length === 100) setDisableBtn(true);
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="products-card">
        {data?.map(
          (item) => (
            // console.log(item),
            (
              <div className="card" key={item.id}>
                <div className="card-thumb">
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>{item.price}</p>
              </div>
            )
          )
        )}
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          className="load-more-btn"
          disabled={disableBtn}
          onClick={() => setCount(count + 1)}
        >
          Load More
        </button>
        <p>Products: {data.length}</p>
        <p> {disableBtn ? "You have reached the end" : null}</p>
      </div>
    </div>
  );
};

export default LoadMoreData;
