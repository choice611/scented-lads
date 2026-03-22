"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Luxury Scented Candle",
    slug: "luxury-scented-candle",
    price: 12.99,
    moq: 500,
    category: "Candles",
    description: "Premium soy wax candle with natural fragrance oils. Long burn time 40-50 hours.",
    image: "/images/candle-1.jpg",
    alibabaUrl: "https://scentedlads.en.alibaba.com",
  },
  {
    id: 2,
    name: "Reed Diffuser Set",
    slug: "reed-diffuser-set",
    price: 8.50,
    moq: 500,
    category: "Diffusers",
    description: "Long-lasting home fragrance with natural rattan reeds. Multiple scents available.",
    image: "/images/diffuser-1.jpg",
    alibabaUrl: "https://scentedlads.en.alibaba.com",
  },
  {
    id: 3,
    name: "LED Flameless Candle",
    slug: "led-flameless-candle",
    price: 6.99,
    moq: 1000,
    category: "LED Candles",
    description: "Safe and reusable flameless candle with realistic flickering effect.",
    image: "/images/led-candle-1.jpg",
    alibabaUrl: "https://scentedlads.en.alibaba.com",
  },
  {
    id: 4,
    name: "Soy Wax Beads",
    slug: "soy-wax-beads",
    price: 4.50,
    moq: 200,
    category: "Raw Materials",
    description: "Natural soy wax beads for candle making. Eco-friendly and clean burning.",
    image: "/images/wax-beads.jpg",
    alibabaUrl: "https://scentedlads.en.alibaba.com",
  },
];

const categories = ["All", "Candles", "Diffusers", "LED Candles", "Raw Materials"];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"alibaba" | "crypto" | null>(null);

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleBuyNow = (product: any) => {
    setSelectedProduct(product);
    setShowPayment(true);
    setPaymentMethod(null);
  };

  const handleAlibabaPayment = () => {
    if (selectedProduct) {
      window.open(selectedProduct.alibabaUrl, "_blank");
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-secondary">🕯️ Scented Lads</Link>
            <div className="flex space-x-8">
              <Link href="/products" className="text-gray-700 hover:text-accent">Products</Link>
              <Link href="/about" className="text-gray-700 hover:text-accent">About Us</Link>
              <Link href="/contact" className="text-gray-700 hover:text-accent">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-secondary mb-4">Our Products</h1>
          <p className="text-lg text-gray-700">Premium quality scented candles and home fragrance</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === cat
                    ? "bg-accent text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">{product.category}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-accent">${product.price}</span>
                    <span className="text-sm text-gray-500">MOQ: {product.moq}</span>
                  </div>
                  <button
                    onClick={() => handleBuyNow(product)}
                    className="w-full bg-secondary text-white py-2 rounded-lg font-semibold hover:bg-opacity-90 transition"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {showPayment && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-secondary">Choose Payment Method</h2>
              <button
                onClick={() => setShowPayment(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            {!paymentMethod ? (
              <div className="space-y-4">
                <button
                  onClick={handleAlibabaPayment}
                  className="w-full p-4 border-2 border-orange-500 rounded-lg hover:bg-orange-50 transition text-left"
                >
                  <div className="font-bold text-lg mb-1">🏪 Alibaba Secure Trade</div>
                  <div className="text-sm text-gray-600">
                    • Safe & Protected<br/>
                    • Credit Card / PayPal accepted<br/>
                    • Redirect to Alibaba store
                  </div>
                </button>

                <button
                  onClick={() => setPaymentMethod("crypto")}
                  className="w-full p-4 border-2 border-green-500 rounded-lg hover:bg-green-50 transition text-left"
                >
                  <div className="font-bold text-lg mb-1">₿ Crypto Payment (ETH/USDT)</div>
                  <div className="text-sm text-gray-600">
                    • 5% discount applied<br/>
                    • Direct transfer<br/>
                    • ERC20 USDT or ETH
                  </div>
                </button>
              </div>
            ) : (
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Crypto Payment Details</h3>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <p className="text-sm text-gray-600 mb-2">Product: {selectedProduct.name}</p>
                  <p className="text-sm text-gray-600 mb-2">
                    Original Price: <span className="font-bold">${selectedProduct.price}</span>
                  </p>
                  <p className="text-sm text-green-600 mb-2">
                    Crypto Price (5% OFF): <span className="font-bold text-lg">${(selectedProduct.price * 0.95).toFixed(2)}</span>
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Send USDT (ERC20) or ETH to:</p>
                  <div className="bg-white border-2 border-gray-300 p-3 rounded break-all font-mono text-sm">
                    0xb6389c75434e2c0ecd3b3f4756e4cf03778b8153
                  </div>
                </div>

                <div className="flex justify-center mb-4">
                  <QRCodeSVG
                    value="0xb6389c75434e2c0ecd3b3f4756e4cf03778b8153"
                    size={200}
                  />
                </div>

                <p className="text-xs text-gray-500 mb-4">
                  After transfer, please send confirmation email to:<br/>
                  <span className="font-semibold">liuyi@yangpuboyue.com</span>
                </p>

                <button
                  onClick={() => setPaymentMethod(null)}
                  className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition"
                >
                  Back
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-secondary text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2026 Scented Lads. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
