// Sample product data
const products = [
    { id: 1, name: "Spinach", category: "leafy", price: 2.5, organic: true, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Carrot", category: "root", price: 1.0, organic: false, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Tomato", category: "fruit", price: 1.5, organic: true, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Lettuce", category: "leafy", price: 2.0, organic: true, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Potato", category: "root", price: 0.8, organic: false, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Cucumber", category: "fruit", price: 1.2, organic: true, image: "https://via.placeholder.com/150" },
];

let cart = [];

// DOM Elements
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const sortBy = document.getElementById("sortBy");
const productsGrid = document.getElementById("productsGrid");
const cartModal = document.getElementById("cartModal");
const cartItemsContainer = document.querySelector(".cart-items");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.querySelector(".cart-count");
const cartIcon = document.querySelector(".cart-icon");

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products);
    updatePriceLabel();
});

// Event Listeners
searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
priceRange.addEventListener("input", filterProducts);
sortBy.addEventListener("change", sortProducts);
cartIcon.addEventListener("click", toggleCartModal);

// Render products dynamically
function renderProducts(productList) {
    productsGrid.innerHTML = "";
    const template = document.getElementById("product-card-template");

    productList.forEach((product) => {
        const card = template.content.cloneNode(true);

        card.querySelector(".product-image img").src = product.image;
        card.querySelector(".product-name").textContent = product.name;
        card.querySelector(".product-price").textContent = `$${product.price.toFixed(2)}`;
        card.querySelector(".organic-badge").style.display = product.organic ? "block" : "none";

        const quantityInput = card.querySelector("input[type='number']");
        const addToCartBtn = card.querySelector(".add-to-cart");

        // Add to cart functionality
        addToCartBtn.addEventListener("click", () => {
            const quantity = parseInt(quantityInput.value);
            addToCart(product, quantity);
        });

        productsGrid.appendChild(card);
    });
}

// Filter products based on search, category, and price range
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const maxPrice = parseFloat(priceRange.value);

    const filtered = products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
        const matchesPrice = product.price <= maxPrice;

        return matchesSearch && matchesCategory && matchesPrice;
    });

    renderProducts(filtered);
    updatePriceLabel();
}

// Update price label for price range slider
function updatePriceLabel() {
    priceValue.textContent = `$${priceRange.value}`;
}

// Sort products based on the selected option
function sortProducts() {
    const sorted = [...products].sort((a, b) => {
        if (sortBy.value === "price-low") {
            return a.price - b.price;
        } else if (sortBy.value === "price-high") {
            return b.price - a.price;
        } else if (sortBy.value === "name") {
            return a.name.localeCompare(b.name);
        }
        return 0;
    });

    renderProducts(sorted);
}

// Add product to cart
function addToCart(product, quantity) {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    updateCartUI();
}

// Update cart UI
function updateCartUI() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <span>${item.name} (${item.quantity})</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        `;

        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Toggle cart modal
function toggleCartModal() {
    cartModal.style.display = cartModal.style.display === "block" ? "none" : "block";
}