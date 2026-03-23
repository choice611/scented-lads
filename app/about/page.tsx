import Link from "next/link";

export default function AboutPage() {
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
              <Link href="/about" className="text-[#C9A962] font-medium">
                ABOUT
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-[#C9A962] transition">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A1A1A] to-[#333333] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#C9A962] text-sm tracking-[0.3em] uppercase mb-4">
            OUR STORY
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-4">
            Crafted with Passion & Care
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Bringing warmth and ambiance to homes around the world since 2025
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6 font-['Playfair_Display']">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                At Scented Lads, we believe that every candle tells a story. Our master 
                craftsmen blend premium soy wax with carefully selected essential oils to 
                create fragrances that transform your space into a sanctuary of tranquility.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded in 2025, we've grown from a small workshop to a trusted manufacturer 
                serving customers in over 50 countries worldwide.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Each candle is hand-poured in small batches, ensuring exceptional quality and 
                attention to detail. We're committed to sustainability, using only eco-friendly 
                materials and ethical sourcing practices.
              </p>
            </div>
            <div className="bg-gray-100 aspect-square rounded-lg flex items-center justify-center">
              <span className="text-6xl">🕯️</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#C9A962] mb-2">10+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#C9A962] mb-2">50+</div>
              <div className="text-gray-400">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#C9A962] mb-2">100%</div>
              <div className="text-gray-400">Natural Ingredients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#C9A962] mb-2">500+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1A1A1A] mb-12 font-['Playfair_Display']">
            Our Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">CE Certified</h3>
              <p className="text-gray-600">
                European safety and quality standards compliance
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">FCC Certified</h3>
              <p className="text-gray-600">
                US Federal Communications Commission approved
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">MSDS Certified</h3>
              <p className="text-gray-600">
                Material Safety Data Sheet compliant
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1A1A1A] mb-12 font-['Playfair_Display']">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Eco-friendly materials and ethical sourcing
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-600">
                Hand-poured in small batches for excellence
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💛</div>
              <h3 className="text-xl font-bold mb-2">Craftsmanship</h3>
              <p className="text-gray-600">
                Master craftsmen with years of experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12">
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
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">COMPANY</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about" className="text-[#C9A962]">About Us</Link></li>
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
