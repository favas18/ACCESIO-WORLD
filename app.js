/* =====================================================
   ACCESIO WORLD
   MAIN WEBSITE JAVASCRIPT
   ===================================================== */


/* ================= CART ================= */

let cart = JSON.parse(localStorage.getItem("accesioCart")) || [];


/* ================= PAGE LOAD ================= */

document.addEventListener("DOMContentLoaded", () => {

    renderCategories();

    renderFeaturedProducts();

    updateCartCount();

});


/* =====================================================
   CATEGORIES
   ===================================================== */

function renderCategories() {

    const container = document.getElementById("categoryGrid");

    if (!container) return;

    container.innerHTML = "";

    categories.forEach(category => {

        const card = document.createElement("div");

        card.className = "category-card";

        card.onclick = () => {
            showCategoryProducts(category.id);
        };

        card.innerHTML = `

            <div class="category-card-image">
                ${category.icon}
            </div>

            <div class="category-card-content">

                <h3>
                    ${category.name}
                </h3>

                <p>
                    ${category.description}
                </p>

            </div>

        `;

        container.appendChild(card);

    });

}


/* =====================================================
   FEATURED PRODUCTS
   ===================================================== */

function renderFeaturedProducts() {

    const container = document.getElementById("productGrid");

    if (!container) return;

    const featured = products.filter(product => product.featured);

    renderProducts(featured, container);

}


/* =====================================================
   RENDER PRODUCTS
   ===================================================== */

function renderProducts(productList, container) {

    container.innerHTML = "";

    if (productList.length === 0) {

        container.innerHTML = `

            <div style="
                grid-column:1/-1;
                padding:60px 20px;
                text-align:center;
                color:#777;
            ">

                <div style="
                    font-size:45px;
                    margin-bottom:15px;
                ">
                    📦
                </div>

                <strong>
                    No products found
                </strong>

                <p style="
                    margin-top:7px;
                    font-size:13px;
                ">
                    Try another search or category.
                </p>

            </div>

        `;

        return;
    }


    productList.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";


        /* Product image */

        let imageHTML = "";

        if (product.image && product.image.trim() !== "") {

            imageHTML = `

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

            `;

        } else {

            imageHTML = `

                <div class="product-placeholder">
                    ${product.icon}
                </div>

            `;

        }


        /* Old price */

        let oldPriceHTML = "";

        if (product.oldPrice) {

            oldPriceHTML = `

                <span class="product-old-price">
                    ₹${product.oldPrice}
                </span>

            `;

        }


        card.innerHTML = `

            <div class="product-image">

                ${imageHTML}

            </div>


            <div class="product-info">

                <div class="product-category">
                    ${product.categoryName}
                </div>

                <div class="product-name">
                    ${product.name}
                </div>

                <div class="product-price">

                    ₹${product.price}

                    ${oldPriceHTML}

                </div>


                <button
                    class="add-cart-btn"
                    onclick="addToCart(${product.id})"
                >

                    Add to Cart

                </button>

            </div>

        `;


        container.appendChild(card);

    });

}


/* =====================================================
   SHOW CATEGORY PRODUCTS
   ===================================================== */

function showCategoryProducts(categoryId) {

    const category = categories.find(
        item => item.id === categoryId
    );

    if (!category) return;


    const categoryProducts = products.filter(
        product => product.category === categoryId
    );


    const container = document.getElementById("productGrid");

    renderProducts(categoryProducts, container);


    const heading = document.querySelector(
        "#featured .section-heading h2"
    );

    if (heading) {

        heading.textContent = category.name;

    }


    document.getElementById("featured")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =====================================================
   SHOW ALL PRODUCTS
   ===================================================== */

function showAllProducts() {

    const container = document.getElementById("productGrid");

    renderProducts(products, container);


    const heading = document.querySelector(
        "#featured .section-heading h2"
    );

    if (heading) {

        heading.textContent = "All products.";

    }


    document.getElementById("featured")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =====================================================
   ADD TO CART
   ===================================================== */

function addToCart(productId) {

    const product = products.find(
        item => item.id === productId
    );

    if (!product) return;


    const existing = cart.find(
        item => item.id === productId
    );


    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            icon: product.icon,

            quantity: 1

        });

    }


    saveCart();

    updateCartCount();

    showCartMessage(product.name);

}


/* =====================================================
   SAVE CART
   ===================================================== */

function saveCart() {

    localStorage.setItem(
        "accesioCart",
        JSON.stringify(cart)
    );

}


/* =====================================================
   UPDATE CART COUNT
   ===================================================== */

function updateCartCount() {

    const countElement =
        document.getElementById("cartCount");

    if (!countElement) return;


    const count = cart.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );


    countElement.textContent = count;

}


/* =====================================================
   CART MESSAGE
   ===================================================== */

function showCartMessage(productName) {

    const message =
        document.createElement("div");


    message.style.position = "fixed";
    message.style.bottom = "25px";
    message.style.left = "50%";
    message.style.transform =
        "translateX(-50%)";

    message.style.zIndex = "5000";

    message.style.background = "#111";
    message.style.color = "#fff";

    message.style.padding =
        "13px 20px";

    message.style.borderRadius =
        "30px";

    message.style.fontSize =
        "13px";

    message.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.2)";


    message.textContent =
        `${productName} added to cart`;


    document.body.appendChild(message);


    setTimeout(() => {

        message.remove();

    }, 1800);

}


/* =====================================================
   OPEN CART
   ===================================================== */

function openCart() {

    renderCart();

    document
        .getElementById("cartOverlay")
        .classList.add("active");

}


/* =====================================================
   CLOSE CART
   ===================================================== */

function closeCart() {

    document
        .getElementById("cartOverlay")
        .classList.remove("active");

}


/* =====================================================
   RENDER CART
   ===================================================== */

function renderCart() {

    const container =
        document.getElementById("cartItems");

    const totalElement =
        document.getElementById("cartTotal");


    if (!container) return;


    container.innerHTML = "";


    if (cart.length === 0) {

        container.innerHTML = `

            <div style="
                padding:40px 0;
                text-align:center;
                color:#777;
            ">

                <div style="
                    font-size:45px;
                    margin-bottom:12px;
                ">
                    🛒
                </div>

                <strong>
                    Your cart is empty
                </strong>

                <p style="
                    margin-top:7px;
                    font-size:12px;
                ">
                    Add something you like.
                </p>

            </div>

        `;

        totalElement.textContent = "₹0";

        return;

    }


    let total = 0;


    cart.forEach(item => {

        total +=
            item.price * item.quantity;


        const cartItem =
            document.createElement("div");


        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <div class="cart-item-image">
                ${item.icon}
            </div>


            <div class="cart-item-details">

                <strong>
                    ${item.name}
                </strong>

                <span>
                    ₹${item.price}
                    × ${item.quantity}
                </span>

            </div>


            <button
                class="remove-cart"
                onclick="removeFromCart(${item.id})"
            >

                Remove

            </button>

        `;


        container.appendChild(cartItem);

    });


    totalElement.textContent =
        `₹${total.toLocaleString("en-IN")}`;

}


/* =====================================================
   REMOVE FROM CART
   ===================================================== */

function removeFromCart(productId) {

    cart =
        cart.filter(
            item => item.id !== productId
        );


    saveCart();

    updateCartCount();

    renderCart();

}


/* =====================================================
   SEARCH
   ===================================================== */

function openSearch() {

    document
        .getElementById("searchOverlay")
        .classList.add("active");


    setTimeout(() => {

        document
            .getElementById("searchInput")
            .focus();

    }, 100);

}


function closeSearch() {

    document
        .getElementById("searchOverlay")
        .classList.remove("active");


    document
        .getElementById("searchInput")
        .value = "";


    document
        .getElementById("searchResults")
        .innerHTML = "";

}


/* =====================================================
   SEARCH PRODUCTS
   ===================================================== */

function searchProducts() {

    const input =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    const results =
        document.getElementById(
            "searchResults"
        );


    if (!input) {

        results.innerHTML = "";

        return;

    }


    const matched =
        products.filter(product => {

            return (

                product.name
                    .toLowerCase()
                    .includes(input)

                ||

                product.categoryName
                    .toLowerCase()
                    .includes(input)

                ||

                product.model
                    .toLowerCase()
                    .includes(input)

            );

        });


    results.innerHTML = "";


    if (matched.length === 0) {

        results.innerHTML = `

            <p style="
                padding:20px 0;
                color:#777;
                font-size:13px;
            ">

                No products found for
                "<strong>${input}</strong>"

            </p>

        `;

        return;

    }


    matched.forEach(product => {

        const item =
            document.createElement("div");


        item.className =
            "search-result";


        item.onclick = () => {

            closeSearch();

            showProductFromSearch(
                product.id
            );

        };


        item.innerHTML = `

            <strong>
                ${product.name}
            </strong>

            <span>
                ${product.categoryName}
                · ₹${product.price}
            </span>

        `;


        results.appendChild(item);

    });

}


/* =====================================================
   SEARCH PRODUCT DISPLAY
   ===================================================== */

function showProductFromSearch(productId) {

    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) return;


    const container =
        document.getElementById(
            "productGrid"
        );


    renderProducts(
        [product],
        container
    );


    const heading =
        document.querySelector(
            "#featured .section-heading h2"
        );


    if (heading) {

        heading.textContent =
            product.name;

    }


    document
        .getElementById("featured")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =====================================================
   CHECKOUT
   ===================================================== */

function checkout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty."
        );

        return;

    }


    alert(
        "Checkout system will be connected next."
    );

}


/* =====================================================
   MOBILE MENU
   ===================================================== */

function toggleMenu() {

    document
        .getElementById("mobileMenu")
        .classList.toggle("active");

}


function closeMenu() {

    document
        .getElementById("mobileMenu")
        .classList.remove("active");

}


/* =====================================================
   CLOSE OVERLAY WHEN CLICKING OUTSIDE
   ===================================================== */

document.addEventListener(
    "click",
    function(event) {

        const searchOverlay =
            document.getElementById(
                "searchOverlay"
            );

        const cartOverlay =
            document.getElementById(
                "cartOverlay"
            );


        if (
            event.target ===
            searchOverlay
        ) {

            closeSearch();

        }


        if (
            event.target ===
            cartOverlay
        ) {

            closeCart();

        }

    }
);


/* =====================================================
   ESCAPE KEY
   ===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeSearch();

            closeCart();

            closeMenu();

        }

    }
);
