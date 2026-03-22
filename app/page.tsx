"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className={`text-2xl font-bold transition-colors ${scrolled ? "text-[#1A1A1A]" : "text-white"}`}>
              <span className="font-['Playfair_Display']">SCENTED LADS</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/products" className={`font-medium transition-colors ${scrolled ? "text-[#333333] hover:text-[#C9A962]" : "text-white hover:text-[#C9A962]"}`}>
                COLLECTIONS
              </Link>
              <Link href="/about" className={`font-medium transition-colors ${scrolled ? "text-[#333333] hover:text-[#C9A962]" : "text-white hover:text-[#C9A962]"}`}>
                ABOUT
              </Link>
              <Link href="/contact" className={`font-medium transition-colors ${scrolled ? "text-[#333333] hover:text-[#C9A962]" : "text-white hover:text-[#C9A962]"}`}>
                CONTACT
              </Link>
            </div>
            <Link 
              href="/products"
              className="bg-[#1A1A1A] text-white px-6 py-2 text-sm font-medium hover:bg-[#333333] transition-colors"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
        <div className="relative z-10 text-center px-4">
          <p className="text-[#C9A962] text-sm mb-4 tracking-[0.3em] uppercase">Premium Handcrafted</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Playfair_Display']">
            LUXURY SCENTED<br />
            <span className="text-[#C9A962]">CANDLES</span>
          </h1>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Elevate your space with our artisan-crafted fragrances.
          </p>
          <Link href="/products" className="bg-[#C9A962] text-white px-10 py-4 text-sm font-medium tracking-wider hover:bg-[#D4AF37] transition-colors">
            EXPLORE COLLECTION
          </Link>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C9A962] text-sm tracking-[0.2em] uppercase mb-4">OUR STORY</p>
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6 font-['Playfair_Display']">Crafted with Passion</h2>
              <p className="text-gray-600 text-lg mb-6">
                At Scented Lads, we blend premium soy wax with carefully selected essential oils 
                to create fragrances that transform your space.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-[#C9A962] mb-2">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#C9A962] mb-2">50+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#C9A962] mb-2">100%</div>
                  <div className="text-sm text-gray-600">Natural</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 aspect-square"></div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#C9A962] text-sm tracking-[0.2em] uppercase mb-4">OUR COLLECTIONS</p>
            <h2 className="text-4xl font-bold text-[#1A1A1A] font-['Playfair_Display']">Signature Fragrances</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {["Floral", "Woody", "Citrus"].map((name) => (
              <div key={name} className="group cursor-pointer">
                <div className="aspect-square bg-gray-200 mb-6"></div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2 font-['Playfair_Display']">{name} Collection</h3>
                <p className="text-gray-600 mb-4">Premium handcrafted candles</p>
                <Link href="/products" className="text-[#C9A962] font-medium hover:text-[#D4AF37]">SHOP NOW →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 font-['Playfair_Display']">SCENTED LADS</h3>
              <p className="text-gray-400 mb-6">Premium handcrafted candles.</p>
              <p className="text-gray-400">📧 liuyi@yangpuboyue.com</p>
            </div>
            <div>
              <h4 className="font-bold mb-6">COLLECTIONS</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/products" className="hover:text-[#C9A962]">Floral</Link></li>
                <li><Link href="/products" className="hover:text-[#C9A962]">Woody</Link></li>
                <li><Link href="/products" className="hover:text-[#C9A962]">Citrus</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">COMPANY</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/about" className="hover:text-[#C9A962]">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-[#C9A962]">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">CONTACT</h4>
              <p className="text-gray-400">liuyi@yangpuboyue.com</p>
              <p className="text-gray-400">scentedlads.en.alibaba.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; 2026 Scented Lads. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
