import React from 'react'

const ProductCard = ({ product, addToCart }) => (
  
  <div className="border p-4 rounded">
    
    <img src={product.image} className="h-40 w-full object-cover" />
    
    <h2 className="text-lg font-bold">{product.name}</h2>
    
    <p>${product.price}</p>
    
    <button
      className="bg-blue-500 text-white px-3 py-1 mt-2"
      onClick={() => addToCart(product)}>
      Add to Cart
    </button>
  </div>
);


export default ProductCard;
