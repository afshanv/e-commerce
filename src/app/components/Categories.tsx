import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Categories = () => {
  const categoryItems = [
    {
      id: 1,
      title: 'Mens Fashion',
      image: '/man3.webp',
      link: '/category/mens-fashion',
    },
    {
      id: 2,
      title: 'Womens Fashion',
      image: '/woman.jpg',
      link: '/category/womens-fashion',
    },
    {
      id: 3,
      title: 'Accessories',
      image: '/Accessories.webp',
      link: '/category/accessories',
    },
  ];

  return (
    <section className="py-16  bg-gradient-to-r from-[#A8CD89] to-[#F9C0AB] shadow-lg shadow-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#5D3D2F]">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryItems.map((item) => (
            <div key={item.id} className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src={item.image} alt={item.title} width={500} height={500} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center">
                <Link href={item.link} className="text-white text-2xl font-semibold hover:underline">
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
