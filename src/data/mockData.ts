import { Banner, Product, ProfileContact, Video } from "../types";

export const products: Product[] = [
  {
    id: 1,
    name: "Speaker Murotal Quran 30 Juz + Remote Portable + Bisa Bluetooth",
    price: "129.000",
    imageUrl: "https://down-id.img.susercontent.com/file/id-11134207-7r98x-lom14z9srbftfb.webp?q=80&w=2042&auto=format",
    images: [
      "https://down-id.img.susercontent.com/file/id-11134207-7r98x-lom14z9srbftfb.webp?q=80&w=2070&auto=format",
      "https://down-id.img.susercontent.com/file/id-11134207-7rasf-m50fk9amttts86.webp?q=80&w=2070&auto=format",
      "https://down-id.img.susercontent.com/file/id-11134207-7rasc-m50fk9amsf9c64.webp?q=80&w=2070&auto=format"
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
    name: "Modem Orbit",
    price: 159.99,
    imageUrl: "https://down-id.img.susercontent.com/file/id-11134207-7r990-lyd460ebj4g500?q=80&w=1974&auto=format",
    images: [
      "https://images.unsplash.com/photo-1563865473175-249935497d31?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1597037078487-b1a00b6ff337?q=80&w=2142&auto=format",
      "https://images.unsplash.com/photo-1626118788936-30b166544069?q=80&w=2070&auto=format"
    ],
    description: "Ultra-fast portable storage with USB-C connection. Shock resistant.",
    rating: 4.6,
    ratingCount: 214,
    buyLink: "https://example.com/buy/12"
  },
  {
    id: 13,
    name: "Electric Toothbrush",
    price: 49.99,
    imageUrl: "https://images.unsplash.com/photo-1559591934-38f8b63d6844?q=80&w=1974&auto=format",
    images: [
      "https://images.unsplash.com/photo-1564511287568-64db74e7338e?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1618517048289-4646902edaf5?q=80&w=1974&auto=format",
      "https://images.unsplash.com/photo-1564511287568-64db74e7338e?q=80&w=2070&auto=format"
    ],
    description: "5 brushing modes, pressure sensor, and 2-week battery life. Includes smart timer and Bluetooth connectivity.",
    rating: 4.5,
    ratingCount: 387,
    buyLink: "https://example.com/buy/13"
  },
  {
    id: 14,
    name: "Smart Air Purifier",
    price: 199.99,
    imageUrl: "https://images.unsplash.com/photo-1585071550721-fdb362ae2b8d?q=80&w=1974&auto=format",
    images: [
      "https://images.unsplash.com/photo-1585071550721-fdb362ae2b8d?q=80&w=1974&auto=format",
      "https://images.unsplash.com/photo-1633596346944-47db5b41b59d?q=80&w=1974&auto=format",
      "https://images.unsplash.com/photo-1626906722156-ada2416340b7?q=80&w=1974&auto=format"
    ],
    description: "HEPA filter that removes 99.97% of allergens. App control and air quality monitoring.",
    rating: 4.7,
    ratingCount: 294,
    buyLink: "https://example.com/buy/14"
  },
  {
    id: 15,
    name: "Robot Vacuum",
    price: 249.99,
    imageUrl: "https://images.unsplash.com/photo-1573395444501-ea3a9a7fda98?q=80&w=1860&auto=format",
    images: [
      "https://images.unsplash.com/photo-1573395444501-ea3a9a7fda98?q=80&w=1860&auto=format",
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=1742&auto=format",
      "https://images.unsplash.com/photo-1596558450268-9c27524ba856?q=80&w=1825&auto=format"
    ],
    description: "Smart mapping, automatic recharging, and app control. Works on carpet and hard floors.",
    rating: 4.6,
    ratingCount: 452,
    buyLink: "https://example.com/buy/15"
  },
  {
    id: 16,
    name: "Smart Doorbell",
    price: 149.99,
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format",
    images: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1622372738946-62e2b898431c?q=80&w=1974&auto=format",
      "https://images.unsplash.com/photo-1606768666853-403c90a981ad?q=80&w=1974&auto=format"
    ],
    description: "HD video, motion detection, and two-way audio. Compatible with smart home systems.",
    rating: 4.5,
    ratingCount: 318,
    buyLink: "https://example.com/buy/16"
  },
  {
    id: 17,
    name: "Coffee Machine",
    price: 129.99,
    imageUrl: "https://images.unsplash.com/photo-1595246135406-9bbe3bdaf8a4?q=80&w=1974&auto=format",
    images: [
      "https://images.unsplash.com/photo-1595246135406-9bbe3bdaf8a4?q=80&w=1974&auto=format",
      "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=1974&auto=format",
      "https://images.unsplash.com/photo-1500077142977-6c8ed41a1f6d?q=80&w=2070&auto=format"
    ],
    description: "Programmable settings, built-in grinder, and auto-shutoff. Makes espresso, cappuccino, and regular coffee.",
    rating: 4.4,
    ratingCount: 276,
    buyLink: "https://example.com/buy/17"
  },
  {
    id: 18,
    name: "Wireless Charger",
    price: 39.99,
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2069&auto=format",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2069&auto=format",
      "https://images.unsplash.com/photo-1612668589636-b13357796d25?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1585338661747-9256c70abbf5?q=80&w=2064&auto=format"
    ],
    description: "Fast wireless charging with LED indicator. Compatible with all Qi-enabled devices.",
    rating: 4.2,
    ratingCount: 198,
    buyLink: "https://example.com/buy/18"
  },
  {
    id: 19,
    name: "Wireless Mouse",
    price: 29.99,
    imageUrl: "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?q=80&w=2074&auto=format",
    images: [
      "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?q=80&w=2074&auto=format",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1974&auto=format",
      "https://images.unsplash.com/photo-1625723044792-44de16ccb4e4?q=80&w=2070&auto=format"
    ],
    description: "Ergonomic design with 6 programmable buttons. 12-month battery life and silent clicking.",
    rating: 4.3,
    ratingCount: 367,
    buyLink: "https://example.com/buy/19"
  },
  {
    id: 20,
    name: "LED Desk Lamp",
    price: 34.99,
    imageUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format",
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?q=80&w=1974&auto=format",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1974&auto=format"
    ],
    description: "Adjustable brightness and color temperature. USB charging port and flexible arm.",
    rating: 4.4,
    ratingCount: 245,
    buyLink: "https://example.com/buy/20"
  },
  {
    id: 21,
    name: "Portable Power Bank",
    price: 49.99,
    imageUrl: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=1974&auto=format",
    images: [
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=1974&auto=format",
      "https://images.unsplash.com/photo-1547747221-8d9e52b3a66b?q=80&w=1974&auto=format",
      "https://images.unsplash.com/photo-1588423304498-8d6b56dfa3ef?q=80&w=1974&auto=format"
    ],
    description: "20,000mAh capacity with fast charging. Charges multiple devices simultaneously.",
    rating: 4.6,
    ratingCount: 534,
    buyLink: "https://example.com/buy/21"
  },
  {
    id: 22,
    name: "Smart Light Bulbs",
    price: 29.99,
    imageUrl: "https://images.unsplash.com/photo-1532006124070-8f4bede3c6a6?q=80&w=1974&auto=format",
    images: [
      "https://images.unsplash.com/photo-1532006124070-8f4bede3c6a6?q=80&w=1974&auto=format",
      "https://images.unsplash.com/photo-1550031193-4d1d98431a38?q=80&w=1940&auto=format",
      "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1974&auto=format"
    ],
    description: "16 million colors and voice control. Works with smart home systems and schedules.",
    rating: 4.3,
    ratingCount: 289,
    buyLink: "https://example.com/buy/22"
  },
  {
    id: 23,
    name: "External Hard Drive 2TB",
    price: 89.99,
    imageUrl: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?q=80&w=1974&auto=format",
    images: [
      "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?q=80&w=1974&auto=format",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2069&auto=format",
      "https://images.unsplash.com/photo-1578895102643-4b01e8cc6d96?q=80&w=1974&auto=format"
    ],
    description: "Portable storage with USB 3.0 for fast data transfer. Compatible with PC and Mac.",
    rating: 4.5,
    ratingCount: 312,
    buyLink: "https://example.com/buy/23"
  },
  {
    id: 24,
    name: "Wireless Keyboard",
    price: 59.99,
    imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=2065&auto=format",
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=2065&auto=format",
      "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=1974&auto=format",
      "https://images.unsplash.com/photo-1561112078-7d24e04c3407?q=80&w=2070&auto=format"
    ],
    description: "Ergonomic design with quiet keys. 18-month battery life and multi-device connectivity.",
    rating: 4.4,
    ratingCount: 287,
    buyLink: "https://example.com/buy/24"
  },
  {
    id: 25,
    name: "True Wireless Earphones",
    price: 79.99,
    imageUrl: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=2070&auto=format",
    images: [
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1974&auto=format",
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=2070&auto=format"
    ],
    description: "24-hour battery life with charging case. Water-resistant and touch controls.",
    rating: 4.3,
    ratingCount: 456,
    buyLink: "https://example.com/buy/25"
  },
  {
    id: 26,
    name: "Gaming Headset",
    price: 69.99,
    imageUrl: "https://images.unsplash.com/photo-1599669454699-248893623440?q=80&w=2070&auto=format",
    images: [
      "https://images.unsplash.com/photo-1599669454699-248893623440?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1590421958459-071ca4271af6?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1625017126899-4010564a0cf2?q=80&w=2070&auto=format"
    ],
    description: "7.1 surround sound, noise-cancelling microphone, and RGB lighting. Compatible with all platforms.",
    rating: 4.5,
    ratingCount: 378,
    buyLink: "https://example.com/buy/26"
  },
  {
    id: 27,
    name: "4K Webcam",
    price: 99.99,
    imageUrl: "https://images.unsplash.com/photo-1598550491921-e0f8a946d2ad?q=80&w=1974&auto=format",
    images: [
      "https://images.unsplash.com/photo-1598550491921-e0f8a946d2ad?q=80&w=1974&auto=format",
      "https://images.unsplash.com/photo-1623949556303-c8e0b59e2aa2?q=80&w=1974&auto=format",
      "https://images.unsplash.com/photo-1622632169740-85c306c57aa2?q=80&w=1974&auto=format"
    ],
    description: "Ultra HD video with auto light correction and dual microphones. 90-degree field of view.",
    rating: 4.6,
    ratingCount: 215,
    buyLink: "https://example.com/buy/27"
  },
  {
    id: 28,
    name: "Bluetooth Speaker Waterproof",
    price: 59.99,
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2069&auto=format",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2069&auto=format",
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1964&auto=format",
      "https://images.unsplash.com/photo-1569937756447-169c417f4a4d?q=80&w=1974&auto=format"
    ],
    description: "IPX7 waterproof, 20-hour playtime, and built-in microphone. Floats in water and has carabiner clip.",
    rating: 4.4,
    ratingCount: 342,
    buyLink: "https://example.com/buy/28"
  },
  {
    id: 29,
    name: "Mini Drone with Camera",
    price: 119.99,
    imageUrl: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=2074&auto=format",
    images: [
      "https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=2074&auto=format",
      "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1514043454212-14c181f46583?q=80&w=2069&auto=format"
    ],
    description: "HD camera with altitude hold and headless mode. 15-minute flight time and foldable design.",
    rating: 4.2,
    ratingCount: 198,
    buyLink: "https://example.com/buy/29"
  },
  {
    id: 30,
    name: "Wireless Charging Pad",
    price: 24.99,
    imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2070&auto=format",
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1619828699537-3c2915166091?q=80&w=1974&auto=format",
      "https://images.unsplash.com/photo-1628815113969-0487b5bf8d9c?q=80&w=1974&auto=format"
    ],
    description: "10W fast charging for all Qi-enabled devices. Slim design with non-slip surface.",
    rating: 4.3,
    ratingCount: 267,
    buyLink: "https://example.com/buy/30"
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
    title: "Perlengkapan Usaha Konter",
    youtubeId: "hQodojfLdfg",
    downloadLink: "https://github.com/"
  },
  {
    id: 2,
    title: "Perlengkapan Kantor",
    youtubeId: "PW8tr4j1ZWE",
    downloadLink: "https://github.com/"
  },
  {
    id: 3,
    title: "Perlengkapan Sekolah",
    youtubeId: "F5_MkK39JZo",
    downloadLink: "https://www.google.com/"
  },
  {
    id: 4,
    title: "Gadget Unboxing - Latest Model",
    youtubeId: "iee2TATGMyI",
    downloadLink: "#video-4"
  },
  {
    id: 5,
    title: "Tech Review: Best Products of 2023",
    youtubeId: "oHGqD_yGxgE",
    downloadLink: "#video-5"
  },
  {
    id: 6,
    title: "How to Extend Battery Life",
    youtubeId: "2MYD5LUUqXM",
    downloadLink: "#video-6"
  },
  {
    id: 7,
    title: "Gaming Laptop Performance Test",
    youtubeId: "aXVEN9X5zHY",
    downloadLink: "#video-7"
  },
  {
    id: 8,
    title: "Camera Comparison 2023",
    youtubeId: "0Kt0AsQ_OYQ",
    downloadLink: "#video-8"
  },
  {
    id: 9,
    title: "Budget Tech Under $100",
    youtubeId: "WxZz3tFM8Ys",
    downloadLink: "#video-9"
  },
  {
    id: 10,
    title: "Future Tech Trends",
    youtubeId: "r7zJ8srwwjk",
    downloadLink: "#video-10"
  },
  {
    id: 11,
    title: "Home Office Setup Guide",
    youtubeId: "tLvjd8FqNx4",
    downloadLink: "#video-11"
  },
  {
    id: 12,
    title: "Tech Maintenance Tips",
    youtubeId: "9GvQ2uGfz7Q",
    downloadLink: "#video-12"
  },
  {
    id: 13,
    title: "Best Android Features You're Not Using",
    youtubeId: "6ySFbsw_XkQ",
    downloadLink: "#video-13"
  },
  {
    id: 14,
    title: "Smart Home Security Setup",
    youtubeId: "XNkOoCGVy9U",
    downloadLink: "#video-14"
  },
  {
    id: 15,
    title: "Ultimate Desk Setup Guide",
    youtubeId: "9no6DNMxvSo",
    downloadLink: "#video-15"
  },
  {
    id: 16,
    title: "Tech That Will Change Everything",
    youtubeId: "QtGbC2aaZ_k",
    downloadLink: "#video-16"
  },
  {
    id: 17,
    title: "DIY Computer Building Tutorial",
    youtubeId: "BL4DCEp7blY",
    downloadLink: "#video-17"
  },
  {
    id: 18,
    title: "iPhone Hidden Features Guide",
    youtubeId: "qYK4d7UiO_I",
    downloadLink: "#video-18"
  },
  {
    id: 19,
    title: "Maximizing Your Smartphone Battery",
    youtubeId: "fvVG8l7xvBg",
    downloadLink: "#video-19"
  },
  {
    id: 20,
    title: "Wireless Earbuds Comparison",
    youtubeId: "qUdvzm2c0I0",
    downloadLink: "#video-20"
  },
  {
    id: 21,
    title: "Home Network Optimization Guide",
    youtubeId: "6-RXqFS_UtU",
    downloadLink: "#video-21"
  },
  {
    id: 22,
    title: "Best Tech Gifts Under $50",
    youtubeId: "esDi8tIYO_k",
    downloadLink: "#video-22"
  },
  {
    id: 23,
    title: "Digital Privacy 101",
    youtubeId: "ch2l7CL9eB8",
    downloadLink: "#video-23"
  },
  {
    id: 24,
    title: "Smartphone Photography Tips",
    youtubeId: "GhTcvlowMC0",
    downloadLink: "#video-24"
  },
  {
    id: 25,
    title: "Best Video Editing Apps",
    youtubeId: "k9WwMMs1SaQ",
    downloadLink: "#video-25"
  },
  {
    id: 26,
    title: "Cloud Storage Comparison",
    youtubeId: "KiXXoDLLd5U",
    downloadLink: "#video-26"
  },
  {
    id: 27,
    title: "Making Your Old Tech New Again",
    youtubeId: "gBC1bQ6L7Os",
    downloadLink: "#video-27"
  },
  {
    id: 28,
    title: "5G Technology Explained",
    youtubeId: "-uilkmla3H4",
    downloadLink: "#video-28"
  },
  {
    id: 29,
    title: "Best Portable Chargers Review",
    youtubeId: "9o5gVTwS0DI",
    downloadLink: "#video-29"
  },
  {
    id: 30,
    title: "Tech Trends for Next Year",
    youtubeId: "aHj08HC9XV8",
    downloadLink: "#video-30"
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
