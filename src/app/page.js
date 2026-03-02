"use client";

import { useState } from "react";

import AnnouncementBar from "@/components/home/AnnouncementBar";
import HeroSection from "@/components/home/HeroSection";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import ReviewsStrip from "@/components/home/ReviewsStrip";
import CTABanner from "@/components/home/CTABanner";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SideMenu from "@/components/layout/SideMenu";

import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  function handleAddToCart(dish) {
    setCartCount((prev) => prev + 1);
  }

  return (
    <main>
      <AnnouncementBar />
      <Navbar cartCount={cartCount} onMenuOpen={() => setMenuOpen(true)} />
      <HeroSection />
      <FeaturedDishes onAddToCart={handleAddToCart} />
      <ReviewsStrip />
      <CTABanner />
      <Footer />
      <SideMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        isLoggedIn={isLoggedIn}
        userName={userName}
      />
      <ScrollToTop />
    </main>
  );
}
