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
    description: "Anti-bacterial & Skin Friendly",
    price: 149,
    image: "neem.jpeg"
  },
  {
    id: 2,
    name: "Honey Glow Soap",
    description: "Crafted with the natural power of neem leaves, this herbal soap is a time-tested solution for acne, skin irritation, and bacterial infections. Neem is renowned in Ayurveda for its powerful antibacterial, antifungal, and anti-inflammatory properties. Each bar gently cleanses the skin while restoring its natural moisture balance, making it perfect for those with sensitive or acne-prone skin. Infused with essential oils and herbs, this soap promotes healthy skin regeneration and leaves a fresh, earthy fragrance. Daily use helps control excess oil, prevent breakouts, and soothe irritated skin, making your skin clearer, smoother, and healthier over time.",
    price: 159,
    image: "honey.jpeg"
  },
  {
    id: 3,
    name: "Orange Soap",
    description: "Enriched with raw organic honey, this luxurious soap deeply nourishes and moisturizes the skin, giving it a radiant and youthful glow. Honey is a natural humectant, which means it draws moisture into the skin and helps retain it, making it ideal for dry or dehydrated skin types. It also has natural antibacterial and antioxidant properties that help heal scars, reduce pigmentation, and calm inflamed skin. Blended with vitamin-rich oils, this soap enhances skin elasticity, improves texture, and restores natural softness. Gentle enough for daily use, the Honey Glow Soap is your perfect companion for achieving a luminous and silky-smooth complexion.",
    price: 139,
    image: "potato.jpeg"
  },
  {
    id: 4,
    name: "Redwine Soap",
    description: "Indulge your senses with our Red Wine Soap, an antioxidant-rich bar inspired by the luxurious benefits of fermented red grapes. Red wine contains resveratrol, a compound known for its anti-aging and skin-protecting qualities. This soap not only nourishes your skin but also helps reduce signs of aging, tighten pores, and improve elasticity. The natural AHAs (alpha-hydroxy acids) in red wine gently exfoliate, leaving your skin smoother and visibly more radiant. With its deep, sensual fragrance and creamy lather, this soap transforms your bath into a spa-like experience that pampers both your skin and mood.",
    price: 169,
    image: "redwine.jpeg"
  },
  {
    id: 5,
    name: "Charcoal Detox Soap",
    description: "Formulated with activated bamboo charcoal, this powerhouse detox bar pulls out impurities, toxins, and excess oil from deep within the skin. It’s especially effective for oily, acne-prone, or urban-exposed skin. Activated charcoal acts like a magnet, drawing out dirt and pollution while minimizing pores and preventing future breakouts. This soap is blended with soothing aloe vera and tea tree oil to ensure that your skin remains hydrated, fresh, and balanced after each cleanse. Ideal for both face and body, it gives you a deeply clean, refreshed feeling without stripping your skin’s natural moisture.",
    price: 149,
    image: "charcoal.jpeg"
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
  
