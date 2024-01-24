import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductList from "../components/ProductsList/ProductList";
const Home = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      //   if(!response.ok) {
      //     throw new Error(data.message || "Something went wrong");
      //   }
      if (data) {
        setLoading(false);
        setProductList(data);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center font-bold">Home</h1>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Circles color="#00BFFF" height={120} width={120} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {productList && productList.map((product) => (
            <ProductList key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
