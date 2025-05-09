// Get cart data
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Dummy products list for matching
const soaps = [
 {
    id: 1,
    name: "Neem Herbal Soap",
    price: 149,
    image: "neem.jpeg"
  },
  {
    id: 2,
    name: "Honey Glow Soap",
   
    price: 159,
    image: "honey.jpeg"
  },
  {
    id: 3,
    name: "Orange Soap",
    price: 139,
    image: "potato.jpeg"
  },
  {
    id: 4,
    name: "Readwine Soap",
    price: 169,
    image: "redwine.jpeg"
  },
  {
    id: 5,
    name: "Charcoal Detox Soap",
   
    price: 149,
    image: "charcoal.jpeg"
  }
];

// Render cart items
function renderCart() {
  const cartItemsDiv = document.getElementById("cart-items");
  const totalPriceSpan = document.getElementById("total-price");

  if (!cartItemsDiv || !totalPriceSpan) return;

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    totalPriceSpan.innerText = "0";
    return;
  }

  let total = 0;

  cartItemsDiv.innerHTML = cart.map(item => {
    const product = soaps.find(p => p.id === item.id);
    if (product) {
      const itemTotal = product.price * item.quantity;
      total += itemTotal;

      return `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}" />
          <h4>${product.name}</h4>
          <p>Quantity: ${item.quantity}</p>
          <p>Price: ₹${product.price}</p>
          <p>Total: ₹${itemTotal}</p>
        </div>
      `;
    } else {
      return '';
    }
  }).join("");

  totalPriceSpan.innerText = total;
}

// Checkout logic
function setupCheckoutButton() {
  const checkoutBtn = document.getElementById("checkout-btn");
  const loader = document.getElementById("loader");

  if (checkoutBtn) {
    checkoutBtn.onclick = () => {
      loader.style.display = "block";

      setTimeout(() => {
        const orders = JSON.parse(localStorage.getItem("orders")) || [];

        const newOrder = {
          id: Date.now(),
          items: cart,
          createdAt: new Date().toISOString()
        };

        orders.push(newOrder);
        localStorage.setItem("orders", JSON.stringify(orders));

        localStorage.removeItem("cart");

        alert("Order placed successfully!");
        loader.style.display = "none";
        window.location.href = "orders.html";
      }, 2000);
    };
  }
}

// On page load
document.addEventListener("DOMContentLoaded", () => {
  renderCart();
  setupCheckoutButton();
});
