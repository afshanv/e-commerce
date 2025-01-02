"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Define IProduct interface
interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const ShopPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false); // State to track client-side rendering

  // Make sure useRouter is used only on the client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fetch products from API on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data: IProduct[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product: IProduct) => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    storedCart.push(product);
    localStorage.setItem("cart", JSON.stringify(storedCart));
  };

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  // Render the component only after client-side rendering is complete
  if (!isClient) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#a59d84] to-[#ecebde]">
      <div className="max-w-7xl mx-auto py-10 px-6">
        <h1 className="text-3xl font-bold text-center mb-16 text-white">Products Available</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition-shadow"
            >
              <div className="h-40 w-40 flex justify-center items-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={90}
                  className="rounded-lg object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold mt-4 text-center">{product.title}</h2>
              <p className="text-md text-green-700 font-bold mt-2">Price: ${product.price}</p>
              <p className="text-sm text-gray-700 mt-2">
                <span className="font-bold text-blue-600">Description:</span> {product.description}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                <span className="font-bold text-orange-600">Category:</span> {product.category}
              </p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 bg-blue-500 text-white p-2 rounded-lg"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
