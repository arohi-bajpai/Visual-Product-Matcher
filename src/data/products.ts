export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  price: number;
  brand: string;
  features: string[];
}

export const products: Product[] = [
  // Electronics - Smartphones
  {
    id: "1",
    name: "iPhone 15 Pro",
    category: "smartphones",
    description: "Latest flagship iPhone with titanium design and advanced camera system",
    imageUrl: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    price: 999,
    brand: "Apple",
    features: ["A17 Pro chip", "48MP camera", "Titanium build", "USB-C"]
  },
  {
    id: "2",
    name: "Samsung Galaxy S24 Ultra",
    category: "smartphones",
    description: "Premium Android smartphone with S Pen and exceptional display",
    imageUrl: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
    price: 1199,
    brand: "Samsung",
    features: ["S Pen", "200MP camera", "6.8-inch display", "5000mAh battery"]
  },
  {
    id: "3",
    name: "Google Pixel 8 Pro",
    category: "smartphones",
    description: "AI-powered camera and pure Android experience",
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    price: 899,
    brand: "Google",
    features: ["Tensor G3", "Magic Eraser", "7 years updates", "50MP camera"]
  },

  // Electronics - Laptops
  {
    id: "4",
    name: "MacBook Pro 16-inch",
    category: "laptops",
    description: "Professional laptop with M3 Pro chip for creative workflows",
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    price: 2499,
    brand: "Apple",
    features: ["M3 Pro chip", "16-inch Liquid Retina XDR", "22-hour battery", "96W charging"]
  },
  {
    id: "5",
    name: "Dell XPS 13",
    category: "laptops",
    description: "Ultra-portable laptop with premium build quality",
    imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    price: 1299,
    brand: "Dell",
    features: ["Intel Core i7", "13.4-inch display", "Carbon fiber palm rest", "Thunderbolt 4"]
  },
  {
    id: "6",
    name: "ThinkPad X1 Carbon",
    category: "laptops",
    description: "Business laptop with military-grade durability",
    imageUrl: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop",
    price: 1899,
    brand: "Lenovo",
    features: ["Intel vPro", "14-inch OLED", "Carbon fiber", "TrackPoint"]
  },

  // Electronics - Headphones
  {
    id: "7",
    name: "AirPods Pro 2",
    category: "headphones",
    description: "Premium wireless earbuds with active noise cancellation",
    imageUrl: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=400&fit=crop",
    price: 249,
    brand: "Apple",
    features: ["Active noise cancellation", "Spatial audio", "MagSafe charging", "6-hour battery"]
  },
  {
    id: "8",
    name: "Sony WH-1000XM5",
    category: "headphones",
    description: "Industry-leading noise canceling over-ear headphones",
    imageUrl: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    price: 399,
    brand: "Sony",
    features: ["30-hour battery", "Quick charge", "Multipoint connection", "LDAC codec"]
  },
  {
    id: "9",
    name: "Bose QuietComfort 45",
    category: "headphones",
    description: "Comfortable wireless headphones with renowned noise cancellation",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    price: 329,
    brand: "Bose",
    features: ["24-hour battery", "TriPort technology", "EQ modes", "Voice assistant"]
  },

  // Clothing - Sneakers
  {
    id: "10",
    name: "Nike Air Jordan 1",
    category: "sneakers",
    description: "Iconic basketball sneaker with timeless design",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    price: 170,
    brand: "Nike",
    features: ["Leather upper", "Air-Sole unit", "Rubber outsole", "Classic colorways"]
  },
  {
    id: "11",
    name: "Adidas Ultraboost 22",
    category: "sneakers",
    description: "High-performance running shoe with responsive cushioning",
    imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    price: 190,
    brand: "Adidas",
    features: ["Boost midsole", "Primeknit upper", "Continental rubber", "Responsive cushioning"]
  },
  {
    id: "12",
    name: "Converse Chuck Taylor All Star",
    category: "sneakers",
    description: "Classic canvas sneaker with vintage appeal",
    imageUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
    price: 65,
    brand: "Converse",
    features: ["Canvas upper", "Rubber toe cap", "Metal eyelets", "Star logo"]
  },

  // Home & Garden - Furniture
  {
    id: "13",
    name: "Modern Ergonomic Office Chair",
    category: "furniture",
    description: "Breathable mesh office chair with lumbar support",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    price: 399,
    brand: "Herman Miller",
    features: ["Lumbar support", "Breathable mesh", "Adjustable arms", "Ergonomic design"]
  },
  {
    id: "14",
    name: "Scandinavian Dining Table",
    category: "furniture",
    description: "Minimalist wooden dining table for modern homes",
    imageUrl: "https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=400&fit=crop",
    price: 899,
    brand: "IKEA",
    features: ["Solid wood", "Seats 6", "Minimalist design", "Easy assembly"]
  },
  {
    id: "15",
    name: "Velvet Accent Chair",
    category: "furniture",
    description: "Luxurious velvet accent chair in emerald green",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    price: 599,
    brand: "West Elm",
    features: ["Velvet upholstery", "Solid wood legs", "Accent piece", "Comfortable seating"]
  },

  // Kitchen Appliances
  {
    id: "16",
    name: "KitchenAid Stand Mixer",
    category: "appliances",
    description: "Professional-grade stand mixer for baking enthusiasts",
    imageUrl: "https://images.unsplash.com/photo-1574781330855-d0db650d4b64?w=400&h=400&fit=crop",
    price: 449,
    brand: "KitchenAid",
    features: ["5-quart bowl", "10 speeds", "Tilt-head design", "Multiple attachments"]
  },
  {
    id: "17",
    name: "Breville Espresso Machine",
    category: "appliances",
    description: "Semi-automatic espresso machine with milk frother",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
    price: 699,
    brand: "Breville",
    features: ["15-bar pump", "Steam wand", "Pre-infusion", "Stainless steel"]
  },
  {
    id: "18",
    name: "Vitamix Blender",
    category: "appliances",
    description: "High-performance blender for smoothies and food prep",
    imageUrl: "https://images.unsplash.com/photo-1585515656332-576878b8e37b?w=400&h=400&fit=crop",
    price: 549,
    brand: "Vitamix",
    features: ["2+ HP motor", "Self-cleaning", "Variable speed", "10-year warranty"]
  },

  // Fashion - Watches
  {
    id: "19",
    name: "Apple Watch Series 9",
    category: "watches",
    description: "Advanced smartwatch with health monitoring features",
    imageUrl: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop",
    price: 399,
    brand: "Apple",
    features: ["S9 chip", "Always-On display", "Health sensors", "GPS tracking"]
  },
  {
    id: "20",
    name: "Rolex Submariner",
    category: "watches",
    description: "Luxury dive watch with Swiss craftsmanship",
    imageUrl: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop",
    price: 8950,
    brand: "Rolex",
    features: ["Automatic movement", "Water resistant", "Ceramic bezel", "Oyster bracelet"]
  },
  {
    id: "21",
    name: "Casio G-Shock",
    category: "watches",
    description: "Rugged digital watch built for extreme conditions",
    imageUrl: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=400&h=400&fit=crop",
    price: 149,
    brand: "Casio",
    features: ["Shock resistant", "200m water resist", "Solar powered", "World time"]
  },

  // Sports & Fitness
  {
    id: "22",
    name: "Yoga Mat Premium",
    category: "fitness",
    description: "Non-slip yoga mat with superior grip and cushioning",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    price: 89,
    brand: "Manduka",
    features: ["6mm thickness", "Non-slip surface", "Eco-friendly", "Lifetime guarantee"]
  },
  {
    id: "23",
    name: "Adjustable Dumbbells",
    category: "fitness",
    description: "Space-saving adjustable dumbbells for home workouts",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    price: 399,
    brand: "Bowflex",
    features: ["5-52.5 lbs range", "Quick adjustment", "Compact design", "Durable plates"]
  },
  {
    id: "24",
    name: "Running Shoes",
    category: "sneakers",
    description: "Lightweight running shoes with responsive cushioning",
    imageUrl: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop",
    price: 160,
    brand: "Nike",
    features: ["React foam", "Flyknit upper", "Lightweight", "Breathable design"]
  },

  // More Electronics
  {
    id: "25",
    name: "iPad Pro 12.9-inch",
    category: "tablets",
    description: "Professional tablet with M2 chip and Liquid Retina XDR display",
    imageUrl: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    price: 1099,
    brand: "Apple",
    features: ["M2 chip", "12.9-inch display", "Apple Pencil support", "Thunderbolt port"]
  },
  {
    id: "26",
    name: "Canon EOS R5",
    category: "cameras",
    description: "Professional mirrorless camera with 45MP sensor",
    imageUrl: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    price: 3899,
    brand: "Canon",
    features: ["45MP sensor", "8K video", "In-body stabilization", "Dual card slots"]
  },
  {
    id: "27",
    name: "Sony A7 IV",
    category: "cameras",
    description: "Full-frame mirrorless camera for content creators",
    imageUrl: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop",
    price: 2498,
    brand: "Sony",
    features: ["33MP sensor", "4K 60p video", "693 phase-detect AF", "5-axis stabilization"]
  },

  // Home Appliances
  {
    id: "28",
    name: "Dyson V15 Detect",
    category: "appliances",
    description: "Cordless vacuum with laser dust detection",
    imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
    price: 749,
    brand: "Dyson",
    features: ["Laser detection", "60-minute runtime", "HEPA filtration", "LCD screen"]
  },
  {
    id: "29",
    name: "Instant Pot Duo",
    category: "appliances",
    description: "7-in-1 electric pressure cooker for versatile cooking",
    imageUrl: "https://images.unsplash.com/photo-1574781330855-d0db650d4b64?w=400&h=400&fit=crop",
    price: 99,
    brand: "Instant Pot",
    features: ["7 cooking functions", "6-quart capacity", "Smart programs", "Stainless steel"]
  },

  // Fashion - Clothing
  {
    id: "30",
    name: "Levi's 501 Original Jeans",
    category: "clothing",
    description: "Classic straight-leg jeans with authentic vintage styling",
    imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
    price: 98,
    brand: "Levi's",
    features: ["100% cotton", "Straight fit", "Button fly", "Classic 5-pocket"]
  },
  {
    id: "31",
    name: "Patagonia Down Jacket",
    category: "clothing",
    description: "Lightweight down jacket for outdoor adventures",
    imageUrl: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop",
    price: 299,
    brand: "Patagonia",
    features: ["800-fill down", "Wind resistant", "Packable design", "Recycled materials"]
  },
  {
    id: "32",
    name: "Champion Reverse Weave Hoodie",
    category: "clothing",
    description: "Classic heavyweight hoodie with reverse weave construction",
    imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    price: 65,
    brand: "Champion",
    features: ["Reverse weave", "Cotton blend", "Kangaroo pocket", "Ribbed cuffs"]
  },

  // Beauty & Personal Care
  {
    id: "33",
    name: "Dyson Airwrap",
    category: "beauty",
    description: "Multi-styler for curling, waving, and smoothing hair",
    imageUrl: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=400&fit=crop",
    price: 599,
    brand: "Dyson",
    features: ["Coanda effect", "Multiple attachments", "Heat control", "Ionic technology"]
  },
  {
    id: "34",
    name: "Philips Sonicare Toothbrush",
    category: "beauty",
    description: "Electric toothbrush with sonic technology",
    imageUrl: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&h=400&fit=crop",
    price: 199,
    brand: "Philips",
    features: ["Sonic technology", "Smart timer", "Pressure sensor", "Multiple modes"]
  },

  // Books & Media
  {
    id: "35",
    name: "Kindle Paperwhite",
    category: "ereaders",
    description: "Waterproof e-reader with adjustable warm light",
    imageUrl: "https://images.unsplash.com/photo-1481887328591-3e277f9473dc?w=400&h=400&fit=crop",
    price: 139,
    brand: "Amazon",
    features: ["6.8-inch display", "Waterproof", "10-week battery", "Adjustable light"]
  },

  // Gaming
  {
    id: "36",
    name: "PlayStation 5",
    category: "gaming",
    description: "Next-generation gaming console with 4K gaming",
    imageUrl: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop",
    price: 499,
    brand: "Sony",
    features: ["Custom SSD", "Ray tracing", "3D audio", "DualSense controller"]
  },
  {
    id: "37",
    name: "Xbox Series X",
    category: "gaming",
    description: "Powerful gaming console with Quick Resume feature",
    imageUrl: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&h=400&fit=crop",
    price: 499,
    brand: "Microsoft",
    features: ["12 TFLOPS GPU", "Quick Resume", "Smart Delivery", "Backward compatibility"]
  },
  {
    id: "38",
    name: "Nintendo Switch OLED",
    category: "gaming",
    description: "Portable gaming console with vibrant OLED screen",
    imageUrl: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=400&fit=crop",
    price: 349,
    brand: "Nintendo",
    features: ["7-inch OLED", "Enhanced audio", "Wide kickstand", "64GB storage"]
  },

  // Kitchen & Dining
  {
    id: "39",
    name: "All-Clad Stainless Steel Pan",
    category: "cookware",
    description: "Professional-grade stainless steel frying pan",
    imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    price: 199,
    brand: "All-Clad",
    features: ["Tri-ply construction", "Even heating", "Dishwasher safe", "Professional grade"]
  },
  {
    id: "40",
    name: "Le Creuset Dutch Oven",
    category: "cookware",
    description: "Enameled cast iron Dutch oven for slow cooking",
    imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    price: 329,
    brand: "Le Creuset",
    features: ["Cast iron", "Enamel coating", "Oven safe", "Even heat distribution"]
  },

  // Additional products to reach 50+
  {
    id: "41",
    name: "Ray-Ban Aviator Sunglasses",
    category: "accessories",
    description: "Classic aviator sunglasses with UV protection",
    imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    price: 154,
    brand: "Ray-Ban",
    features: ["UV protection", "Metal frame", "Classic design", "Multiple lens options"]
  },
  {
    id: "42",
    name: "Hydro Flask Water Bottle",
    category: "accessories",
    description: "Insulated stainless steel water bottle",
    imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    price: 44,
    brand: "Hydro Flask",
    features: ["24-hour cold", "12-hour hot", "18/8 stainless steel", "Wide mouth"]
  },
  {
    id: "43",
    name: "Patagonia Backpack",
    category: "accessories",
    description: "Durable hiking backpack with multiple compartments",
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    price: 129,
    brand: "Patagonia",
    features: ["25L capacity", "Recycled materials", "Laptop sleeve", "Hydration compatible"]
  },
  {
    id: "44",
    name: "Tesla Model 3",
    category: "automotive",
    description: "Electric sedan with autopilot capabilities",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=400&fit=crop",
    price: 38990,
    brand: "Tesla",
    features: ["Long range", "Autopilot", "Supercharger network", "Over-the-air updates"]
  },
  {
    id: "45",
    name: "BMW M3",
    category: "automotive",
    description: "High-performance luxury sports sedan",
    imageUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=400&fit=crop",
    price: 73300,
    brand: "BMW",
    features: ["Twin-turbo engine", "All-wheel drive", "Carbon fiber trim", "Sport suspension"]
  },
  {
    id: "46",
    name: "Audi A4",
    category: "automotive",
    description: "Luxury compact executive car with advanced technology",
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=400&fit=crop",
    price: 39100,
    brand: "Audi",
    features: ["Quattro AWD", "Virtual cockpit", "MMI infotainment", "Premium interior"]
  },
  {
    id: "47",
    name: "Weber Genesis Grill",
    category: "outdoor",
    description: "Premium gas grill for outdoor cooking",
    imageUrl: "https://images.unsplash.com/photo-1529693662653-9d480530a697?w=400&h=400&fit=crop",
    price: 899,
    brand: "Weber",
    features: ["3 burners", "Porcelain grates", "Flavorizer bars", "Side burner"]
  },
  {
    id: "48",
    name: "Yeti Cooler",
    category: "outdoor",
    description: "Rotomolded cooler for extended ice retention",
    imageUrl: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop",
    price: 349,
    brand: "Yeti",
    features: ["5-day ice retention", "Bear resistant", "No-sweat design", "Dry goods basket"]
  },
  {
    id: "49",
    name: "Beats Studio Pro",
    category: "headphones",
    description: "Wireless over-ear headphones with active noise cancelling",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    price: 349,
    brand: "Beats",
    features: ["Active noise cancelling", "Spatial audio", "40-hour battery", "USB-C charging"]
  },
  {
    id: "50",
    name: "JBL Charge 5",
    category: "speakers",
    description: "Portable Bluetooth speaker with powerbank function",
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    price: 179,
    brand: "JBL",
    features: ["20-hour playtime", "IP67 waterproof", "PartyBoost", "Powerbank function"]
  },
  {
    id: "51",
    name: "Sonos One",
    category: "speakers",
    description: "Smart speaker with voice control and room-filling sound",
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    price: 219,
    brand: "Sonos",
    features: ["Voice control", "WiFi streaming", "Multi-room audio", "Compact design"]
  },
  {
    id: "52",
    name: "Allbirds Tree Runners",
    category: "sneakers",
    description: "Sustainable running shoes made from eucalyptus tree fiber",
    imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    price: 98,
    brand: "Allbirds",
    features: ["Eucalyptus fiber", "Machine washable", "Carbon negative", "Comfortable fit"]
  },
  {
    id: "53",
    name: "New Balance 990v5",
    category: "sneakers",
    description: "Premium running shoes with superior craftsmanship",
    imageUrl: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop",
    price: 185,
    brand: "New Balance",
    features: ["Made in USA", "ENCAP midsole", "Premium materials", "Classic design"]
  }
];

export const categories = [
  "smartphones",
  "laptops", 
  "headphones",
  "sneakers",
  "furniture",
  "appliances",
  "watches",
  "fitness",
  "tablets",
  "cameras",
  "speakers",
  "clothing",
  "accessories",
  "automotive",
  "outdoor",
  "cookware",
  "beauty",
  "ereaders",
  "gaming"
];

// Helper function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

// Helper function to search products by name or description
export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery) ||
    product.features.some(feature => feature.toLowerCase().includes(lowerQuery))
  );
};
