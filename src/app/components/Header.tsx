"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [cartCount, setCartCount] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(storedCart.length);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-[#E8C6B0] to-[#F0D7C3] shadow-lg py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="rounded-full hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="flex items-center md:hidden space-x-4">
          <Link href="/Cart">
            <div className="relative">
              <AiOutlineShoppingCart className="text-[#5D3D2F] text-2xl cursor-pointer" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>

          {isMenuOpen ? (
            <HiOutlineX
              className="text-2xl text-[#5D3D2F] cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <HiOutlineMenu
              className="text-2xl text-[#5D3D2F] cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none md:flex md:space-x-10 text-lg font-medium`}
        >
          <Link
            href="/"
            className="block md:inline-block text-[#5D3D2F] hover:text-black hover:underline py-2 px-4"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block md:inline-block text-[#5D3D2F] hover:text-black hover:underline py-2 px-4"
          >
            About
          </Link>
          <Link
            href="/Shop"
            className="block md:inline-block text-[#5D3D2F] hover:text-black hover:underline py-2 px-4"
          >
            Shop
          </Link>
          <Link
            href="/ContactUs"
            className="block md:inline-block text-[#5D3D2F] hover:text-black hover:underline py-2 px-4"
          >
            Contact Us
          </Link>
        </nav>

        {/* Search and Cart Icons for Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border border-[#5D3D2F] rounded-full py-2 px-4 pl-10 w-64 text-[#5D3D2F] shadow-sm focus:ring-2 focus:ring-[#5D3D2F]"
            />
            <AiOutlineSearch className="absolute left-3 top-3 text-gray-500" />
          </div>

          <Link href="/Cart">
            <div className="relative">
              <AiOutlineShoppingCart className="text-[#5D3D2F] text-2xl cursor-pointer" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
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
