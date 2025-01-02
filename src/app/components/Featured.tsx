import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedSection = () => {
  const featuredItems = [
    {
      id: 1,
      title: 'Stylish Jacket',
      image: '/jakit.jpg',
      price: '$99.99',
      link: '/product/stylish-jacket',
    },
    {
      id: 2,
      title: 'Classic Sneakers',
      image: '/sneeker.webp',
      price: '$79.99',
      link: '/product/classic-sneakers',
    },
    {
      id: 3,
      title: 'Elegant Watch',
      image: '/watch.webp',
      price: '$199.99',
      link: '/product/elegant-watch',
    },
  ];

  return (
    <section className="py-36  bg-gradient-to-r from-[#A8CD89] to-[#F9C0AB] shadow-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#5D3D2F]">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src={item.image} alt={item.title} width={200} height={200} className="w-full h-64 " />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-[#5D3D2F]">{item.title}</h3>
                <p className="text-lg text-gray-700 mt-4">{item.price}</p>
                <Link href={item.link} className="block mt-6 bg-[#996045] text-white py-2 px-4 rounded-lg hover:bg-[#774433] transition">
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
