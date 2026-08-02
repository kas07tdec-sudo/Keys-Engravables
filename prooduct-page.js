/* =========================================================
   PRODUCT PAGE JAVASCRIPT
   ========================================================= */


/* ==================== PRODUCT DATA ==================== */

const productData = [

    {
        id: 1,
        name: "Custom Bracelet with Engraving",
        price: 599.99,
        image: "p1.jpg",
        description: "A custom bracelet with precision engraving and elegant craftsmanship."
    },

    {
        id: 2,
        name: "Custom Ring with Engraving",
        price: 299.99,
        image: "p2.jpg",
        description: "A beautiful custom ring designed to cherish forever."
    },

    {
        id: 3,
        name: "Custom Pendant with Engraving",
        price: 149.99,
        image: "p3.jpg",
        description: "A personalized pendant designed for everyday elegance."
    },

    {
        id: 4,
        name: "Custom Engraved Ring",
        price: 499.99,
        image: "p4.jpg",
        description: "An elegant engraved ring created with attention to detail."
    },

    {
        id: 5,
        name: "Custom Champagne Flutes",
        price: 499.99,
        image: "p5.jpg",
        description: "Beautifully engraved champagne flutes for special celebrations."
    },

    {
        id: 6,
        name: "Custom Keepsake",
        price: 499.99,
        image: "p6.webp",
        description: "A personalized keepsake designed to preserve special memories."
    },

    {
        id: 7,
        name: "Custom Keepsake Frame",
        price: 499.99,
        image: "p7.webp",
        description: "A beautifully engraved keepsake frame."
    },

    {
        id: 8,
        name: "Custom Leather Wallet",
        price: 499.99,
        image: "p8.webp",
        description: "A personalized leather wallet with elegant custom engraving."
    },

    {
        id: 9,
        name: "Custom Engraved Gift",
        price: 499.99,
        image: "p9.webp",
        description: "A unique personalized gift designed for memorable occasions."
    },

    {
        id: 10,
        name: "Studded Bracelet Jewelry",
        price: 499.99,
        image: "p10.webp",
        description: "A stylish studded bracelet featuring personalized engraving."
    },

    {
        id: 11,
        name: "Custom Serenity",
        price: 499.99,
        image: "p11.webp",
        description: "An elegant personalized piece designed with timeless beauty."
    },

    {
        id: 12,
        name: "Custom Radiance",
        price: 499.99,
        image: "p12.webp",
        description: "A radiant personalized gift crafted for unforgettable moments."
    },

    {
        id: 13,
        name: "Custom Crystal Cube",
        price: 499.99,
        image: "p13.webp",
        description: "A premium crystal cube featuring personalized engraving."
    },

    {
        id: 14,
        name: "Custom Engraved Mug",
        price: 499.99,
        image: "p14.webp",
        description: "A personalized mug perfect for everyday use or gifting."
    },

    {
        id: 15,
        name: "Custom Engraved Lighter",
        price: 499.99,
        image: "p15.webp",
        description: "A stylish personalized lighter with custom engraving."
    },

    {
        id: 16,
        name: "Custom Engraved Frame",
        price: 499.99,
        image: "p16.webp",
        description: "A personalized frame designed to display your favorite memories."
    },

    {
        id: 17,
        name: "Custom Engraved Bell",
        price: 499.99,
        image: "p17.webp",
        description: "A decorative engraved bell created as a unique personalized gift."
    },

    {
        id: 18,
        name: "Custom Engraved Sculpture",
        price: 499.99,
        image: "p18.webp",
        description: "An artistic sculpture featuring elegant personalized engraving."
    },

    {
        id: 19,
        name: "Custom Engraved Pandal",
        price: 499.99,
        image: "p19.jpg",
        description: "A unique decorative personalized engraving piece."
    },

    {
        id: 20,
        name: "Custom Engraved Bracelet",
        price: 499.99,
        image: "p20.webp",
        description: "A timeless bracelet personalized with your own engraving."
    },

    {
        id: 21,
        name: "Custom Engraved Pen",
        price: 499.99,
        image: "p21.jpg",
        description: "A premium personalized pen perfect for gifting."
    }

];


/* ==================== CART ==================== */

let cart =
    JSON.parse(
        localStorage.getItem(
            "engravingsCart"
        )
    ) || [];


/* ==================== PAGINATION ==================== */

let displayedProducts = 0;

const productsPerPage = 6;


/* ==================== DOM READY ==================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeNavigation();

        renderProducts();

        initializeCart();

        initializeBackToTop();

        updateCartUI();

    }
);


/* ==================== NAVIGATION ==================== */

function showSidebar() {

    const sidebar =
        document.getElementById(
            "side-bar"
        );

    sidebar.classList.add(
        "active"
    );

}


function hideSidebar() {

    const sidebar =
        document.getElementById(
            "side-bar"
        );

    sidebar.classList.remove(
        "active"
    );

}


function initializeNavigation() {

    document
        .querySelectorAll(
            ".side-bar a"
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                hideSidebar
            );

        });

}


/* ==================== RENDER PRODUCTS ==================== */

function renderProducts() {

    const container =
        document.getElementById(
            "product-container"
        );


    const loadMoreButton =
        document.getElementById(
            "load-more-btn"
        );


    const nextProducts =
        productData.slice(

            displayedProducts,

            displayedProducts +
            productsPerPage

        );


    nextProducts.forEach(
        product => {

            const card =
                createProductCard(
                    product
                );

            container.appendChild(
                card
            );

        }
    );


    displayedProducts +=
        nextProducts.length;


    if (
        displayedProducts >=
        productData.length
    ) {

        loadMoreButton.style.display =
            "none";

    }

}


/* ==================== PRODUCT CARD ==================== */

function createProductCard(
    product
) {

    const card =
        document.createElement(
            "div"
        );


    card.className =
        "product-card";


    card.innerHTML = `

        <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
        >

        <h3 class="product-name">
            ${product.name}
        </h3>

        <p class="price">
            $${product.price.toFixed(2)}
        </p>

        <button
            type="button"
            class="cta-button add-product-btn"
        >
            Add to Cart
        </button>

    `;


    card.addEventListener(
        "click",
        event => {

            if (
                event.target.classList.contains(
                    "add-product-btn"
                )
            ) {
                return;
            }

            addToCart(
                product.id,
                product.name,
                product.price
            );

        }
    );


    const addButton =
        card.querySelector(
            ".add-product-btn"
        );


    addButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            addToCart(
                product.id,
                product.name,
                product.price
            );

        }
    );


    return card;

}


/* ==================== LOAD MORE ==================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const button =
            document.getElementById(
                "load-more-btn"
            );


        if (button) {

            button.addEventListener(
                "click",
                renderProducts
            );

        }

    }
);


/* ==================== CART ==================== */

function addToCart(
    productId,
    productName,
    productPrice
) {

    const existing =
        cart.find(
            item =>
                item.id === productId
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            id: productId,

            name: productName,

            price: productPrice,

            quantity: 1

        });

    }


    saveCart();

    updateCartUI();

    showNotification(
        productName
    );

}


function saveCart() {

    localStorage.setItem(
        "engravingsCart",
        JSON.stringify(cart)
    );

}


/* ==================== CART UI ==================== */

function updateCartUI() {

    const container =
        document.getElementById(
            "cart-items"
        );


    const count =
        document.getElementById(
            "cart-count"
        );


    const totalElement =
        document.getElementById(
            "cart-total"
        );


    container.innerHTML = "";


    let total = 0;

    let itemCount = 0;


    if (
        cart.length === 0
    ) {

        container.innerHTML = `

            <div class="empty-cart">
                Your cart is empty.
            </div>

        `;

    }


    cart.forEach(
        (item, index) => {

            total +=
                item.price *
                item.quantity;


            itemCount +=
                item.quantity;


            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "cart-item";


            div.innerHTML = `

                <div class="cart-item-info">

                    <span>
                        ${item.name}
                    </span>

                    <span class="cart-item-price">
                        $${(
                            item.price *
                            item.quantity
                        ).toFixed(2)}
                    </span>

                </div>


                <div class="quantity-controls">

                    <button
                        class="quantity-btn"
                        data-index="${index}"
                        data-change="-1"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        class="quantity-btn"
                        data-index="${index}"
                        data-change="1"
                    >
                        +
                    </button>

                    <button
                        class="remove-btn"
                        data-index="${index}"
                    >
                        Remove
                    </button>

                </div>

            `;


            container.appendChild(
                div
            );

        }
    );


    count.textContent =
        itemCount;


    totalElement.textContent =
        `Total: $${total.toFixed(2)}`;


    attachCartEvents();

}


/* ==================== CART EVENTS ==================== */

function attachCartEvents() {

    document
        .querySelectorAll(
            ".quantity-btn"
        )
        .forEach(button => {

            button.onclick =
                () => {

                    const index =
                        Number(
                            button.dataset.index
                        );


                    const change =
                        Number(
                            button.dataset.change
                        );


                    updateQuantity(
                        index,
                        change
                    );

                };

        });


    document
        .querySelectorAll(
            ".remove-btn"
        )
        .forEach(button => {

            button.onclick =
                () => {

                    removeFromCart(

                        Number(
                            button.dataset.index
                        )

                    );

                };

        });

}


function updateQuantity(
    index,
    change
) {

    if (!cart[index]) {
        return;
    }


    cart[index].quantity +=
        change;


    if (
        cart[index].quantity <= 0
    ) {

        cart.splice(
            index,
            1
        );

    }


    saveCart();

    updateCartUI();

}


function removeFromCart(
    index
) {

    cart.splice(
        index,
        1
    );


    saveCart();

    updateCartUI();

}


/* ==================== CART MODAL ==================== */

function initializeCart() {

    const cartIcon =
        document.getElementById(
            "cart-icon"
        );


    const closeCart =
        document.getElementById(
            "close-cart"
        );


    const checkout =
        document.getElementById(
            "checkout-btn"
        );


    cartIcon.addEventListener(
        "click",
        () => {

            document.getElementById(
                "cart-modal"
            ).style.display =
                "block";

        }
    );


    closeCart.addEventListener(
        "click",
        () => {

            document.getElementById(
                "cart-modal"
            ).style.display =
                "none";

        }
    );


    checkout.addEventListener(
        "click",
        () => {

            if (
                cart.length === 0
            ) {

                alert(
                    "Your cart is empty."
                );

                return;

            }


            alert(
                "Thank you for your order! Checkout integration can be added here."
            );

        }
    );

}


/* ==================== NOTIFICATION ==================== */

function showNotification(
    productName
) {

    const notification =
        document.createElement(
            "div"
        );


    notification.textContent =
        `${productName} has been added to your cart!`;


    notification.style.cssText = `

        position: fixed;
        bottom: 25px;
        left: 50%;
        transform: translateX(-50%);
        background: #C5A100;
        color: white;
        padding: 14px 25px;
        border-radius: 5px;
        z-index: 30000;

    `;


    document.body.appendChild(
        notification
    );


    setTimeout(
        () => {

            notification.remove();

        },
        2500
    );

}


/* ==================== BACK TO TOP ==================== */

function initializeBackToTop() {

    const button =
        document.getElementById(
            "backToTopBtn"
        );


    window.addEventListener(
        "scroll",
        () => {

            if (
                window.scrollY > 300
            ) {

                button.classList.add(
                    "show"
                );

            } else {

                button.classList.remove(
                    "show"
                );

            }

        }
    );


    button.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}