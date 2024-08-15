'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { FaHome } from "react-icons/fa";

export default function shop() {
  const [cartItems, setCartItems] = useState([]);
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);

  const products = [
    { id: 1, name: 'Product 1', price: 2000 },
    { id: 2, name: 'Product 2', price: 3000 },
    { id: 3, name: 'Product 3', price: 1000 },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const toggleDiscount = () => {
    setIsDiscountApplied(!isDiscountApplied);
  };

  return (
    <>
   <Link href='/'><FaHome className='text-2xl ml-[5px]' /></Link>
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shop Now</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-800">
              {product.name}
            </h2>
            <p className="text-gray-700">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 px-4 py-2 bg-purple-100 text-white rounded-full  hover:bg-purple-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button
          onClick={toggleDiscount}
          className={`px-6 py-3 ${
            isDiscountApplied ? 'bg-red-500' : 'bg-green-500'
          } text-white rounded hover:${
            isDiscountApplied ? 'bg-red-600' : 'bg-green-600'
          }`}
        >
          {isDiscountApplied ? 'Remove Discount' : 'Apply Discount'}
        </button>
      </div>

      {cartItems.length > 0 && (
        <Link
          href={{
            pathname: '/cart',
            query: {
              cartItems: JSON.stringify(cartItems),
              isDiscountApplied: isDiscountApplied.toString(),
            },
          }}
        >
          <button className="mt-8 px-6 py-3 bg-green-200 text-white rounded-full hover:bg-green-600">
            View Cart
          </button>
        </Link>
      )}
    </div>
    </>
  );
}
