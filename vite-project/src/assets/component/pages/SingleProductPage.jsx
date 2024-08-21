import React from "react";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams;
  return <div>SingleProductPage product id:{id}</div>;
};

export default SingleProductPage;
