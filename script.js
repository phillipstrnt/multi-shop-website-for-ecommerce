let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function currentSlide(index) {
    // 1. Remove active state from current slide and dot selection styling
    slides[currentSlideIndex].classList.remove('active');
    dots[currentSlideIndex].classList.remove('active');
    
    // 2. Set index focus to what user selected
    currentSlideIndex = index;
    
    // 3. Add active state to target slide elements
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

// Optional: Auto-cycle through galleries every 5 seconds dynamically
setInterval(() => {
    let nextSlide = (currentSlideIndex + 1) % slides.length;
    currentSlide(nextSlide);
}, 5000);








// Grab all the category cards
const cards = document.querySelectorAll('.category-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // 1. Remove 'active' class from any card that currently has it
    cards.forEach(c => c.classList.remove('active'));
    
    // 2. Add 'active' class to the clicked card
    card.classList.add('active');
  });
});








document.addEventListener("DOMContentLoaded", function () {
    const catBtn = document.querySelector(".cat-btn");
    const catContent = document.getElementById("catContent");

    // Toggle showing categories on load/click
    // In your screen, it is already open. Set to block by default if you want it permanently open on the home page.
    catContent.style.display = "block"; 

    catBtn.addEventListener("click", function () {
        if (catContent.style.display === "block") {
            catContent.style.display = "none";
        } else {
            catContent.style.display = "block";
        }
    });
});




// toggle button styling
const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });





    // cart

    // Initial cart data array representing the items
let cartData = [
    { id: 1, name: "Product Name", price: 150, quantity: 7, image: "https://via.placeholder.com/50" },
    { id: 2, name: "Product Name", price: 150, quantity: 1, image: "https://via.placeholder.com/50" },
    { id: 3, name: "Product Name", price: 150, quantity: 1, image: "https://via.placeholder.com/50" },
    { id: 4, name: "Product Name", price: 150, quantity: 1, image: "https://via.placeholder.com/50" },
    { id: 5, name: "Product Name", price: 150, quantity: 1, image: "https://via.placeholder.com/50" }
];

const shippingFee = 10.00;

// Function to render the cart items and calculate totals
function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";

    let subtotal = 0;

    cartData.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        // Create table row for each item
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <div class="product-info">
                    <img src="${item.image}" alt="Product">
                    <span>${item.name}</span>
                </div>
            </td>
            <td>$${item.price}</td>
            <td>
                <div class="quantity-box">
                    <button onclick="updateQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                </div>
            </td>
            <td>$${itemTotal}</td>
            <td><button class="remove-btn" onclick="removeItem(${index})">&#10005;</button></td>
        `;
        cartItemsContainer.appendChild(row);
    });

    // Update Summary Section
    document.getElementById("subtotal").innerText = $${subtotal.toFixed(2)};
    
    let totalWithShipping = cartData.length > 0 ? subtotal + shippingFee : 0;
    document.getElementById("shipping").innerText = cartData.length > 0 ? $${shippingFee.toFixed(2)} : $0.00;
    document.getElementById("final-total").innerText = $${totalWithShipping.toFixed(2)};
}

// Function to change item quantity (+ or -)
function updateQuantity(index, change) {
    cartData[index].quantity += change;
    
    // Prevent quantity from dropping below 1
    if (cartData[index].quantity < 1) {
        cartData[index].quantity = 1;
    }
    
    renderCart();
}

// Function to remove an item from the cart
function removeItem(index) {
    cartData.splice(index, 1);
    renderCart();
}

// Initial render call when page loads
window.onload = renderCart;