
import { Banner, Product, ProfileContact, Video } from "../types";

export const products: Product[] = [
  {
    id: 1,
    name: "Smartphone XS Pro",
    price: 799.99,
    imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2042&auto=format",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format"
    ],
    description: "Latest model with 8K camera and 5G connectivity. Includes AI-powered features and all-day battery life.",
    rating: 4.8,
    ratingCount: 423,
    buyLink: "https://example.com/buy/1"
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    price: 129.99,
    imageUrl: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=2070&auto=format",
    images: [
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2070&auto=format"
    ],
    description: "Noise-cancelling earbuds with 36-hour battery life and water resistance.",
    rating: 4.6,
    ratingCount: 829,
    buyLink: "https://example.com/buy/2"
  },
  {
    id: 3,
    name: "Ultra HD Smart TV 55\"",
    price: 499.99,
    imageUrl: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1974&auto=format",
    images: [
      "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1577979749830-f1d742b96791?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=2070&auto=format"
    ],
    description: "4K resolution with HDR and built-in streaming apps. Voice control and AI upscaling.",
    rating: 4.7,
    ratingCount: 1245,
    buyLink: "https://example.com/buy/3"
  },
  {
    id: 4,
    name: "Smart Watch Series 7",
    price: 349.99,
    imageUrl: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format",
    images: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=2071&auto=format"
    ],
    description: "Health monitoring, GPS, and 100+ workout modes. 3-day battery life.",
    rating: 4.5,
    ratingCount: 678,
    buyLink: "https://example.com/buy/4"
  },
  {
    id: 5,
    name: "Gaming Laptop Pro",
    price: 1299.99,
    imageUrl: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=2068&auto=format",
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=2069&auto=format",
      "https://images.unsplash.com/photo-1629429407756-446d3955ee61?q=80&w=2071&auto=format",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=2064&auto=format"
    ],
    description: "RTX 4070, 16GB RAM, 1TB SSD, and 165Hz display. RGB keyboard and advanced cooling.",
    rating: 4.9,
    ratingCount: 312,
    buyLink: "https://example.com/buy/5"
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 89.99,
    imageUrl: "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1964&auto=format",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2069&auto=format",
      "https://images.unsplash.com/photo-1558537348-c0f8e733989d?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format"
    ],
    description: "Waterproof portable speaker with 24-hour playtime and deep bass.",
    rating: 4.4,
    ratingCount: 537,
    buyLink: "https://example.com/buy/6"
  },
  {
    id: 7,
    name: "Digital Camera DSLR",
    price: 699.99,
    imageUrl: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2070&auto=format",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2138&auto=format",
      "https://images.unsplash.com/photo-1500634245200-e5245c7574ef?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1480365501497-199581be0e66?q=80&w=2070&auto=format"
    ],
    description: "24.1MP sensor, 4K video, and interchangeable lenses. Includes stabilization.",
    rating: 4.7,
    ratingCount: 423,
    buyLink: "https://example.com/buy/7"
  },
  {
    id: 8,
    name: "Mechanical Keyboard",
    price: 129.99,
    imageUrl: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=2080&auto=format",
    images: [
      "https://images.unsplash.com/photo-1595044426077-d36d9236d44e?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1561112078-7d24e04c3407?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1572916118970-fb5c8a1cb3cf?q=80&w=2070&auto=format"
    ],
    description: "RGB backlit mechanical gaming keyboard with customizable switches.",
    rating: 4.5,
    ratingCount: 382,
    buyLink: "https://example.com/buy/8"
  },
  {
    id: 9,
    name: "Smart Home Hub",
    price: 149.99,
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format",
    images: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2014&auto=format",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format"
    ],
    description: "Control all your smart devices with voice commands and automation.",
    rating: 4.3,
    ratingCount: 279,
    buyLink: "https://example.com/buy/9"
  },
  {
    id: 10,
    name: "Noise Cancelling Headphones",
    price: 249.99,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e5708db209?q=80&w=2065&auto=format",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1578319439584-104c94d37305?q=80&w=2070&auto=format"
    ],
    description: "Premium sound quality with active noise cancellation and 30-hour battery life.",
    rating: 4.8,
    ratingCount: 642,
    buyLink: "https://example.com/buy/10"
  },
  {
    id: 11,
    name: "Fitness Tracker",
    price: 79.99,
    imageUrl: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=2070&auto=format",
    images: [
      "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1557935894-d46bbe11ba68?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=2070&auto=format"
    ],
    description: "Track steps, sleep, heart rate and more with 7-day battery life.",
    rating: 4.2,
    ratingCount: 398,
    buyLink: "https://example.com/buy/11"
  },
  {
    id: 12,
    name: "Portable SSD 1TB",
    price: 159.99,
    imageUrl: "https://images.unsplash.com/photo-1597401631790-00c4bcd6b257?q=80&w=1974&auto=format",
    images: [
      "https://images.unsplash.com/photo-1563865473175-249935497d31?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1597037078487-b1a00b6ff337?q=80&w=2142&auto=format",
      "https://images.unsplash.com/photo-1626118788936-30b166544069?q=80&w=2070&auto=format"
    ],
    description: "Ultra-fast portable storage with USB-C connection. Shock resistant.",
    rating: 4.6,
    ratingCount: 214,
    buyLink: "https://example.com/buy/12"
  }
];

export const banners: Banner[] = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=2070&auto=format",
    title: "Summer Sale - Up to 50% Off",
    link: "#summer-sale"
  },
  {
    id: 2, 
    imageUrl: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=80&w=2025&auto=format",
    title: "New Arrivals - Latest Tech",
    link: "#new-arrivals"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=2070&auto=format",
    title: "Exclusive Products",
    link: "#exclusive-products"
  }
];

export const videos: Video[] = [
  {
    id: 1,
    title: "How to Setup Your New Smartphone",
    youtubeId: "dQw4w9WgXcQ",
    downloadLink: "#download-video-1"
  },
  {
    id: 2,
    title: "10 Tips for Better Photos",
    youtubeId: "dQw4w9WgXcQ",
    downloadLink: "#download-video-2"
  },
  {
    id: 3,
    title: "Smart Home Setup Guide",
    youtubeId: "dQw4w9WgXcQ",
    downloadLink: "#download-video-3"
  },
  {
    id: 4,
    title: "Gadget Unboxing - Latest Model",
    youtubeId: "dQw4w9WgXcQ",
    downloadLink: "#download-video-4"
  },
  {
    id: 5,
    title: "Tech Review: Best Products of 2023",
    youtubeId: "dQw4w9WgXcQ",
    downloadLink: "#download-video-5"
  },
  {
    id: 6,
    title: "How to Extend Battery Life",
    youtubeId: "dQw4w9WgXcQ",
    downloadLink: "#download-video-6"
  },
  {
    id: 7,
    title: "Gaming Laptop Performance Test",
    youtubeId: "dQw4w9WgXcQ",
    downloadLink: "#download-video-7"
  },
  {
    id: 8,
    title: "Camera Comparison 2023",
    youtubeId: "dQw4w9WgXcQ",
    downloadLink: "#download-video-8"
  },
  {
    id: 9,
    title: "Budget Tech Under $100",
    youtubeId: "dQw4w9WgXcQ",
    downloadLink: "#download-video-9"
  },
  {
    id: 10,
    title: "Future Tech Trends",
    youtubeId: "dQw4w9WgXcQ",
    downloadLink: "#download-video-10"
  },
  {
    id: 11,
    title: "Home Office Setup Guide",
    youtubeId: "dQw4w9WgXcQ",
    downloadLink: "#download-video-11"
  },
  {
    id: 12,
    title: "Tech Maintenance Tips",
    youtubeId: "dQw4w9WgXcQ",
    downloadLink: "#download-video-12"
  }
];

export const profileData: ProfileContact = {
  name: "Tech Store Official",
  email: "contact@techstore.com",
  phone: "+1 (555) 123-4567",
  address: "123 Tech Way, Silicon Valley, CA 94043",
  socialLinks: {
    instagram: "https://instagram.com/techstore",
    facebook: "https://facebook.com/techstore",
    twitter: "https://twitter.com/techstore"
  }
};
