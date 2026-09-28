/* =========================================
   ACCESIO WORLD
   BASIC FRONTEND LOGIC
========================================= */

let cart = [];


/* =========================================
   ELEMENTS
========================================= */

const featuredProducts =
    document.getElementById("featuredProducts");

const cartCount =
    document.getElementById("cartCount");

const cartDrawer =
    document.getElementById("cartDrawer");

const cartOverlay =
    document.getElementById("cartOverlay");

const cartItems =
    document.getElementById("cartItems");

const cartTotal =
    document.getElementById("cartTotal");

const mobileMenu =
    document.getElementById("mobileMenu");

const menuButton =
    document.getElementById("menuButton");

const searchButton =
    document.getElementById("searchButton");

const searchPanel =
    document.getElementById("searchPanel");

const closeSearch =
    document.getElementById("closeSearch");

const closeCart =
    document.getElementById("closeCart");


/* =========================================
   DISPLAY PRODUCTS
========================================= */

function displayProducts() {

    featuredProducts.innerHTML = "";


    products.forEach(product => {

        const card =
            document.createElement("article");

        card.className =
            "product-card";


        const imageHTML =
            product.image

                ? `
                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >
                  `

                : `
                    <div class="product-placeholder">

                        <i class="fa-solid fa-mobile-screen-button"></i>

                    </div>
                  `;


        card.innerHTML = `

            <div class="product-image">

                ${imageHTML}

            </div>


            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>


                <div class="rating">

                    ${"★".repeat(5)}

                    <span>
                        ${product.rating}
                    </span>

                </div>


                <div class="product-bottom">

                    <div>

                        <span class="price">
                            ₹${product.price.toLocaleString("en-IN")}
                        </span>

                    </div>


                    <button
                        class="add-cart"
                        onclick="addToCart(${product.id})"
                        aria-label="Add to cart"
                    >

                        <i class="fa-solid fa-plus"></i>

                    </button>

                </div>

            </div>

        `;


        featuredProducts.appendChild(card);

    });

}


/* =========================================
   ADD TO CART
========================================= */

function addToCart(productId) {

    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) return;


    const existing =
        cart.find(
            item => item.id === productId
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }


    updateCart();


    openCart();

}


/* =========================================
   UPDATE CART
========================================= */

function updateCart() {

    const totalQuantity =
        cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );


    cartCount.textContent =
        totalQuantity;


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <i class="fa-solid fa-bag-shopping"></i>

                <p>
                    Your cart is empty.
                </p>

            </div>

        `;

        cartTotal.textContent =
            "₹0";

        return;

    }


    cartItems.innerHTML = "";


    let total = 0;


    cart.forEach(item => {

        total +=
            item.price * item.quantity;


        const itemElement =
            document.createElement("div");


        itemElement.style.cssText = `
            display:flex;
            gap:12px;
            padding:15px 0;
            border-bottom:1px solid #e6ebe8;
        `;


        itemElement.innerHTML = `

            <div
                style="
                    width:70px;
                    height:80px;
                    border-radius:12px;
                    background:#f4f6f5;
                    display:grid;
                    place-items:center;
                    color:#9aa8a2;
                "
            >

                <i class="fa-solid fa-mobile-screen"></i>

            </div>


            <div style="flex:1">

                <strong
                    style="
                        display:block;
                        font-size:13px;
                    "
                >
                    ${item.name}
                </strong>


                <span
                    style="
                        display:block;
                        margin-top:6px;
                        color:#68706c;
                        font-size:12px;
                    "
                >
                    ₹${item.price.toLocaleString("en-IN")}
                </span>


                <div
                    style="
                        margin-top:8px;
                        display:flex;
                        gap:10px;
                        align-items:center;
                    "
                >

                    <button
                        onclick="changeQuantity(${item.id}, -1)"
                        style="
                            border:none;
                            width:25px;
                            height:25px;
                            border-radius:7px;
                        "
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="changeQuantity(${item.id}, 1)"
                        style="
                            border:none;
                            width:25px;
                            height:25px;
                            border-radius:7px;
                        "
                    >
                        +
                    </button>

                </div>

            </div>

        `;


        cartItems.appendChild(itemElement);

    });


    cartTotal.textContent =
        "₹" + total.toLocaleString("en-IN");

}


/* =========================================
   CHANGE QUANTITY
========================================= */

function changeQuantity(
    productId,
    amount
) {

    const item =
        cart.find(
            product =>
                product.id === productId
        );


    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                product =>
                    product.id !== productId
            );

    }


    updateCart();

}


/* =========================================
   OPEN CART
========================================= */

function openCart() {

    cartDrawer.classList.add("open");

    cartOverlay.classList.add("open");

}


/* =========================================
   CLOSE CART
========================================= */

function closeCartDrawer() {

    cartDrawer.classList.remove("open");

    cartOverlay.classList.remove("open");

}


closeCart.addEventListener(
    "click",
    closeCartDrawer
);


cartOverlay.addEventListener(
    "click",
    closeCartDrawer
);


document
    .querySelector(".cart-button")
    .addEventListener(
        "click",
        openCart
    );


/* =========================================
   MOBILE MENU
========================================= */

menuButton.addEventListener(
    "click",
    () => {

        mobileMenu.classList.toggle("open");

    }
);


/* =========================================
   SEARCH
========================================= */

searchButton.addEventListener(
    "click",
    () => {

        searchPanel.classList.add("open");

        document
            .getElementById("searchInput")
            .focus();

    }
);


closeSearch.addEventListener(
    "click",
    () => {

        searchPanel.classList.remove("open");

    }
);


/* =========================================
   NEWSLETTER
========================================= */

document
    .querySelector(".newsletter-form")
    .addEventListener(
        "submit",
        event => {

            event.preventDefault();

            alert(
                "Thank you for joining Accesio World!"
            );

        }
    );


/* =========================================
   INITIALIZE
========================================= */

displayProducts();

updateCart();
