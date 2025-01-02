'use client';

import React from "react";
import HeroSection from "./components/Hero";
import FeaturedSection from "./components/Featured";
import Categories from "./components/Categories";
import BestSellers from "./components/BestSeller";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
      <div>
        {/* All Components */}
        <HeroSection />
        <FeaturedSection />
        <BestSellers />
        <Categories />
        <Newsletter />
      </div>

  );
}
