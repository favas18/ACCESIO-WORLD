/* =========================================================
   ACCESIO WORLD
   APP.JS — PRODUCT, SEARCH & CART SYSTEM
   ========================================================= */

let cart = JSON.parse(localStorage.getItem("accesioCart")) || [];
let activeModel = "";
let activeCategory = "";


/* =========================================================
   BASIC HELPERS
   ========================================================= */

function getProducts() {
    return Array.isArray(window.products) ? window.products : [];
}

function formatPrice(price) {
    return "₹" + Number(price || 0).toLocaleString("en-IN");
}

function escapeHTML(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   PRODUCT ICON
   ========================================================= */

function productIcon(product) {

    const text = (
        (product.subcategory || "") +
        " " +
        (product.category || "") +
        " " +
        (product.name || "")
    ).toLowerCase();

    if (text.includes("case")) return "📱";
    if (text.includes("glass")) return "🛡️";
    if (text.includes("charger")) return "🔌";
    if (text.includes("cable")) return "🔗";
    if (text.includes("battery")) return "🔋";
    if (text.includes("display")) return "📲";
    if (text.includes("camera")) return "📷";
    if (text.includes("holder")) return "📱";
    if (text.includes("clean")) return "✨";
    if (text.includes("housing")) return "📱";
    if (text.includes("speaker")) return "🔊";

    return "📦";
}


/* =========================================================
   PRODUCT CARD
   ========================================================= */

function productCard(product) {

    const image = product.image
        ? `
            <img
                src="${escapeHTML(product.image)}"
                alt="${escapeHTML(product.name)}"
                loading="lazy"
            >
          `
        : `
            <div class="product-placeholder">
                ${productIcon(product)}
            </div>
          `;

    const oldPrice = product.oldPrice
        ? `
            <span class="product-old-price">
                ${formatPrice(product.oldPrice)}
            </span>
          `
        : "";

    const stockText =
        Number(product.stock) > 0
            ? `In stock`
            : `Out of stock`;

    const disabled =
        Number(product.stock) <= 0
            ? "disabled"
            : "";

    return `
        <article class="product-card">

            <div class="product-image">
                ${image}
            </div>

            <div class="product-info">

                <div class="product-category">
                    ${escapeHTML(product.badge || product.subcategory || product.category)}
                </div>

                <div class="product-name">
                    ${escapeHTML(product.name)}
                </div>

                <div class="product-price">
                    ${formatPrice(product.price)}
                    ${oldPrice}
                </div>

                <div style="
                    margin-top:6px;
                    font-size:11px;
                    color:#777;
                ">
                    ${escapeHTML(product.models?.join(" • ") || "Universal")}
                    <br>
                    ${stockText}
                </div>

                <button
                    class="add-cart-btn"
                    onclick="addToCart('${escapeHTML(product.id)}')"
                    ${disabled}
                >
                    ${Number(product.stock) > 0 ? "Add to cart" : "Out of stock"}
                </button>

            </div>

        </article>
    `;
}


/* =========================================================
   SHOW PRODUCTS
   ========================================================= */

function renderProducts(list = getProducts()) {

    const grid = document.getElementById("productGrid");

    if (!grid) return;

    if (!list.length) {

        grid.innerHTML = `
            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:60px 20px;
                color:#777;
            ">
                <div style="font-size:40px;">🔍</div>

                <h3 style="margin-top:12px;">
                    No products found
                </h3>

                <p style="margin-top:5px;">
                    Try another model or product name.
                </p>
            </div>
        `;

        return;
    }

    grid.innerHTML = list.map(productCard).join("");
}


/* =========================================================
   SHOW FEATURED PRODUCTS
   ========================================================= */

function renderFeatured() {

    const products = getProducts();

    // Show first 8 products on homepage
    renderProducts(products.slice(0, 8));
}


/* =========================================================
   SHOW ALL PRODUCTS
   ========================================================= */

function showAllProducts() {

    activeModel = "";
    activeCategory = "";

    renderProducts(getProducts());

    const section = document.getElementById("featured");

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


/* =========================================================
   MODEL FILTER
   ========================================================= */

function searchByModel(model) {

    activeModel = model;
    activeCategory = "";

    const filtered = getProducts().filter(product => {

        const models = Array.isArray(product.models)
            ? product.models
            : [];

        return models.some(item =>
            String(item).toLowerCase() === String(model).toLowerCase()
        );
    });

    renderProducts(filtered);

    const section = document.getElementById("featured");

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


/* =========================================================
   CATEGORY FILTER
   ========================================================= */

function filterCategory(category) {

    activeCategory = category;
    activeModel = "";

    const filtered = getProducts().filter(product =>
        String(product.category).toLowerCase() ===
        String(category).toLowerCase()
    );

    renderProducts(filtered);

    const section = document.getElementById("featured");

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


/* =========================================================
   CATEGORY CARDS
   ========================================================= */

function renderCategories() {

    const grid = document.getElementById("categoryGrid");

    if (!grid || !Array.isArray(window.categories)) return;

    grid.innerHTML = window.categories.map(category => {

        const image = category.image
            ? `
                <img
                    src="${escapeHTML(category.image)}"
                    alt="${escapeHTML(category.name)}"
                    style="
                        width:100%;
                        height:100%;
                        object-fit:cover;
                    "
                >
              `
            : `
                <div style="
                    font-size:55px;
                    opacity:.85;
                ">
                    ${categoryIcon(category.name)}
                </div>
              `;

        return `
            <button
                class="category-card"
                onclick="filterCategory('${escapeHTML(category.name)}')"
                style="text-align:left;"
            >

                <div class="category-card-image">
                    ${image}
                </div>

                <div class="category-card-content">

                    <h3>
                        ${escapeHTML(category.name)}
                    </h3>

                    <p>
                        ${escapeHTML(category.description || "")}
                    </p>

                </div>

            </button>
        `;

    }).join("");
}


function categoryIcon(name) {

    const text = String(name).toLowerCase();

    if (text.includes("case")) return "📱";
    if (text.includes("glass")) return "🛡️";
    if (text.includes("charger")) return "🔌";
    if (text.includes("cable")) return "🔗";
    if (text.includes("display")) return "📲";
    if (text.includes("battery")) return "🔋";
    if (text.includes("camera")) return "📷";
    if (text.includes("spare")) return "🔧";

    return "✨";
}


/* =========================================================
   SEARCH
   ========================================================= */

function openSearch() {

    const overlay = document.getElementById("searchOverlay");

    if (!overlay) return;

    overlay.classList.add("active");

    const input = document.getElementById("searchInput");

    if (input) {
        setTimeout(() => input.focus(), 100);
    }
}


function closeSearch() {

    const overlay = document.getElementById("searchOverlay");

    if (overlay) {
        overlay.classList.remove("active");
    }

    const input = document.getElementById("searchInput");

    if (input) {
        input.value = "";
    }

    const results = document.getElementById("searchResults");

    if (results) {
        results.innerHTML = "";
    }
}


function searchProducts() {

    const input = document.getElementById("searchInput");
    const results = document.getElementById("searchResults");

    if (!input || !results) return;

    const query = input.value.trim().toLowerCase();

    if (!query) {
        results.innerHTML = "";
        return;
    }

    const matches = getProducts().filter(product => {

        const searchable = [

            product.name,
            product.category,
            product.subcategory,
            product.brand,
            product.quality,
            product.badge,

            ...(product.models || []),
            ...(product.colours || [])

        ]
        .join(" ")
        .toLowerCase();

        return searchable.includes(query);
    });

    if (!matches.length) {

        results.innerHTML = `
            <div class="search-result">
                <strong>No products found</strong>
                <span>
                    Try iPhone 13, case, battery, glass, charger...
                </span>
            </div>
        `;

        return;
    }

    results.innerHTML = matches.slice(0, 12).map(product => {

        return `
            <div
                class="search-result"
                onclick="addToCart('${escapeHTML(product.id)}'); closeSearch();"
            >

                <strong>
                    ${escapeHTML(product.name)}
                </strong>

                <span>
                    ${escapeHTML(product.models?.join(", ") || "Universal")}
                    · ${formatPrice(product.price)}
                </span>

            </div>
        `;

    }).join("");
}


/* =========================================================
   CART
   ========================================================= */

function saveCart() {

    localStorage.setItem(
        "accesioCart",
        JSON.stringify(cart)
    );
}


function addToCart(productId) {

    const product = getProducts().find(
        item => String(item.id) === String(productId)
    );

    if (!product) return;

    if (Number(product.stock) <= 0) {
        alert("This product is currently out of stock.");
        return;
    }

    const existing = cart.find(
        item => String(item.id) === String(productId)
    );

    if (existing) {

        if (existing.quantity < Number(product.stock)) {
            existing.quantity += 1;
        } else {
            alert("Maximum available stock reached.");
            return;
        }

    } else {

        cart.push({
            id: product.id,
            quantity: 1
        });

    }

    saveCart();
    updateCartCount();

    // Small confirmation
    showCartMessage(`${product.name} added to cart`);
}


function removeFromCart(productId) {

    cart = cart.filter(
        item => String(item.id) !== String(productId)
    );

    saveCart();

    renderCart();
    updateCartCount();
}


function changeCartQuantity(productId, amount) {

    const item = cart.find(
        item => String(item.id) === String(productId)
    );

    const product = getProducts().find(
        product => String(product.id) === String(productId)
    );

    if (!item || !product) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    if (item.quantity > Number(product.stock)) {
        item.quantity = Number(product.stock);
        alert("Maximum available stock reached.");
    }

    saveCart();

    renderCart();
    updateCartCount();
}


/* =========================================================
   CART COUNT
   ========================================================= */

function updateCartCount() {

    const countElement = document.getElementById("cartCount");

    if (!countElement) return;

    const totalItems = cart.reduce(
        (sum, item) => sum + Number(item.quantity || 0),
        0
    );

    countElement.textContent = totalItems;
}


/* =========================================================
   OPEN CART
   ========================================================= */

function openCart() {

    const overlay = document.getElementById("cartOverlay");

    if (!overlay) return;

    renderCart();

    overlay.classList.add("active");
}


function closeCart() {

    const overlay = document.getElementById("cartOverlay");

    if (overlay) {
        overlay.classList.remove("active");
    }
}


/* =========================================================
   RENDER CART
   ========================================================= */

function renderCart() {

    const container = document.getElementById("cartItems");
    const totalElement = document.getElementById("cartTotal");

    if (!container) return;

    if (!cart.length) {

        container.innerHTML = `
            <div style="
                padding:45px 10px;
                text-align:center;
                color:#777;
            ">

                <div style="font-size:45px;">
                    🛒
                </div>

                <h3 style="margin-top:12px;">
                    Your cart is empty
                </h3>

                <p style="margin-top:5px;">
                    Add products you want to order.
                </p>

            </div>
        `;

        if (totalElement) {
            totalElement.textContent = "₹0";
        }

        return;
    }

    let total = 0;

    container.innerHTML = cart.map(item => {

        const product = getProducts().find(
            product =>
                String(product.id) === String(item.id)
        );

        if (!product) return "";

        const itemTotal =
            Number(product.price) *
            Number(item.quantity);

        total += itemTotal;

        return `
            <div class="cart-item">

                <div class="cart-item-image">
                    ${productIcon(product)}
                </div>

                <div class="cart-item-details">

                    <strong>
                        ${escapeHTML(product.name)}
                    </strong>

                    <span>
                        ${formatPrice(product.price)}
                    </span>

                    <div style="
                        display:flex;
                        align-items:center;
                        gap:10px;
                        margin-top:8px;
                    ">

                        <button
                            onclick="changeCartQuantity('${escapeHTML(product.id)}', -1)"
                            style="
                                width:28px;
                                height:28px;
                                border:1px solid #ddd;
                                border-radius:50%;
                            "
                        >
                            −
                        </button>

                        <strong>
                            ${item.quantity}
                        </strong>

                        <button
                            onclick="changeCartQuantity('${escapeHTML(product.id)}', 1)"
                            style="
                                width:28px;
                                height:28px;
                                border:1px solid #ddd;
                                border-radius:50%;
                            "
                        >
                            +
                        </button>

                    </div>

                </div>

                <button
                    class="remove-cart"
                    onclick="removeFromCart('${escapeHTML(product.id)}')"
                >
                    Remove
                </button>

            </div>
        `;

    }).join("");

    if (totalElement) {
        totalElement.textContent = formatPrice(total);
    }
}


/* =========================================================
   CHECKOUT
   ========================================================= */

function checkout() {

    if (!cart.length) {
        alert("Your cart is empty.");
        return;
    }

    alert(
        "Checkout system will be connected next.\n\n" +
        "We will add customer name, phone, address, " +
        "payment and order tracking."
    );
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function toggleMenu() {

    const menu = document.getElementById("mobileMenu");

    if (!menu) return;

    menu.style.display =
        menu.style.display === "block"
            ? "none"
            : "block";
}


function closeMenu() {

    const menu = document.getElementById("mobileMenu");

    if (menu) {
        menu.style.display = "none";
    }
}


/* =========================================================
   SMALL CART MESSAGE
   ========================================================= */

function showCartMessage(message) {

    const old = document.getElementById("cartMessage");

    if (old) old.remove();

    const messageBox = document.createElement("div");

    messageBox.id = "cartMessage";

    messageBox.textContent = "✓ " + message;

    messageBox.style.cssText = `
        position:fixed;
        right:20px;
        bottom:20px;
        z-index:9999;
        padding:14px 18px;
        background:#111;
        color:#fff;
        border-radius:12px;
        font-size:13px;
        box-shadow:0 15px 40px rgba(0,0,0,.2);
    `;

    document.body.appendChild(messageBox);

    setTimeout(() => {

        messageBox.style.opacity = "0";
        messageBox.style.transition = "opacity .3s";

        setTimeout(() => {
            messageBox.remove();
        }, 300);

    }, 1800);
}


/* =========================================================
   START WEBSITE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    renderCategories();

    renderFeatured();

    updateCartCount();

    // Close overlays when clicking outside the box
    document.querySelectorAll(".overlay").forEach(overlay => {

        overlay.addEventListener("click", event => {

            if (event.target === overlay) {
                overlay.classList.remove("active");
            }

        });

    });

});


/* =========================================================
   END
   ========================================================= */
