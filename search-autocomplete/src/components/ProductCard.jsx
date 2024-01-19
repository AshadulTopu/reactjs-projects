const ProductCard = ({ products }) => {
  //   console.log(products);
  return (
    <div>
      <h1>Product Card</h1>
      <div className="product-list">
        {products.map((product) => {
          return (
            <div key={product.id} className="product-card">
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p> Price : ${product.price}</p>
              <p> Category : {product.category}</p>
              <p> Brand : {product.brand}</p>
              <p> Rating : {product.rating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
