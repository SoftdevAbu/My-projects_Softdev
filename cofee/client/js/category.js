const productsDiv = document.getElementById("products");

// Get cart from localStorage
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// Save cart
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Add item to cart (silent)
function addToCart(product) {
  const cart = getCart();

  const existingItem = cart.find(item => item.id === product._id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product._id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
  }

  saveCart(cart);
}

// Fetch products by category
fetch(`http://localhost:5000/api/products?category=${CATEGORY}`)
  .then(res => res.json())
  .then(products => {
    if (!products.length) {
      productsDiv.innerHTML = "<p>No items found.</p>";
      return;
    }

    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "card";

      const button = document.createElement("button");
      button.textContent = "Add to Cart";
      button.onclick = () => addToCart(product);

      card.innerHTML = `
        <img src="${product.image}" />
        <h3>${product.name}</h3>
        <p>${product.description || ""}</p>
        <p class="price">$${product.price}</p>
      `;

      card.appendChild(button);
      productsDiv.appendChild(card);
    });
  })
  .catch(() => {
    productsDiv.innerHTML = "<p>Error loading products.</p>";
  });
