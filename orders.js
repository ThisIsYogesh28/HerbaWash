document.addEventListener("DOMContentLoaded", () => {
  const ordersContainer = document.getElementById("orders-container");

  const products = [
    {
      id: 1,
      name: "Neem Herbal Soap",
      image: "images/neem-soap.jpg",
      price: 149,
    },
    {
      id: 2,
      name: "Turmeric Glow Soap",
      image: "images/turmeric-soap.jpg",
      price: 159,
    },
    {
      id: 3,
      name: "Aloe Vera Soap",
      image: "images/aloe-soap.jpg",
      price: 139,
    },
    {
      id: 4,
      name: "Sandalwood Bliss",
      image: "images/sandal-soap.jpg",
      price: 169,
    },
    {
      id: 5,
      name: "Charcoal Detox Soap",
      image: "images/charcoal-soap.jpg",
      price: 149,
    }
  ];

  function getProductDetails(id) {
    return products.find(p => p.id === id);
  }

  const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];

  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";

    if (savedOrders.length === 0) {
      ordersContainer.innerHTML = "<p>No orders found.</p>";
      return;
    }

    savedOrders.forEach((order, index) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.style.animationDelay = `${index * 0.2}s`;

      let itemsHTML = "";
      let totalPrice = 0;

      order.items.forEach((item) => {
        const product = getProductDetails(item.id);
        const itemTotal = product.price * item.quantity;
        totalPrice += itemTotal;

        itemsHTML += `
          <div style="margin-bottom: 10px; display: flex; align-items: center;">
            <img src="${product.image}" alt="${product.name}" style="width: 60px; height: 60px; border-radius: 5px; margin-right: 10px;" />
            <div>
              <strong>${product.name}</strong><br>
              Quantity: ${item.quantity}<br>
              Price: ₹${product.price} each
            </div>
          </div>
        `;
      });

      card.innerHTML = `
        <h3>Order ID: ${order.id}</h3>
        <p><strong>Date:</strong> ${new Date(order.createdAt).toLocaleDateString()}</p>
        <p><strong>Status:</strong> <span class="badge ${order.status === "Delivered" ? "delivered" : "pending"}">${order.status}</span></p>
        <div style="margin-top: 10px;">${itemsHTML}</div>
        <p style="font-size: 1.1em; font-weight: bold; color: #2f855a;">Total: ₹${totalPrice}</p>
      `;

      ordersContainer.appendChild(card);
    });

  }, 600);
});
