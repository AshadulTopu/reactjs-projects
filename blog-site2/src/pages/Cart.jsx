import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductsList/ProductList";

const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);
  console.log(cart);

  useEffect(() => {
    let total = 0;
    cart.forEach(
      (item) => {
        total += item.price;
      },
      [cart]
    );
    setTotalCart(Math.round(total * 100) / 100);
  });

  console.log(totalCart);
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center font-bold">Cart</h1>
      {cart && cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <p className="text-center text-lg font-semibold mb-4">
            Cart is empty
          </p>
          <Link
            to="/"
            className="text-center py-2 px-4 text-xl font-semibold text-white bg-yellow-900 rounded-lg"
          >
            Go Home
          </Link>
        </div>
      ) : (
        <div className="flex justify-between ">
          <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cart &&
              cart.map((product) => (
                <ProductList key={product.id} product={product} />
              ))}
          </div>
          <div className="w-1/5 border border-slate-400 rounded-lg p-4">
            <p className="text-lg font-bold">Cart Summary</p>
            <p className="text-lg font-semibold">Cart Items: {cart.length}</p>
            <p className="text-lg font-semibold">Total: ${totalCart}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
