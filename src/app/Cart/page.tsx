"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// types
interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const CartPage = () => {
  const [cart, setCart] = useState<IProduct[]>([]);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const removeFromCart = (productId: number) => {
    const isConfirmed = window.confirm("Are you sure you want to remove this item?");
    if (isConfirmed) {
      const updatedCart = cart.filter(product => product.id !== productId);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#a59d84] to-[#ecebde]">
      <div className="max-w-7xl mx-auto py-10 px-6">
        <h1 className="text-3xl font-bold text-center mb-16 text-white">Your Cart</h1>
        <div className="bg-white p-5 rounded-lg shadow-md">
          {cart.length > 0 ? (
            <>
              <div>
                {cart.map((product, index) => (
                  <div key={`${product.id}-${index}`} className="flex justify-between items-center border-b py-2">
                    <div className="flex items-center">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={50}
                        height={50}
                        className="rounded-lg object-contain"
                      />
                      <span className="ml-4">{product.title}</span>
                    </div>
                    <span className="text-sm text-green-700 font-bold">${product.price}</span>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-lg font-bold text-right">Total: ${totalPrice}</div>
              <div className="mt-6 text-center">
                <Link href="/Shop">
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Continue Shopping</button>
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center text-xl">
              Your cart is empty.{" "}
              <Link href="/"
                className="text-blue-500">Go back to the shop
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
