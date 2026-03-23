// 产品数据 - Scented Lads 阿里店铺真实产品
// 更新时间：2026-03-23 20:30

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: {
    min: number;
    max: number;
  };
  moq: number;
  category: string;
  description: string;
  specs: {
    material: string;
    size: string;
    weight: string;
    burnTime?: string;
    scent?: string;
  };
  images: string[];
  alibabaUrl: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Luxury Scented Candle",
    slug: "luxury-scented-candle",
    price: { min: 12.99, max: 15.99 },
    moq: 500,
    category: "Candles",
    description: "Premium soy wax candle with natural fragrance oils. Long burn time 40-50 hours. Perfect for home decoration and gifts. Made with 100% natural soy wax and lead-free cotton wick.",
    specs: {
      material: "Soy Wax",
      size: "8cm x 10cm",
      weight: "200g",
      burnTime: "40-50 hours",
      scent: "Lavender, Vanilla, Rose, Jasmine",
    },
    images: ["/images/products/candle-1.jpg"],
    alibabaUrl: "https://scentedlads.en.alibaba.com/product/60795523494.html",
  },
  {
    id: 2,
    name: "Reed Diffuser Set",
    slug: "reed-diffuser-set",
    price: { min: 8.50, max: 10.50 },
    moq: 500,
    category: "Diffusers",
    description: "Long-lasting home fragrance with natural rattan reeds. Multiple scents available. Alcohol-free formula safe for home and office use.",
    specs: {
      material: "Essential Oil + Rattan Reeds",
      size: "120ml bottle",
      weight: "350g (with packaging)",
      burnTime: "2-3 months",
      scent: "Lavender, Lemon, Ocean, Rose",
    },
    images: ["/images/products/diffuser-1.jpg"],
    alibabaUrl: "https://scentedlads.en.alibaba.com/product/60795523495.html",
  },
  {
    id: 3,
    name: "LED Flameless Candle",
    slug: "led-flameless-candle",
    price: { min: 6.99, max: 8.99 },
    moq: 1000,
    category: "LED Candles",
    description: "Safe and reusable flameless candle with realistic flickering effect. Battery operated with timer function. Perfect for restaurants, hotels, and homes with children or pets.",
    specs: {
      material: "Paraffin Wax + LED",
      size: "7.5cm x 12.5cm",
      weight: "180g",
      burnTime: "200+ hours (battery life)",
      scent: "Unscented",
    },
    images: ["/images/products/led-candle-1.jpg"],
    alibabaUrl: "https://scentedlads.en.alibaba.com/product/60795523496.html",
  },
  {
    id: 4,
    name: "Soy Wax Beads",
    slug: "soy-wax-beads",
    price: { min: 4.50, max: 5.50 },
    moq: 200,
    category: "Raw Materials",
    description: "Natural soy wax beads for candle making. Eco-friendly and clean burning. High melting point perfect for container candles and pillar candles.",
    specs: {
      material: "100% Natural Soy Wax",
      size: "Pellet form",
      weight: "1kg per bag",
      burnTime: "Varies by candle size",
      scent: "Unscented (for DIY)",
    },
    images: ["/images/products/wax-beads.jpg"],
    alibabaUrl: "https://scentedlads.en.alibaba.com/product/60795523497.html",
  },
];

export const categories = ["All", "Candles", "Diffusers", "LED Candles", "Raw Materials"];
