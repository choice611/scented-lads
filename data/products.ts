// 产品数据 - Scented Lads 阿里店铺真实产品
// 更新时间：2026-03-23 23:50
// 技术部从阿里店铺采集

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
    name: "Customized Romantic Home-Decorative Luxury Rose Gold Scent Candle",
    slug: "luxury-rose-gold-scent-candle",
    price: { min: 3.60, max: 3.80 },
    moq: 1000,
    category: "Candles",
    description: "60% Sandalwood and Pear Soy Wax Aromatherapy Scent Candle. Premium quality with long-lasting fragrance.",
    specs: {
      material: "60% Sandalwood + Pear Soy Wax",
      size: "Standard",
      weight: "Custom",
      burnTime: "40+ hours",
      scent: "Rose Gold, Sandalwood, Pear",
    },
    images: ["/images/products/rose-gold-candle.jpg"],
    alibabaUrl: "https://www.alibaba.com/product-detail/Customized-Romantic-Home-Decorative-Luxury-Rose_1601667103235.html",
  },
  {
    id: 2,
    name: "Luxury Soy Wax Art Candles",
    slug: "luxury-soy-wax-art-candles",
    price: { min: 1.29, max: 1.65 },
    moq: 100,
    category: "Candles",
    description: "Aromatherapy Fragrance Glass Jar Non-Toxic Modern Design Custom Scent for Valentine's Day Wedding",
    specs: {
      material: "Soy Wax",
      size: "Glass Jar",
      weight: "Custom",
      burnTime: "30+ hours",
      scent: "Custom Available",
    },
    images: ["/images/products/soy-wax-art-candle.jpg"],
    alibabaUrl: "https://www.alibaba.com/product-detail/Luxury-Soy-Wax-Art-Candles-Aromatherapy_1601670337906.html",
  },
  {
    id: 3,
    name: "Natural Aromatherapy Reed Diffuser Set",
    slug: "natural-aromatherapy-reed-diffuser",
    price: { min: 0.77, max: 0.77 },
    moq: 500,
    category: "Diffusers",
    description: "Alcohol Free Long Lasting Aroma BPA Free Plant Essential Oil 50ml Home Fragrance Decor",
    specs: {
      material: "Plant Essential Oil",
      size: "50ml",
      weight: "150g",
      burnTime: "2-3 months",
      scent: "Multiple Available",
    },
    images: ["/images/products/reed-diffuser-50ml.jpg"],
    alibabaUrl: "https://www.alibaba.com/product-detail/Natural-Aromatherapy-Reed-Diffuser-Set-Alcohol_1601671430479.html",
  },
  {
    id: 4,
    name: "Premium 100% Natural Soy Wax",
    slug: "premium-natural-soy-wax",
    price: { min: 1.58, max: 2.22 },
    moq: 100,
    category: "Raw Materials",
    description: "Luxe Scented Candle Base for DIY Handmade Candle Makers. High quality soy wax for container candles.",
    specs: {
      material: "100% Natural Soy Wax",
      size: "1kg",
      weight: "1kg",
      burnTime: "Varies",
      scent: "Unscented",
    },
    images: ["/images/products/soy-wax-base.jpg"],
    alibabaUrl: "https://www.alibaba.com/product-detail/Premium-100-Natural-Soy-Wax-Luxe_1601670201964.html",
  },
];

export const categories = ["All", "Candles", "Diffusers", "LED Candles", "Raw Materials"];
