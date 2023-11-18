import React from "react";
import "../componentStyles/ProductGrid.css";
import Hoodie from "/productImages/Hoodie.jpg";
// OLD
const products = [
  {
    id: 1,
    name: "Stylish Jacket",
    description: "A fashionable jacket for all occasions.",
    image: Hoodie, // Path to your jacket image
    price: 49.99,
    brand: "SIKSILK",
  },
  {
    id: 2,
    name: "Comfortable Sneakers",
    description: "Durable and comfortable sneakers for daily wear.",
    image: Hoodie, // Path to your sneakers image
    price: 79.99,
    brand: "SIKSILK",
  },
  {
    id: 3,
    name: "Casual Jeans",
    description: "Classic jeans for a trendy look.",
    image: Hoodie, // Path to your jeans image
    price: 39.99,
    brand: "SIKSILK",
  },
  {
    id: 4,
    name: "Casual Jeans",
    description: "Classic jeans for a trendy look.",
    image: Hoodie, // Path to your jeans image
    price: 39.99,
    brand: "SIKSILK",
  },
  {
    id: 5,
    name: "Casual Jeans",
    description: "Classic jeans for a trendy look.",
    image: Hoodie, // Path to your jeans image
    price: 39.99,
    brand: "SIKSILK",
  },
  {
    id: 6,
    name: "Casual Jeans",
    description: "Classic jeans for a trendy look.",
    image: Hoodie, // Path to your jeans image
    price: 39.99,
    brand: "SIKSILK",
  },
  // Add more product objects as needed
];

const ProductGrid = () => {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <div className="product-item" key={index}>
          {/* Render your product information inside this div */}
          <img src={product.image} alt={product.name} />
          <p>{product.brand}</p>
          <p>{product.name}</p>
          <p className="product-price">{product.price}</p>
          <button className="product-button">Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
