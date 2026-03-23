"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "../../data/products";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [showPayment, setShowPayment] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showCrypto, setShowCrypto] = useState(false);

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleBuyNow = (product: any) => {
    setSelectedProduct(product);
    setShowPayment(true);
  };

  return (
    <main className="min-h-screen bg-[#F8F8F8]">
      {/* Navigation */}
      <nav className="bg-[#1A1A1A] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold font-['Playfair_Display']">
              🕯️ SCENTED LADS
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/products" className="text-[#C9A962] font-medium">
                COLLECTIONS
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-[#C9A962] transition">
                ABOUT
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-[#C9A962] transition">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-br from-[#1A1A1A] to-[#333333] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#C9A962] text-sm tracking-[0.3em] uppercase mb-4">
            OUR COLLECTIONS
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-4">
            Premium Handcrafted Candles
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover our range of luxury scented candles and home fragrance products
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {["All", "Candles", "Diffusers", "LED Candles", "Raw Materials"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                    selectedCategory === cat
                      ? "bg-[#C9A962] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A962]"
            >
              <option value="default">Sort by: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="moq-asc">MOQ: Low to High</option>
            </select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group">
                {/* Image */}
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <span className="text-4xl">🕯️</span>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition" />
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="text-xs text-[#C9A962] uppercase tracking-wide mb-2">
                    {product.category}
                  </p>
                  <h3 className="font-bold text-lg text-[#1A1A1A] mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  {/* Price */}
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xl font-bold text-[#C9A962]">
                      ${product.price.min}-{product.price.max}
                    </span>
                    <span className="text-xs text-gray-500">/piece</span>
                  </div>

                  {/* MOQ */}
                  <p className="text-sm text-gray-600 mb-4">
                    MOQ: {product.moq} pieces
                  </p>

                  {/* Actions */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="w-full bg-[#1A1A1A] text-white py-3 rounded-lg font-medium hover:bg-[#333333] transition block text-center"
                  >
                    VIEW DETAILS
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-['Playfair_Display']">SCENTED LADS</h3>
              <p className="text-gray-400 text-sm">
                Premium handcrafted candles and home fragrance products.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">COLLECTIONS</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/products" className="hover:text-[#C9A962]">Candles</Link></li>
                <li><Link href="/products" className="hover:text-[#C9A962]">Diffusers</Link></li>
                <li><Link href="/products" className="hover:text-[#C9A962]">LED Candles</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">COMPANY</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-[#C9A962]">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-[#C9A962]">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">CONTACT</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>📧 liuyi@yangpuboyue.com</li>
                <li>🌐 scentedlads.en.alibaba.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2026 Scented Lads. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
