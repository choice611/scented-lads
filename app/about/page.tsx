import Link from "next/link";

export default function AboutPage() {
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
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-secondary mb-4">About Us</h1>
          <p className="text-lg text-gray-700">Your trusted partner in home fragrance</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Scented Lads is a professional manufacturer of premium scented candles and home fragrance products, 
                with over 10 years of experience in the industry.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We specialize in creating high-quality, eco-friendly candles using natural soy wax and premium 
                fragrance oils. Our products are exported to customers worldwide, including North America, Europe, 
                and the Middle East.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to bring warmth and ambiance to homes around the world while maintaining the highest 
                standards of quality and sustainability.
              </p>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-6xl">🏭</span>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">Our Certifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-secondary mb-2">CE Certified</h3>
              <p className="text-gray-600">European safety and quality standards</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-secondary mb-2">FCC Certified</h3>
              <p className="text-gray-600">US Federal Communications Commission approved</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-secondary mb-2">MSDS Certified</h3>
              <p className="text-gray-600">Material Safety Data Sheet compliant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-accent mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">100%</div>
              <div className="text-gray-600">Quality Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2026 Scented Lads. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
