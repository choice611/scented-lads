"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { products } from "../../../data/products";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(500);
  const [showPayment, setShowPayment] = useState(false);

  const product = products.find(p => p.slug === slug) || products[0];

  const getPrice = () => {
    if (quantity >= 1000) return product.price.min;
    return product.price.max;
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
              <Link href="/products" className="text-gray-300 hover:text-[#C9A962] transition">
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

      {/* Product Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Images */}
            <div>
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">🕯️</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square bg-gray-100 rounded ${
                      selectedImage === idx ? "ring-2 ring-[#C9A962]" : ""
                    }`}
                  >
                    <span className="text-2xl">🕯️</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <p className="text-[#C9A962] text-sm uppercase tracking-wide mb-2">
                {product.category}
              </p>
              <h1 className="text-3xl font-bold font-['Playfair_Display'] text-[#1A1A1A] mb-4">
                {product.name}
              </h1>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-[#C9A962]">
                    ${getPrice().toFixed(2)}
                  </span>
                  <span className="text-gray-500">/piece</span>
                </div>
                <p className="text-sm text-gray-600">
                  Price range: ${product.price.min} - ${product.price.max}
                </p>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity (MOQ: {product.moq} pieces)
                </label>
                <input
                  type="number"
                  min={product.moq}
                  step={product.moq}
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A962]"
                />
                {quantity >= 1000 && (
                  <p className="text-green-600 text-sm mt-2">✓ Bulk discount applied!</p>
                )}
              </div>

              {/* Actions */}
              <div className="space-y-4 mb-8">
                <button
                  onClick={() => setShowPayment(true)}
                  className="w-full bg-[#C9A962] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#D4AF37] transition"
                >
                  BUY NOW
                </button>
                <button
                  onClick={() => window.open(product.alibabaUrl, "_blank")}
                  className="w-full bg-[#1A1A1A] text-white py-4 rounded-lg font-bold hover:bg-[#333333] transition"
                >
                  VIEW ON ALIBABA
                </button>
              </div>

              {/* Info Boxes */}
              <div className="border-t pt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📦</span>
                  <div>
                    <p className="font-medium">MOQ: {product.moq} pieces</p>
                    <p className="text-sm text-gray-600">Minimum order quantity</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⏱️</span>
                  <div>
                    <p className="font-medium">Lead Time: 30-45 days</p>
                    <p className="text-sm text-gray-600">After order confirmation</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="font-medium">Certified: CE/FCC/MSDS</p>
                    <p className="text-sm text-gray-600">International standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-['Playfair_Display'] mb-6">Product Details</h2>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              {product.description}
            </p>
            
            <h3 className="text-xl font-bold mb-4">Specifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between py-3 border-b">
                  <span className="font-medium text-gray-700 capitalize">{key}</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {showPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowPayment(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6 text-center">
              Choose Payment Method
            </h2>

            {/* Alibaba */}
            <div className="mb-4">
              <button
                onClick={() => window.open(product.alibabaUrl, "_blank")}
                className="w-full p-4 border-2 border-orange-500 rounded-lg hover:bg-orange-50 transition text-left"
              >
                <div className="font-bold text-lg mb-1">🏪 Alibaba Secure Trade</div>
                <div className="text-sm text-gray-600">
                  ✓ Buyer Protection<br/>
                  ✓ Credit Card / PayPal<br/>
                  ✓ Trade Assurance
                </div>
              </button>
            </div>

            {/* Crypto */}
            <div className="mb-4">
              <button
                onClick={() => {/* Show crypto */}}
                className="w-full p-4 border-2 border-green-500 rounded-lg hover:bg-green-50 transition text-left"
              >
                <div className="font-bold text-lg mb-1">₿ Crypto Payment (5% OFF)</div>
                <div className="text-sm text-gray-600">
                  ✓ ETH / USDT (ERC20)<br/>
                  ✓ 5% Discount<br/>
                  ✓ Wallet: 0xb6389c75434e2c0ecd3b3f4756e4cf03778b8153
                </div>
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center">
              🔒 Secure Payment Guaranteed
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500">&copy; 2026 Scented Lads. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
