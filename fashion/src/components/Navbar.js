import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  const categories = ["Mens", "Womens", "Boys", "Girls", "Babies"];

  const linkStyle = {
    color: "gold",
    textDecoration: "none",
    fontWeight: "500",
  };

  return (
    <nav
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        padding: "20px 40px",
        background: "#837878",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      {/* BRAND — LEFT */}
      <div style={{ fontWeight: "bold", fontSize: "24px" }}>
        <Link to="/" style={{ ...linkStyle, fontWeight: "bold" }}>
          FashionKing
        </Link>
      </div>

      {/* CENTER NAV LINKS */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "25px",
        }}
      >
        <Link to="/" style={linkStyle}>Home</Link>

        {categories.map((cat) => (
          <Link key={cat} to={`/category/${cat}`} style={linkStyle}>
            {cat}
          </Link>
        ))}
      </div>

      {/* CART — RIGHT */}
      <div style={{ marginLeft: "auto" }}>
        <Link to="/cart" style={linkStyle}>
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
