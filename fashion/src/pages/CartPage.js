// src/pages/CartPage.js
import React from "react";

const CartPage = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "40px" }}>
      {/* Cart Title */}
      {/* <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Cart</h2> */}


      {/* Cart Image */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <img
          src="https://i.pinimg.com/736x/df/70/fc/df70fc7f957c5811ff783ad0efdd4966.jpg"
          alt="Cart"
          style={{ width: "180px" }}
        />
      </div>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
                paddingBottom: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >
              <span>
                {item.name} — <strong>${item.price}</strong>
              </span>

              {/* Rounded Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  padding: "8px 18px",
                  backgroundColor: "gold",
                  color: "#000",
                  border: "none",
                  borderRadius: "20px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total */}
          <h3 style={{ textAlign: "right", marginTop: "30px" }}>
            Total: ${total}
          </h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;
