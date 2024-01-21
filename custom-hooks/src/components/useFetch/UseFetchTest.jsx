import useFetch from "./useFetch";

const UseFetchTest = () => {
  const { pending, data, error } = useFetch("https://dummyjson.com/products");
  console.log(pending, data, error);
  return (
    <div>
      <h1>Use Fetch Test</h1>
      {pending ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        data && data.products.map((item) => <p key={item.id}>{item.title}</p>)
      )}
    </div>
  );
};

export default UseFetchTest;
