document.addEventListener("DOMContentLoaded", () => {
    const detailsDiv = document.getElementById("details");
    const soapId = localStorage.getItem("selectedSoapId");
  
    if (!soapId) {
      detailsDiv.innerHTML = "<p>No product selected.</p>";
      return;
    }
  
    const soaps = [
      {
        id: 1,
        name: "Neem Herbal Soap",
        description: "Anti-bacterial & Skin Friendly. Great for oily skin types.",
        price: 149,
        image: "images/neem-soap.jpg"
      },
      {
        id: 2,
        name: "Turmeric Glow Soap",
        description: "Brightening & Healing with the goodness of turmeric.",
        price: 159,
        image: "images/turmeric-soap.jpg"
      },
      {
        id: 3,
        name: "Aloe Vera Soap",
        description: "Soothing & Hydrating. Perfect for sensitive skin.",
        price: 139,
        image: "images/aloe-soap.jpg"
      },
      {
        id: 4,
        name: "Sandalwood Bliss",
        description: "Luxurious, calming, and naturally fragrant.",
        price: 169,
        image: "images/sandal-soap.jpg"
      },
      {
        id: 5,
        name: "Charcoal Detox Soap",
        description: "Pulls out toxins. Leaves skin smooth & clean.",
        price: 149,
        image: "images/charcoal-soap.jpg"
      }
    ];
  
    const soap = soaps.find(s => s.id === parseInt(soapId));
    if (!soap) {
      detailsDiv.innerHTML = "<p>Soap not found.</p>";
      return;
    }
  
    detailsDiv.innerHTML = `
      <div class="product-card">
        <img src="${soap.image}" alt="${soap.name}" />
        <h3>${soap.name}</h3>
        <p>${soap.description}</p>
        <p><strong>₹${soap.price}</strong></p>
        <button onclick="addToCart(${soap.id})">Add to Cart</button>
      </div>
    `;
  });
  
  function addToCart(id) {
    alert(`Product ${id} added to cart!`);
  }
  