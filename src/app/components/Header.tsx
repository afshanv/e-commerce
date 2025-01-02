"use client"
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import React, { useEffect, useState } from "react";

const Header = () => {

  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(storedCart.length);
  }, []);

  return (
    <header className="bg-gradient-to-r from-[#E8C6B0] to-[#F0D7C3] shadow-lg py-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center mb-2 md:mb-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-4 lg:space-x-10 text-base md:text-lg font-medium">
          <Link href="/" className="text-[#5D3D2F] hover:text-black hover:underline">
            Home
          </Link>
          <Link href="/about" className="text-[#5D3D2F] hover:text-black hover:underline">
            About
          </Link>
          <Link href="/Shop" className="text-[#5D3D2F] hover:text-black hover:underline">
            Shop
          </Link>
          <Link href="/ContactUs" className="text-[#5D3D2F] hover:text-black hover:underline">
            Contact Us
          </Link>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div className="block md:hidden">
          <button className="text-[#5D3D2F] text-xl focus:outline-none">
            ☰
          </button>
        </div>

        {/* Search and Icons */}
        <div className="flex items-center space-x-2 md:space-x-4 mt-2 md:mt-0">
          {/* Search Bar */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="border border-[#5D3D2F] rounded-full py-2 px-4 pl-10 w-48 md:w-64 text-[#5D3D2F] shadow-sm focus:ring-2 focus:ring-[#5D3D2F]"
            />
            <AiOutlineSearch className="absolute left-3 top-3 text-gray-500" />
          </div>

          {/* Cart Icon */}
          <Link href="/Cart">
            <div className="relative">
              <AiOutlineShoppingCart className="text-[#5D3D2F] text-2xl cursor-pointer" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
