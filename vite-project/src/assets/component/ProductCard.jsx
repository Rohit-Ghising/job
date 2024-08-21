import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="border rounded-xl shadow-md p-4">
      <img
        src={item.images[0]}
        alt=""
        className="aspect-square w-full rounded-md"
      />
      <h1>{item.title}</h1>
      <p>{item.category.name}</p>
      <p>{item.price}</p>
      <button className="bg bg-red-600 hover:bg-blue-200 rounded-lg">
        ADd to cart
      </button>
    </div>
  );
};

export default ProductCard;
