import React, { useState, useEffect } from "react";
import "../componentStyles/ProductGrid.css";

const ProductComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  if (!Array.isArray(products)) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-item" key={index}>
            {/* Render your product information inside this div */}
            <img src={product.image} alt={product.name} />
            <p>{product.brand}</p>
            <p>{product.name}</p>
            <p className="product-price">${product.price}</p>
            <button className="product-button">Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;
