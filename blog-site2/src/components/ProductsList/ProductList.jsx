import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../../store/slices/cart-slice";

/* eslint-disable react/prop-types */
const ProductList = ({ product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  const handleAddToCart = () => {
    dispatch(addProduct(product));
  };

  const handleRemoveToCart = () => {
    dispatch(removeProduct(product));
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-start">
      <div className="w-full max-h-80 overflow-hidden">
        <img src={product?.image} alt={product?.title} className="w-full" />
      </div>
      <h2 className="text-lg font-bold my-3">{product?.title}</h2>
      <p className="text-gray-600"> Price: ${product?.price}</p>
      <p className="text-gray-600"> Category: {product?.category}</p>
      <p className="text-gray-600"> Rating: {product?.rating.rate}</p>
      <p className="text-gray-600 mb-2">
        {product?.description.slice(0, 100) + "..."}
      </p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={cart.some((item) => item.id === product.id) ? handleRemoveToCart : handleAddToCart}
      >
        {cart.some((item) => item.id === product.id)
          ? "Remove to Cart"
          : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductList;
