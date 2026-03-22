import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-secondary">🕯️ Scented Lads</div>
            <div className="hidden md:flex space-x-8">
              <Link href="/products" className="text-gray-700 hover:text-accent">Products</Link>
              <Link href="/about" className="text-gray-700 hover:text-accent">About Us</Link>
              <Link href="/contact" className="text-gray-700 hover:text-accent">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-secondary mb-4">
            Premium Scented Candles & Home Fragrance
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Professional manufacturer with 10+ years experience. CE/FCC/MSDS certified.
          </p>
          <Link 
            href="/products"
            className="bg-accent text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-secondary transition"
          >
            View Products
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="font-bold text-lg mb-2">Factory Direct</h3>
              <p className="text-gray-600">Competitive pricing with no middleman</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="font-bold text-lg mb-2">Certified Quality</h3>
              <p className="text-gray-600">CE/FCC/MSDS certified products</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-bold text-lg mb-2">Custom Service</h3>
              <p className="text-gray-600">Your brand, your scent, your design</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
              <p className="text-gray-600">30-45 days lead time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">Featured Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Product Image</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Luxury Scented Candle</h3>
                <p className="text-gray-600 mb-4">Premium soy wax with natural fragrance</p>
                <Link href="/products" className="text-accent font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Product Image</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Reed Diffuser Set</h3>
                <p className="text-gray-600 mb-4">Long-lasting home fragrance solution</p>
                <Link href="/products" className="text-accent font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Product Image</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">LED Flameless Candle</h3>
                <p className="text-gray-600 mb-4">Safe and reusable alternative</p>
                <Link href="/products" className="text-accent font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">🕯️ Scented Lads</h3>
              <p className="text-gray-300">
                Professional manufacturer of premium scented candles and home fragrance products.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/products" className="text-gray-300 hover:text-accent">Products</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-accent">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-accent">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li>📧 liuyi@yangpuboyue.com</li>
                <li>🌐 https://scentedlads.en.alibaba.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Scented Lads. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
