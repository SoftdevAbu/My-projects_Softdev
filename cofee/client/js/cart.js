const cartItemsDiv = document.getElementById("cartItems");
const totalDiv = document.getElementById("total");
const checkoutBtn = document.getElementById("checkoutBtn");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartItemsDiv.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    totalDiv.textContent = "";
    checkoutBtn.style.display = "none";
    return;
  }

  checkoutBtn.style.display = "inline-block";

  cart.forEach((item, index) => {
    total += item.price;

    const div = document.createElement("div");
    div.className = "order";
    div.innerHTML = `
      <strong>${item.name}</strong> - $${item.price}
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartItemsDiv.appendChild(div);
  });

  totalDiv.textContent = `Total: $${total.toFixed(2)}`;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// ✅ CHECKOUT LOGIC
checkoutBtn.addEventListener("click", async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "login.html";
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  try {
    const res = await fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({
        items: cart,
        total
      })
    });

    if (!res.ok) throw new Error("Order failed");

    // ✅ CLEAR CART
    localStorage.removeItem("cart");

    // ✅ REDIRECT
    window.location.href = "profile.html";
  } catch (err) {
    alert("Failed to place order");
  }
});




renderCart();
