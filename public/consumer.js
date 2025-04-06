let cart = [];

// DOM Elements
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const productsGrid = document.getElementById("productsGrid");
const productCardTemplate = document.getElementById("product-card-template");

// Utility function to format price
function formatPrice(price) {
    return `₹${parseFloat(price).toFixed(2)}`;
}

// Render a single product card
function renderProductCard(product) {
    const cardClone = productCardTemplate.content.cloneNode(true);
    const img = cardClone.querySelector('img');
    const name = cardClone.querySelector('.product-name');
    const price = cardClone.querySelector('.product-price');
    const quantity = cardClone.querySelector('.product-quantity');
    const qtyInput = cardClone.querySelector('input[type="number"]');
    const plusBtn = cardClone.querySelector('.qty-btn.plus');
    const minusBtn = cardClone.querySelector('.qty-btn.minus');
    const addToCartBtn = cardClone.querySelector('.add-to-cart');

    img.src = product.imgpath;
    img.alt = product.name;
    name.textContent = product.name;
    price.textContent = `Price: ${formatPrice(product.price)}`;
    quantity.textContent = `Available: ${product.quantity} kg`;

    plusBtn.addEventListener('click', () => {
        qtyInput.value = parseInt(qtyInput.value) + 1;
    });

    minusBtn.addEventListener('click', () => {
        if (parseInt(qtyInput.value) > 1) {
            qtyInput.value = parseInt(qtyInput.value) - 1;
        }
    });

    addToCartBtn.addEventListener('click', () => {
        const item = {
            id: product.pid,
            name: product.name,
            price: product.price,
            quantity: parseInt(qtyInput.value),
        };
        cart.push(item);
        updateCartCount();
        alert(`${item.name} added to cart!`);
    });

    productsGrid.appendChild(cardClone);
}

// Fetch and render products from the backend
async function fetchAndRenderProducts(searchTerm = '', category = '') {
    try {
        let url = '';

        if (searchTerm === '' && category === '') {
            url = `http://localhost:3000/products`;
        } else if (searchTerm === '') {
            url = `http://localhost:3000/products/bycat/${category}`;
        } else {
            url = `http://localhost:3000/products/byname/${searchTerm}`;
            if (category) {
                url += `?category=${category}`;
            }
        }

        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const products = await response.json();
        productsGrid.innerHTML = '';
        products.forEach(renderProductCard);

    } catch (err) {
        console.error("Fetch error:", err);
        productsGrid.innerHTML = `<p>Error loading products. Please try again.</p>`;
    }
}

// Update the cart count display
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').textContent = count;
}

// Initial product load + event listeners
document.addEventListener("DOMContentLoaded", () => {
    fetchAndRenderProducts(); // Load all products on page load

    searchInput.addEventListener('input', () => {
        const term = searchInput.value.trim();
        const category = categoryFilter.value;
        fetchAndRenderProducts(term, category);
    });

    categoryFilter.addEventListener('change', () => {
        const category = categoryFilter.value;
        const term = ''; // Clear search when category changes
        fetchAndRenderProducts(term, category);
    });
});
