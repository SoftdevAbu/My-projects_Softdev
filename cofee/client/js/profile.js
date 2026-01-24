const token = localStorage.getItem("token");

// SAFETY CHECK (already in HTML, but fine here too)
if (!token) {
  window.location.href = "login.html";
}

// ELEMENTS
const pointsDiv = document.getElementById("points");
const ordersDiv = document.getElementById("orders");

// ================== LOAD PROFILE ==================
async function loadProfile() {
  try {
    // 👉 Since you don’t have a /me route yet,
    // we’ll just show points as static for now
    pointsDiv.innerHTML = "<h3>⭐ Loyalty Points: 0</h3>";

    // ================== LOAD ORDERS ==================
    const res = await fetch("http://localhost:5000/api/orders", {
      headers: {
        Authorization: token
      }
    });

    const orders = await res.json();

    if (!orders.length) {
      ordersDiv.innerHTML = "<p>No orders yet.</p>";
      return;
    }

    ordersDiv.innerHTML = "<h3>Your Orders</h3>";

    orders.forEach(order => {
      const div = document.createElement("div");
      div.className = "order";

      div.innerHTML = `
        <p><strong>Date:</strong> ${new Date(order.date).toLocaleString()}</p>
        <p><strong>Total:</strong> $${order.total.toFixed(2)}</p>
        <p><strong>Items:</strong></p>
        <ul>
          ${order.items.map(i => `<li>${i.name} - $${i.price}</li>`).join("")}
        </ul>
        <hr>
      `;

      ordersDiv.appendChild(div);
    });

  } catch (err) {
    console.error(err);
    ordersDiv.innerHTML = "<p>Error loading profile.</p>";
  }
}

loadProfile();
