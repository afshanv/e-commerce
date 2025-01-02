import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-16 bg-[#E8C6B0]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#5D3D2F] mb-6">Stay Updated</h2>
        <p className="text-lg text-[#5D3D2F] mb-8">Subscribe to our newsletter and get exclusive offers and updates.</p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-1/2 py-2 px-4 rounded-lg border border-gray-300 focus:outline-none"
          />
          <button type="submit" className="bg-[#5D3D2F] text-white py-2 px-6 rounded-lg hover:bg-black transition">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
