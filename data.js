/* =====================================================
   ACCESIO WORLD
   PRODUCT DATABASE
   ===================================================== */

const categories = [

    {
        id: "cases",
        name: "Phone Cases",
        description: "Cases for your everyday style",
        icon: "📱"
    },

    {
        id: "screen-protection",
        name: "Screen Protection",
        description: "Tempered glass & protection",
        icon: "🛡️"
    },

    {
        id: "chargers",
        name: "Chargers",
        description: "Fast & reliable charging",
        icon: "⚡"
    },

    {
        id: "cables",
        name: "Cables",
        description: "Charging & data cables",
        icon: "🔌"
    },

    {
        id: "power-banks",
        name: "Power Banks",
        description: "Power wherever you go",
        icon: "🔋"
    },

    {
        id: "audio",
        name: "Audio",
        description: "Earphones & audio accessories",
        icon: "🎧"
    },

    {
        id: "phone-parts",
        name: "Mobile Spares",
        description: "Selected replacement parts",
        icon: "🔧"
    },

    {
        id: "other",
        name: "More Accessories",
        description: "More for your device",
        icon: "✨"
    }

];


/* =====================================================
   PRODUCTS
   ===================================================== */

const products = [

    /* ================= CASES ================= */

    {
        id: 1,
        name: "Premium Navy Phone Case",
        category: "cases",
        categoryName: "Phone Cases",
        model: "iPhone",
        price: 299,
        oldPrice: 499,
        icon: "📱",
        image: "",
        featured: true,
        stock: 10
    },

    {
        id: 2,
        name: "Clear MagSafe Case",
        category: "cases",
        categoryName: "Phone Cases",
        model: "iPhone",
        price: 349,
        oldPrice: 599,
        icon: "📱",
        image: "",
        featured: true,
        stock: 10
    },

    {
        id: 3,
        name: "Silicone Protection Case",
        category: "cases",
        categoryName: "Phone Cases",
        model: "iPhone",
        price: 249,
        oldPrice: 399,
        icon: "📱",
        image: "",
        featured: true,
        stock: 10
    },


    /* ================= SCREEN PROTECTION ================= */

    {
        id: 4,
        name: "9H Tempered Glass",
        category: "screen-protection",
        categoryName: "Screen Protection",
        model: "iPhone",
        price: 149,
        oldPrice: 299,
        icon: "🛡️",
        image: "",
        featured: true,
        stock: 20
    },

    {
        id: 5,
        name: "Premium Privacy Glass",
        category: "screen-protection",
        categoryName: "Screen Protection",
        model: "iPhone",
        price: 249,
        oldPrice: 399,
        icon: "🛡️",
        image: "",
        featured: true,
        stock: 15
    },

    {
        id: 6,
        name: "Camera Lens Protector",
        category: "screen-protection",
        categoryName: "Screen Protection",
        model: "iPhone",
        price: 149,
        oldPrice: 249,
        icon: "📷",
        image: "",
        featured: false,
        stock: 20
    },


    /* ================= CHARGERS ================= */

    {
        id: 7,
        name: "20W Fast Charger",
        category: "chargers",
        categoryName: "Chargers",
        model: "Universal",
        price: 499,
        oldPrice: 799,
        icon: "⚡",
        image: "",
        featured: true,
        stock: 10
    },

    {
        id: 8,
        name: "30W PD Fast Charger",
        category: "chargers",
        categoryName: "Chargers",
        model: "Universal",
        price: 699,
        oldPrice: 999,
        icon: "⚡",
        image: "",
        featured: true,
        stock: 10
    },


    /* ================= CABLES ================= */

    {
        id: 9,
        name: "Type-C to Type-C Cable",
        category: "cables",
        categoryName: "Cables",
        model: "Universal",
        price: 299,
        oldPrice: 499,
        icon: "🔌",
        image: "",
        featured: true,
        stock: 20
    },

    {
        id: 10,
        name: "USB-A to Type-C Cable",
        category: "cables",
        categoryName: "Cables",
        model: "Universal",
        price: 199,
        oldPrice: 349,
        icon: "🔌",
        image: "",
        featured: false,
        stock: 20
    },


    /* ================= POWER BANKS ================= */

    {
        id: 11,
        name: "10,000mAh Power Bank",
        category: "power-banks",
        categoryName: "Power Banks",
        model: "Universal",
        price: 899,
        oldPrice: 1299,
        icon: "🔋",
        image: "",
        featured: true,
        stock: 8
    },

    {
        id: 12,
        name: "20,000mAh Power Bank",
        category: "power-banks",
        categoryName: "Power Banks",
        model: "Universal",
        price: 1299,
        oldPrice: 1799,
        icon: "🔋",
        image: "",
        featured: false,
        stock: 6
    },


    /* ================= AUDIO ================= */

    {
        id: 13,
        name: "Wireless Earbuds",
        category: "audio",
        categoryName: "Audio",
        model: "Universal",
        price: 799,
        oldPrice: 1299,
        icon: "🎧",
        image: "",
        featured: true,
        stock: 10
    },

    {
        id: 14,
        name: "Type-C Wired Earphones",
        category: "audio",
        categoryName: "Audio",
        model: "Universal",
        price: 399,
        oldPrice: 599,
        icon: "🎧",
        image: "",
        featured: false,
        stock: 15
    },


    /* ================= MOBILE SPARES ================= */

    {
        id: 15,
        name: "iPhone Charging Flex",
        category: "phone-parts",
        categoryName: "Mobile Spares",
        model: "iPhone",
        price: 499,
        oldPrice: 699,
        icon: "🔧",
        image: "",
        featured: true,
        stock: 5
    },

    {
        id: 16,
        name: "iPhone Earpiece Speaker",
        category: "phone-parts",
        categoryName: "Mobile Spares",
        model: "iPhone",
        price: 399,
        oldPrice: 599,
        icon: "🔧",
        image: "",
        featured: false,
        stock: 5
    },


    /* ================= MORE ================= */

    {
        id: 17,
        name: "Magnetic Phone Holder",
        category: "other",
        categoryName: "More Accessories",
        model: "Universal",
        price: 349,
        oldPrice: 599,
        icon: "✨",
        image: "",
        featured: true,
        stock: 10
    },

    {
        id: 18,
        name: "Cleaning Kit",
        category: "other",
        categoryName: "More Accessories",
        model: "Universal",
        price: 199,
        oldPrice: 299,
        icon: "✨",
        image: "",
        featured: false,
        stock: 20
    }

];


/* =====================================================
   WEBSITE SETTINGS
   ===================================================== */

const siteSettings = {

    brandName: "ACCESIO WORLD",

    tagline: "Mobile accessories for your everyday world.",

    currency: "₹",

    country: "India",

    whatsapp: "",

    instagram: "",

    facebook: "",

    email: "",

    deliveryText: "Fast delivery across India",

    paymentText: "Secure payment",

    returnText: "Easy returns"

};
