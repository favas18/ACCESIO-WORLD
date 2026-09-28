// ======================================================
// ACCESIO WORLD - PRODUCT DATABASE
// ======================================================

const products = [

  // ====================================================
  // IPHONE ACCESSORIES
  // ====================================================

  {
    id: "acc-case-001",
    name: "Premium Magnetic iPhone Case",
    category: "Accessories",
    subcategory: "Cases",
    brand: "Accesio",
    models: ["iPhone 13", "iPhone 14", "iPhone 15", "iPhone 16"],
    quality: "Premium",
    price: 399,
    oldPrice: 599,
    stock: 10,
    colours: ["Black", "Blue", "Clear"],
    rating: 4.8,
    badge: "Premium",
    image: "",
    video: "",
    description: "Premium protective magnetic case with a clean modern design."
  },

  {
    id: "acc-glass-001",
    name: "9D Full Cover Tempered Glass",
    category: "Accessories",
    subcategory: "Tempered Glass",
    brand: "Accesio",
    models: [
      "iPhone 11",
      "iPhone 12",
      "iPhone 13",
      "iPhone 14",
      "iPhone 15",
      "iPhone 16"
    ],
    quality: "Premium",
    price: 149,
    oldPrice: 249,
    stock: 20,
    colours: ["Clear"],
    rating: 4.7,
    badge: "Best Seller",
    image: "",
    video: "",
    description: "Full-cover tempered glass with smooth touch response."
  },

  {
    id: "acc-camera-001",
    name: "Camera Lens Protector",
    category: "Accessories",
    subcategory: "Camera Protection",
    brand: "Accesio",
    models: [
      "iPhone 13",
      "iPhone 14",
      "iPhone 15",
      "iPhone 16",
      "iPhone 17"
    ],
    quality: "Premium",
    price: 199,
    oldPrice: 299,
    stock: 15,
    colours: ["Clear", "Black"],
    rating: 4.6,
    badge: "New",
    image: "",
    video: "",
    description: "Premium camera lens protection designed for daily use."
  },

  {
    id: "acc-cable-001",
    name: "USB-C to USB-C Fast Charging Cable",
    category: "Accessories",
    subcategory: "Cables",
    brand: "Accesio",
    models: ["Universal USB-C"],
    quality: "Premium",
    price: 299,
    oldPrice: 499,
    stock: 12,
    colours: ["White", "Black"],
    rating: 4.7,
    badge: "Fast Charging",
    image: "",
    video: "",
    description: "Durable USB-C to USB-C cable for charging and data transfer."
  },

  {
    id: "acc-adapter-001",
    name: "20W Fast Charging Adapter",
    category: "Accessories",
    subcategory: "Chargers",
    brand: "Accesio",
    models: ["Universal"],
    quality: "Premium",
    price: 499,
    oldPrice: 699,
    stock: 8,
    colours: ["White"],
    rating: 4.7,
    badge: "Fast Charger",
    image: "",
    video: "",
    description: "Compact fast charging adapter for everyday use."
  },

  {
    id: "acc-powerbank-001",
    name: "Magnetic Wireless Power Bank",
    category: "Accessories",
    subcategory: "Power Banks",
    brand: "Accesio",
    models: ["iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15", "iPhone 16"],
    quality: "Premium",
    price: 999,
    oldPrice: 1299,
    stock: 5,
    colours: ["Black", "White"],
    rating: 4.6,
    badge: "Popular",
    image: "",
    video: "",
    description: "Compact magnetic wireless power bank for compatible iPhones."
  },


  // ====================================================
  // IPHONE SPARES - DISPLAYS
  // ====================================================

  {
    id: "sp-display-11-dd",
    name: "iPhone 11 Display",
    category: "Spares",
    subcategory: "Displays",
    brand: "Accesio",
    models: ["iPhone 11"],
    quality: "DD",
    price: 2499,
    oldPrice: 2999,
    stock: 3,
    colours: ["Black"],
    rating: 4.5,
    badge: "DD Quality",
    image: "",
    video: "",
    description: "Replacement display assembly for iPhone 11."
  },

  {
    id: "sp-display-12-dd",
    name: "iPhone 12 Display",
    category: "Spares",
    subcategory: "Displays",
    brand: "Accesio",
    models: ["iPhone 12"],
    quality: "DD",
    price: 2999,
    oldPrice: 3499,
    stock: 3,
    colours: ["Black"],
    rating: 4.5,
    badge: "DD Quality",
    image: "",
    video: "",
    description: "Replacement display assembly for iPhone 12."
  },

  {
    id: "sp-display-13-dd",
    name: "iPhone 13 Display",
    category: "Spares",
    subcategory: "Displays",
    brand: "Accesio",
    models: ["iPhone 13"],
    quality: "DD",
    price: 3499,
    oldPrice: 3999,
    stock: 3,
    colours: ["Black"],
    rating: 4.6,
    badge: "DD Quality",
    image: "",
    video: "",
    description: "Replacement display assembly for iPhone 13."
  },

  {
    id: "sp-display-14-dd",
    name: "iPhone 14 Display",
    category: "Spares",
    subcategory: "Displays",
    brand: "Accesio",
    models: ["iPhone 14"],
    quality: "DD",
    price: 3999,
    oldPrice: 4499,
    stock: 3,
    colours: ["Black"],
    rating: 4.6,
    badge: "DD Quality",
    image: "",
    video: "",
    description: "Replacement display assembly for iPhone 14."
  },


  // ====================================================
  // IPHONE SPARES - BATTERIES
  // ====================================================

  {
    id: "sp-battery-11",
    name: "iPhone 11 Replacement Battery",
    category: "Spares",
    subcategory: "Batteries",
    brand: "Accesio",
    models: ["iPhone 11"],
    quality: "Premium",
    price: 999,
    oldPrice: 1299,
    stock: 5,
    colours: ["Black"],
    rating: 4.5,
    badge: "Battery",
    image: "",
    video: "",
    description: "Replacement battery for iPhone 11."
  },

  {
    id: "sp-battery-12",
    name: "iPhone 12 Replacement Battery",
    category: "Spares",
    subcategory: "Batteries",
    brand: "Accesio",
    models: ["iPhone 12"],
    quality: "Premium",
    price: 1099,
    oldPrice: 1399,
    stock: 5,
    colours: ["Black"],
    rating: 4.5,
    badge: "Battery",
    image: "",
    video: "",
    description: "Replacement battery for iPhone 12."
  },

  {
    id: "sp-battery-13",
    name: "iPhone 13 Replacement Battery",
    category: "Spares",
    subcategory: "Batteries",
    brand: "Accesio",
    models: ["iPhone 13"],
    quality: "Premium",
    price: 1199,
    oldPrice: 1499,
    stock: 5,
    colours: ["Black"],
    rating: 4.6,
    badge: "Battery",
    image: "",
    video: "",
    description: "Replacement battery for iPhone 13."
  },

  {
    id: "sp-battery-14",
    name: "iPhone 14 Replacement Battery",
    category: "Spares",
    subcategory: "Batteries",
    brand: "Accesio",
    models: ["iPhone 14"],
    quality: "Premium",
    price: 1299,
    oldPrice: 1599,
    stock: 5,
    colours: ["Black"],
    rating: 4.6,
    badge: "Battery",
    image: "",
    video: "",
    description: "Replacement battery for iPhone 14."
  },


  // ====================================================
  // IPHONE SPARES - BACK GLASS
  // ====================================================

  {
    id: "sp-backglass-13",
    name: "iPhone 13 Back Glass",
    category: "Spares",
    subcategory: "Back Glass",
    brand: "Accesio",
    models: ["iPhone 13"],
    quality: "Premium",
    price: 899,
    oldPrice: 1199,
    stock: 5,
    colours: ["Midnight", "Blue", "Starlight", "Red"],
    rating: 4.5,
    badge: "Back Glass",
    image: "",
    video: "",
    description: "Replacement back glass available in model-specific colours."
  },

  {
    id: "sp-backglass-14",
    name: "iPhone 14 Back Glass",
    category: "Spares",
    subcategory: "Back Glass",
    brand: "Accesio",
    models: ["iPhone 14"],
    quality: "Premium",
    price: 999,
    oldPrice: 1299,
    stock: 5,
    colours: ["Midnight", "Blue", "Purple", "Starlight", "Red"],
    rating: 4.5,
    badge: "Back Glass",
    image: "",
    video: "",
    description: "Replacement back glass available in model-specific colours."
  },

  {
    id: "sp-backglass-15",
    name: "iPhone 15 Back Glass",
    category: "Spares",
    subcategory: "Back Glass",
    brand: "Accesio",
    models: ["iPhone 15"],
    quality: "Premium",
    price: 1199,
    oldPrice: 1499,
    stock: 5,
    colours: ["Black", "Blue", "Green", "Yellow", "Pink"],
    rating: 4.6,
    badge: "Back Glass",
    image: "",
    video: "",
    description: "Replacement back glass for iPhone 15."
  },


  // ====================================================
  // IPHONE SPARES - CAMERAS
  // ====================================================

  {
    id: "sp-frontcamera-13",
    name: "iPhone 13 Front Camera",
    category: "Spares",
    subcategory: "Front Camera",
    brand: "Accesio",
    models: ["iPhone 13"],
    quality: "Premium",
    price: 1499,
    oldPrice: 1799,
    stock: 3,
    colours: ["Black"],
    rating: 4.5,
    badge: "Camera",
    image: "",
    video: "",
    description: "Replacement front camera module for iPhone 13."
  },

  {
    id: "sp-rearcamera-13",
    name: "iPhone 13 Rear Camera",
    category: "Spares",
    subcategory: "Rear Camera",
    brand: "Accesio",
    models: ["iPhone 13"],
    quality: "Premium",
    price: 2499,
    oldPrice: 2999,
    stock: 3,
    colours: ["Black"],
    rating: 4.5,
    badge: "Camera",
    image: "",
    video: "",
    description: "Replacement rear camera module for iPhone 13."
  },


  // ====================================================
  // OTHER IPHONE SPARES
  // ====================================================

  {
    id: "sp-charging-13",
    name: "iPhone 13 Charging Flex",
    category: "Spares",
    subcategory: "Charging Flex",
    brand: "Accesio",
    models: ["iPhone 13"],
    quality: "Premium",
    price: 899,
    oldPrice: 1199,
    stock: 4,
    colours: ["Black"],
    rating: 4.4,
    badge: "Spare Part",
    image: "",
    video: "",
    description: "Replacement charging port flex assembly."
  },

  {
    id: "sp-earpiece-13",
    name: "iPhone 13 Earpiece Speaker",
    category: "Spares",
    subcategory: "Earpiece",
    brand: "Accesio",
    models: ["iPhone 13"],
    quality: "Premium",
    price: 599,
    oldPrice: 799,
    stock: 5,
    colours: ["Black"],
    rating: 4.4,
    badge: "Spare Part",
    image: "",
    video: "",
    description: "Replacement earpiece speaker module."
  },

  {
    id: "sp-ringer-13",
    name: "iPhone 13 Ringer Speaker",
    category: "Spares",
    subcategory: "Ringer",
    brand: "Accesio",
    models: ["iPhone 13"],
    quality: "Premium",
    price: 699,
    oldPrice: 899,
    stock: 5,
    colours: ["Black"],
    rating: 4.5,
    badge: "Spare Part",
    image: "",
    video: "",
    description: "Replacement loudspeaker/ringer module."
  },

  {
    id: "sp-housing-13",
    name: "iPhone 13 Housing",
    category: "Spares",
    subcategory: "Housing",
    brand: "Accesio",
    models: ["iPhone 13"],
    quality: "Premium",
    price: 2499,
    oldPrice: 2999,
    stock: 2,
    colours: ["Midnight", "Blue", "Starlight", "Red"],
    rating: 4.5,
    badge: "Housing",
    image: "",
    video: "",
    description: "Replacement housing/frame for iPhone 13."
  },


  // ====================================================
  // GENERAL ACCESSORIES
  // ====================================================

  {
    id: "acc-holder-001",
    name: "Magnetic Phone Holder",
    category: "Accessories",
    subcategory: "Mobile Holders",
    brand: "Accesio",
    models: ["Universal"],
    quality: "Premium",
    price: 399,
    oldPrice: 599,
    stock: 10,
    colours: ["Black"],
    rating: 4.6,
    badge: "Popular",
    image: "",
    video: "",
    description: "Compact magnetic holder for smartphones."
  },

  {
    id: "acc-cleaning-001",
    name: "Mobile Cleaning Kit",
    category: "Accessories",
    subcategory: "Mobile Care",
    brand: "Accesio",
    models: ["Universal"],
    quality: "Standard",
    price: 149,
    oldPrice: 249,
    stock: 15,
    colours: ["Black"],
    rating: 4.4,
    badge: "Value",
    image: "",
    video: "",
    description: "Basic cleaning kit for smartphones and accessories."
  }

];


// ======================================================
// CATEGORIES
// ======================================================

const categories = [

  {
    id: "iphone-accessories",
    name: "iPhone Accessories",
    description: "Cases, glass, chargers, cables and more.",
    image: ""
  },

  {
    id: "iphone-spares",
    name: "iPhone Spares",
    description: "Displays, batteries, cameras and replacement parts.",
    image: ""
  },

  {
    id: "cases",
    name: "Cases",
    description: "Premium protective cases for iPhone.",
    image: ""
  },

  {
    id: "tempered-glass",
    name: "Tempered Glass",
    description: "Screen protection for your iPhone.",
    image: ""
  },

  {
    id: "chargers",
    name: "Chargers",
    description: "Fast charging adapters and accessories.",
    image: ""
  },

  {
    id: "cables",
    name: "Cables",
    description: "Charging and data cables.",
    image: ""
  },

  {
    id: "displays",
    name: "Displays",
    description: "Replacement iPhone displays.",
    image: ""
  },

  {
    id: "batteries",
    name: "Batteries",
    description: "Replacement batteries for iPhone.",
    image: ""
  },

  {
    id: "back-glass",
    name: "Back Glass",
    description: "Replacement back glass in model-specific colours.",
    image: ""
  },

  {
    id: "cameras",
    name: "Cameras",
    description: "Front and rear replacement camera modules.",
    image: ""
  }

];


// ======================================================
// IPHONE MODELS
// ======================================================

const iphoneModels = [

  "iPhone 7",
  "iPhone 8",
  "iPhone X",
  "iPhone XS",
  "iPhone XR",
  "iPhone 11",
  "iPhone 11 Pro",
  "iPhone 11 Pro Max",
  "iPhone 12",
  "iPhone 12 Pro",
  "iPhone 12 Pro Max",
  "iPhone 13",
  "iPhone 13 Pro",
  "iPhone 13 Pro Max",
  "iPhone 14",
  "iPhone 14 Plus",
  "iPhone 14 Pro",
  "iPhone 14 Pro Max",
  "iPhone 15",
  "iPhone 15 Plus",
  "iPhone 15 Pro",
  "iPhone 15 Pro Max",
  "iPhone 16",
  "iPhone 16 Plus",
  "iPhone 16 Pro",
  "iPhone 16 Pro Max",
  "iPhone 17",
  "iPhone 17 Air",
  "iPhone 17 Pro",
  "iPhone 17 Pro Max"

];


// ======================================================
// WEBSITE SETTINGS
// ======================================================

const storeSettings = {

  storeName: "ACCESIO WORLD",

  tagline: "Premium Mobile Accessories & Spares",

  currency: "₹",

  delivery: "All India Delivery",

  paymentMethods: [
    "UPI",
    "Cash on Delivery",
    "Online Payment"
  ],

  social: {
    instagram: "",
    facebook: "",
    whatsapp: ""
  }

};
