'use client';

import { useSearchParams, useRouter } from 'next/navigation';

export default function Cart() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Extract cartItems and isDiscountApplied from search params
  const cartItemsStr = searchParams.get('cartItems');
  const isDiscountApplied = searchParams.get('isDiscountApplied');
  const cartItems = cartItemsStr ? JSON.parse(cartItemsStr) : [];

  // Calculate total MRP
  const totalMRP = cartItems.reduce((acc, item) => acc + item.price, 0);

  // Apply discount if selected
  const discount = isDiscountApplied === 'true' ? totalMRP / 1000 : 0;
  const finalAmount = totalMRP - discount;

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Your Cart is Empty</h1>
        <button
          onClick={() => router.push('/')}
          className="px-6 py-3 bg-blue-100 text-white rounded-full hover:bg-blue-600"
        >
          Go Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 ml-[550px]">Your Cart</h1>
      <ul className="mb-4">
        {cartItems.map((item, index) => (
          <li key={index} className="text-lg text-gray-700">
            {item.name}: <span className="font-bold">${item.price}</span>
          </li>
        ))}
      </ul>
      <p className="text-lg text-gray-700">
        Total MRP: <span className="font-bold">${totalMRP}</span>
      </p>
      {isDiscountApplied === 'true' && (
        <p className="text-lg text-green-600 mt-2">
          Points Used: <span className="font-bold">-${discount}</span>
        </p>
      )}
      <p className="text-lg text-gray-700 mt-2">
        Final Amount: <span className="font-bold">${finalAmount}</span>
      </p>
      <button
        onClick={() => router.push('/')}
        className="mt-4 px-6 py-3 bg-purple-100 text-white rounded-full hover:bg-purple-600"
      >
        Continue Shopping
      </button>
      <button className='bg-green-300 rounded-full px-6 mt-[70px] absolute py-3 -ml-[170px]'>Pay Now</button>
      <div><img src="https://i.pinimg.com/originals/5a/d0/47/5ad047a18772cf0488a908d98942f9bf.gif" alt="" srcset="" className='ml-[600px] -mt-[200px] w-[700px]' /></div>
    </div>
  );
}
