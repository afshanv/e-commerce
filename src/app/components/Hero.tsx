import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[600px] bg-gray-100 overflow-hidden animate__animated animate__zoomIn">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/baner.png"
          alt="Hero Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"></div>

      {/* Hero Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white animate-fadeIn">
        <h1 className="text-7xl sm:text-6xl font-bold mb-8 tracking-wide">
          Exclusive Offers Just for You!
        </h1>
        <p className="text-3xl sm:text-2xl mb-12">Discover the best deals on our top-rated products.</p>

        {/* Call to Action Buttons */}
        <div className="flex justify-center gap-6">
          <button className="bg-[#996045] hover:bg-[#814732] text-white py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all">
            Shop Now
          </button>
          <button className="bg-transparent border-2 border-white py-3 px-8 rounded-full text-lg text-white hover:bg-white hover:text-black transition-all">
            Browse Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;