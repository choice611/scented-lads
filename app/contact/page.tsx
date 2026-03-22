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
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
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
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-secondary mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Have questions about our products or services? We're here to help! 
                Feel free to reach out to us through any of the following channels.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Email</h3>
                    <p className="text-gray-600">liuyi@yangpuboyue.com</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">🌐</div>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Alibaba Store</h3>
                    <a 
                      href="https://scentedlads.en.alibaba.com" 
                      target="_blank"
                      className="text-accent hover:underline"
                    >
                      https://scentedlads.en.alibaba.com
                    </a>
                    <p className="text-sm text-gray-500">Browse our full product catalog</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">💬</div>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">WhatsApp / WeChat</h3>
                    <p className="text-gray-600">Available upon request</p>
                    <p className="text-sm text-gray-500">Quick response for urgent inquiries</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">🏢</div>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM (GMT+8)</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM (GMT+8)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Product Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-lg mb-2 text-secondary">What is your MOQ?</h3>
              <p className="text-gray-600">
                Our minimum order quantity varies by product, typically starting from 500 pieces 
                for most items. Contact us for specific requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-lg mb-2 text-secondary">What is your lead time?</h3>
              <p className="text-gray-600">
                Standard lead time is 30-45 days after order confirmation and deposit payment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-lg mb-2 text-secondary">Do you offer samples?</h3>
              <p className="text-gray-600">
                Yes, we offer free samples for qualified buyers. Freight cost is to be covered 
                by the buyer.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-lg mb-2 text-secondary">Can you do custom products?</h3>
              <p className="text-gray-600">
                Absolutely! We offer OEM/ODM services including custom scents, packaging, 
                and labeling.
              </p>
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
