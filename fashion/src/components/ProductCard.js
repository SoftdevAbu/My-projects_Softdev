import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "16px",
        width: "220px",
        textAlign: "center",
        background: "#fff",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "160px",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "12px",
        }}
      />

      <h4 style={{ margin: "8px 0" }}>{product.name}</h4>

      <p style={{ fontWeight: "bold", marginBottom: "14px" }}>
        ${product.price}
      </p>

      {/* GOLD ROUNDED BUTTON (SAME AS CART REMOVE) */}
      <button
        onClick={() => addToCart(product)}
        style={{
          background: "gold",
          color: "#000",
          border: "none",
          padding: "10px 20px",
          borderRadius: "25px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
