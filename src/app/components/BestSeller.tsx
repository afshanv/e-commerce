import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BestSellers = () => {
  const bestSellerItems = [
    {
      id: 1,
      title: 'Leather Handbag',
      image: '/pars.webp',
      price: '$149.99',
      link: '/product/leather-handbag',
    },
    {
      id: 2,
      title: 'Smart Sunglasses',
      image: '/glasses.jpg',
      price: '$89.99',
      link: '/product/smart-sunglasses',
    },
    {
      id: 3,
      title: 'Modern Wallet',
      image: '/wallet.jpg',
      price: '$49.99',
      link: '/product/modern-wallet',
    },
  ];

  return (
    <section className="py-16  bg-gradient-to-r from-[#A8CD89] to-[#F9C0AB] shadow-lg shadow-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#5D3D2F]">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellerItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src={item.image} alt={item.title} width={500} height={500} className="w-full h-64 object-cover" />
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

export default BestSellers;
