// Wait for the page to load and hide the loader (if any)
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});

// Array of soap products
const soaps = [
  {
    id: 1,
    name: "Neem Herbal Soap",
    description: "Anti-bacterial & Skin Friendly",
    price: 149,
    image: "neem.jpeg"
  },
  {
    id: 2,
    name: "Honey Turmeric Glow Soap",
    description: "Brightening & Healing",
    price: 159,
    image: "honey.jpeg"
  },
  {
    id: 3,
    name: "Potato Soap",
    description: "Soothing & Hydrating",
    price: 139,
    image: "potato.jpeg"
  },
  {
    id: 4,
    name: "Readwine Soap",
    description: "Fragrant & Refreshing",
    price: 169,
    image: "redwine.jpeg"
  },
  {
    id: 5,
    name: "Charcoal Detox Soap",
    description: "Deep cleansing & Detox",
    price: 149,
    image: "charcoal.jpeg"
  }
];

// Render the soap products on the page
function renderProducts() {
  const container = document.getElementById("product-container");
  container.innerHTML = ""; // Clear the container before adding new products

  soaps.forEach((soap, index) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.style.animationDelay = `${index * 100}ms`;

    card.innerHTML = `
      <img src="${soap.image}" alt="${soap.name}" />
      <h3>${soap.name}</h3>
      <p>${soap.description}</p>
      <p><strong>₹${soap.price}</strong></p>
      <button onclick="addToCart(${soap.id})">Add to Cart</button>
      <button class="view-btn" onclick="viewDetails(${soap.id})">View More</button>
    `;

    container.appendChild(card);
  });
}

// Add soap to cart (store in localStorage)
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || []; // Get existing cart from localStorage or create a new one

  const existingItem = cart.find(item => item.id === id); // Check if the product is already in the cart
  if (existingItem) {
    existingItem.quantity += 1; // Increase quantity if already in the cart
  } else {
    const soap = soaps.find(s => s.id === id); // Find the soap by its ID
    cart.push({ id: soap.id, quantity: 1 }); // Add new soap to the cart
  }

  // Update the cart in localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`Added "${soaps.find(s => s.id === id).name}" to cart!`);
}

// Navigate to the soap details page
function viewDetails(id) {
  localStorage.setItem("selectedSoapId", id); // Store the selected soap id
  window.location.href = "details.html"; // Navigate to details page
}

// Toggle the FAQ answer visibility (Read More / Read Less)
function toggleAnswer(element) {
  const answer = element.previousElementSibling; // Get the <p> tag of the answer
  answer.classList.toggle('show'); // Toggle the "show" class

  // Change the text of the Read More / Read Less link
  if (answer.classList.contains('show')) {
    element.innerText = "Read Less";
  } else {
    element.innerText = "Read More";
  }
}

// Run the product rendering when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", renderProducts);
