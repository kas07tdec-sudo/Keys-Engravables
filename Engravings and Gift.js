/* =========================================================
   ENG RAVINGS AND GIFT - MAIN JAVASCRIPT
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
        description: "A personalized keepsake designed to preserve your special memories."
    },

    {
        id: 7,
        name: "Custom Keepsake Frame",
        price: 499.99,
        image: "p7.webp",
        description: "A beautifully engraved keepsake frame for your most treasured moments."
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
        description: "A premium crystal cube featuring beautiful personalized engraving."
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

let cart = JSON.parse(
    localStorage.getItem("engravingsCart")
) || [];


/* ==================== DOM READY ==================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeNavigation();

    renderFeaturedProducts();

    initializeCart();

    initializeProductModal();

    initializeTabs();

    initializeBackToTop();

    initializeNewsletter();

    updateCartUI();

});


/* ==================== LOADING SCREEN ==================== */

window.addEventListener("load", () => {

    const loadingScreen =
        document.getElementById("loading-animation");

    if (loadingScreen) {

        setTimeout(() => {

            loadingScreen.style.opacity = "0";

            setTimeout(() => {
                loadingScreen.style.display = "none";
            }, 500);

        }, 500);

    }

});


/* ==================== NAVIGATION ==================== */

function showSidebar() {

    const sidebar =
        document.getElementById("side-bar");

    if (sidebar) {
        sidebar.classList.add("active");
    }

}


function hideSidebar() {

    const sidebar =
        document.getElementById("side-bar");

    if (sidebar) {
        sidebar.classList.remove("active");
    }

}


function initializeNavigation() {

    document
        .querySelectorAll(".side-bar a")
        .forEach(link => {

            link.addEventListener("click", () => {
                hideSidebar();
            });

        });

}


/* ==================== FEATURED PRODUCTS ==================== */

function renderFeaturedProducts() {

    const container =
        document.getElementById("product-container");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    const featuredProducts =
        productData.slice(0, 6);

    featuredProducts.forEach(product => {

        const card =
            createProductCard(product);

        container.appendChild(card);

    });

}


function createProductCard(product) {

    const card =
        document.createElement("div");

    card.className = "product-card";

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


    card.addEventListener("click", event => {

        if (
            event.target.classList.contains(
                "add-product-btn"
            )
        ) {
            return;
        }

        openProductModal(product);

    });


    const addButton =
        card.querySelector(".add-product-btn");


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


/* ==================== ADD TO CART ==================== */

function addToCart(
    productId,
    productName,
    productPrice
) {

    const existingProduct =
        cart.find(
            item => item.id === productId
        );


    if (existingProduct) {

        existingProduct.quantity += 1;

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

    showAddToCartNotification(
        productName
    );

}


/* ==================== SAVE CART ==================== */

function saveCart() {

    localStorage.setItem(
        "engravingsCart",
        JSON.stringify(cart)
    );

}


/* ==================== CART UI ==================== */

function updateCartUI() {

    const cartItemsContainer =
        document.getElementById(
            "cart-items"
        );

    const cartCount =
        document.getElementById(
            "cart-count"
        );

    const cartTotal =
        document.getElementById(
            "cart-total"
        );


    if (
        !cartItemsContainer ||
        !cartCount ||
        !cartTotal
    ) {
        return;
    }


    cartItemsContainer.innerHTML = "";


    if (cart.length === 0) {

        cartItemsContainer.innerHTML = `

            <div class="empty-cart">
                Your cart is empty.
            </div>

        `;

    }


    let total = 0;

    let totalItems = 0;


    cart.forEach((item, index) => {

        total +=
            item.price *
            item.quantity;


        totalItems +=
            item.quantity;


        const cartItem =
            document.createElement("div");

        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <div class="cart-item-info">

                <span class="cart-item-name">
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
                    type="button"
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
                    type="button"
                    class="quantity-btn"
                    data-index="${index}"
                    data-change="1"
                >
                    +
                </button>


                <button
                    type="button"
                    class="remove-btn"
                    data-index="${index}"
                >
                    Remove
                </button>

            </div>

        `;


        cartItemsContainer.appendChild(
            cartItem
        );

    });


    cartCount.textContent =
        totalItems;


    cartTotal.textContent =
        `Total: $${total.toFixed(2)}`;


    attachCartEvents();

}


function attachCartEvents() {

    document
        .querySelectorAll(".quantity-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.index
                        );

                    const change =
                        Number(
                            button.dataset.change
                        );

                    updateItemQuantity(
                        index,
                        change
                    );

                }
            );

        });


    document
        .querySelectorAll(".remove-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.index
                        );

                    removeFromCart(index);

                }
            );

        });

}


/* ==================== QUANTITY ==================== */

function updateItemQuantity(
    index,
    change
) {

    if (!cart[index]) {
        return;
    }


    cart[index].quantity += change;


    if (
        cart[index].quantity <= 0
    ) {

        cart.splice(index, 1);

    }


    saveCart();

    updateCartUI();

}


/* ==================== REMOVE ==================== */

function removeFromCart(index) {

    if (
        index >= 0 &&
        index < cart.length
    ) {

        cart.splice(index, 1);

    }


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

    const checkoutBtn =
        document.getElementById(
            "checkout-btn"
        );


    if (cartIcon) {

        cartIcon.addEventListener(
            "click",
            openCart
        );

    }


    if (closeCart) {

        closeCart.addEventListener(
            "click",
            closeCartModal
        );

    }


    if (checkoutBtn) {

        checkoutBtn.addEventListener(
            "click",
            checkout
        );

    }


    const cartModal =
        document.getElementById(
            "cart-modal"
        );


    if (cartModal) {

        cartModal.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    cartModal
                ) {

                    closeCartModal();

                }

            }
        );

    }

}


function openCart() {

    const cartModal =
        document.getElementById(
            "cart-modal"
        );

    if (cartModal) {

        cartModal.style.display =
            "block";

    }

}


function closeCartModal() {

    const cartModal =
        document.getElementById(
            "cart-modal"
        );

    if (cartModal) {

        cartModal.style.display =
            "none";

    }

}


/* ==================== CHECKOUT ==================== */

function checkout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty."
        );

        return;

    }


    alert(
        "Thank you for your order! Checkout integration can be connected here."
    );

}


/* ==================== PRODUCT MODAL ==================== */

let selectedProduct = null;


function initializeProductModal() {

    const closeButton =
        document.getElementById(
            "close-product-modal"
        );

    const addButton =
        document.getElementById(
            "modal-add-to-cart"
        );

    const modal =
        document.getElementById(
            "product-modal"
        );


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeProductModal
        );

    }


    if (addButton) {

        addButton.addEventListener(
            "click",
            () => {

                if (!selectedProduct) {
                    return;
                }


                addToCart(

                    selectedProduct.id,

                    selectedProduct.name,

                    selectedProduct.price

                );


                closeProductModal();

            }
        );

    }


    if (modal) {

        modal.addEventListener(
            "click",
            event => {

                if (
                    event.target === modal
                ) {

                    closeProductModal();

                }

            }
        );

    }

}


function openProductModal(product) {

    selectedProduct =
        product;


    document.getElementById(
        "modal-product-image"
    ).src =
        product.image;


    document.getElementById(
        "modal-product-image"
    ).alt =
        product.name;


    document.getElementById(
        "modal-product-name"
    ).textContent =
        product.name;


    document.getElementById(
        "modal-product-description"
    ).textContent =
        product.description;


    document.getElementById(
        "modal-product-price"
    ).textContent =
        `$${product.price.toFixed(2)}`;


    document.getElementById(
        "product-modal"
    ).style.display =
        "block";

}


function closeProductModal() {

    document.getElementById(
        "product-modal"
    ).style.display =
        "none";


    selectedProduct =
        null;

}


/* ==================== TABS ==================== */

function initializeTabs() {

    const tabs =
        document.querySelectorAll(
            ".tab-link"
        );


    const contents =
        document.querySelectorAll(
            ".tab-content"
        );


    tabs.forEach(tab => {

        tab.addEventListener(
            "click",
            () => {

                const target =
                    tab.dataset.tab;


                tabs.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });


                contents.forEach(content => {

                    content.classList.remove(
                        "active"
                    );

                });


                tab.classList.add(
                    "active"
                );


                const targetContent =
                    document.getElementById(
                        target
                    );


                if (targetContent) {

                    targetContent.classList.add(
                        "active"
                    );

                }

            }
        );

    });

}


/* ==================== NOTIFICATION ==================== */

function showAddToCartNotification(
    productName
) {

    const notification =
        document.createElement(
            "div"
        );


    notification.className =
        "add-to-cart-notification";


    notification.textContent =
        `${productName} has been added to your cart!`;


    document.body.appendChild(
        notification
    );


    setTimeout(() => {

        notification.remove();

    }, 2500);

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


/* ==================== NEWSLETTER ==================== */

function initializeNewsletter() {

    const form =
        document.getElementById(
            "newsletter-form"
        );


    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const email =
                document.getElementById(
                    "newsletter-email"
                ).value;


            alert(
                `Thank you! ${email} has been subscribed.`
            );


            form.reset();

        }
    );

}