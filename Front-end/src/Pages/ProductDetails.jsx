import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(setProduct);
  }, []);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <img src={product.image} />
      <h1 className="text-2xl">{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
