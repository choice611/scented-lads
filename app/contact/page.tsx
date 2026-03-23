"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
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
              <Link href="/contact" className="text-[#C9A962] font-medium">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A1A1A] to-[#333333] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#C9A962] text-sm tracking-[0.3em] uppercase mb-4">
            GET IN TOUCH
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg">
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6 font-['Playfair_Display']">
                Get in Touch
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Have questions about our products or services? We're here to help! 
                Feel free to reach out to us through any of the following channels.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">📧</span>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A] mb-1">Email</h3>
                    <p className="text-gray-600">liuyi@yangpuboyue.com</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl">🌐</span>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A] mb-1">Alibaba Store</h3>
                    <a 
                      href="https://scentedlads.en.alibaba.com" 
                      target="_blank"
                      className="text-[#C9A962] hover:underline"
                    >
                      scentedlads.en.alibaba.com
                    </a>
                    <p className="text-sm text-gray-500">Browse our full product catalog</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl">💬</span>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A] mb-1">WhatsApp / WeChat</h3>
                    <p className="text-gray-600">Available upon request</p>
                    <p className="text-sm text-gray-500">Quick response for urgent inquiries</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl">🕒</span>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A] mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM (GMT+8)</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM (GMT+8)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6 font-['Playfair_Display']">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A962]"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A962]"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A962]"
                    placeholder="Product Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A962]"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C9A962] text-white py-3 rounded-lg font-bold hover:bg-[#D4AF37] transition"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1A1A1A] mb-12 font-['Playfair_Display']">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-[#1A1A1A]">What is your MOQ?</h3>
              <p className="text-gray-600">
                Our minimum order quantity varies by product, typically starting from 500 pieces 
                for most items. Contact us for specific requirements.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-[#1A1A1A]">What is your lead time?</h3>
              <p className="text-gray-600">
                Standard lead time is 30-45 days after order confirmation and deposit payment.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-[#1A1A1A]">Do you offer samples?</h3>
              <p className="text-gray-600">
                Yes, we offer free samples for qualified buyers. Freight cost is to be covered 
                by the buyer.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-[#1A1A1A]">Can you do custom products?</h3>
              <p className="text-gray-600">
                Absolutely! We offer OEM/ODM services including custom scents, packaging, 
                and labeling.
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
                <li><Link href="/about" className="hover:text-[#C9A962]">About Us</Link></li>
                <li><Link href="/contact" className="text-[#C9A962]">Contact</Link></li>
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
