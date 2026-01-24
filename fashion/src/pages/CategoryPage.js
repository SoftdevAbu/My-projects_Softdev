// src/pages/CategoryPage.js
import React, { useState } from "react";

import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Men T-Shirt", category: "Mens", price: 25, image: "https://www.stormtech.ca/cdn/shop/products/CT-1_CARBONMELANGE.jpg?v=1736187439&width=2400" },
  { id: 2, name: "Men Pants", category: "Mens", price: 40, image: "https://cdn.shopify.com/s/files/1/0423/3576/4634/files/parachute_pants.webp" },
  { id: 3, name: "Men Shoes", category: "Mens", price: 60, image: "https://marvel-b1-cdn.bc0a.com/f00000000114841/www.florsheim.com/shop/thumbnails/14443-215_t.jpg" },
  { id: 4, name: "Men Jacket", category: "Mens", price: 80, image: "https://i.ebayimg.com/images/g/SkoAAOSwsc5dWZUe/s-l1200.jpg" },
  { id: 5, name: "Men Sweater", category: "Mens", price: 55, image: "https://cdn.shopify.com/s/files/1/0347/3225/files/Sweater2_grande.jpg?v=1545493289" },

  { id: 6, name: "Women Dress", category: "Womens", price: 45, image: "https://i5.walmartimages.com/asr/c9d6bc92-8908-45f7-8496-77fc810794dc.235ed44a1214015d8edf5c5924fa2c92.jpeg" },
  { id: 7, name: "Women Pants", category: "Womens", price: 50, image: "https://cdn11.bigcommerce.com/s-dgehp/images/stencil/1280x1280/products/9732/40836/456121902_02_halfbody__35194.1768576169.jpg?c=2" },
  { id: 8, name: "Women Shoes", category: "Womens", price: 55, image: "https://i.pinimg.com/736x/ef/b5/b9/efb5b911eb18df16b8e9ebe328f5a524.jpg" },
  { id: 9, name: "Women Jacket", category: "Womens", price: 60, image: "https://www.thejacketmakerstore.ca/cdn/shop/files/Flashback_Black_Leather_Biker_Jacket_-_Womens_Double_Rider_Motorcycle_Jacket_3_b0a57bdc-a083-4734-bedf-7c5e475d8647_2048x.jpg?v=1760635766" },
  { id: 10, name: "Women Sweater", category: "Womens", price: 60, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990" },

  { id: 11, name: "Boys T-shirt", category: "Boys", price: 45, image: "https://www.montecarlo.in/cdn/shop/files/524065004-1-30_1.jpg?v=1724749029" },
  { id: 12, name: "Boys Pants", category: "Boys", price: 30, image: "https://i5.walmartimages.com/asr/a2997aec-1e7b-4351-9d9e-d9fd3865c64f.46cc792b9da02915fa178526c410bbe7.jpeg" },
  { id: 13, name: "Boys Shoes", category: "Boys", price: 35, image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=400&q=80" },
  { id: 14, name: "Boys Jacket", category: "Boys", price: 40, image: "https://rukminim2.flixcart.com/image/368/490/xif0q/jacket/z/f/s/14-15-years-1-no-la-kid-3-shozuj-original-imahfuvhzft7gpuw.jpeg?q=90&crop=false" },
  { id: 15, name: "Boys Sweater", category: "Boys", price: 30, image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633" },

  { id: 16, name: "Girls T-shirt", category: "Girls", price: 40, image: "https://storefeederimages.blob.core.windows.net/metzuyanltd/Products/0be6512e-2394-4ced-af64-0759bebefbfe/Full/vccaurv3roi.jpg" },
  { id: 17, name: "Girls Dress", category: "Girls", price: 55, image: "https://i.pinimg.com/236x/4e/bd/90/4ebd90baf5fa68926624e4791eb251ad.jpg" },
  { id: 18, name: "Girls Shoes", category: "Girls", price: 40, image: "https://www.cartersoshkosh.ca/dw/image/v2/BDPK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwd85351f4/productimages/CF25P07H_3.jpg?sw=354&sh=444" },
  { id: 19, name: "Girls Jacket", category: "Girls", price: 90, image: "https://i5.walmartimages.com/asr/750d6a12-3fe4-4342-a937-b3991b3261b9.d5b542ac647743b7c3a511c3bc4bcf12.jpeg" },
  { id: 20, name: "Girls Sweater", category: "Girls", price: 35, image: "https://www1.assets-gap.com/webcontent/0060/895/090/cn60895090.jpg?q=h&w=480" },

  { id: 21, name: "Baby Shoes", category: "Babies", price: 25, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwWL3ifovBIjbQyeiemga61sNW4DWFuE-gSQ&s" },
  { id: 22, name: "Baby Pants", category: "Babies", price: 20, image: "https://ticotibaby.ca/cdn/shop/files/600x600-pantalon-bebe-marine.png?v=1727545916&width=1445" },
  { id: 23, name: "Baby Sweater", category: "Babies", price: 35, image: "https://i.etsystatic.com/21929871/r/il/6f5132/2805023791/il_570xN.2805023791_d6b7.jpg" },
];

const FILTERS = ["T-Shirt", "Pants", "Shoes", "Jacket", "Sweater", "Dress"];

const CategoryPage = ({ addToCart }) => {
  const { name } = useParams();
  const [selectedFilters, setSelectedFilters] = useState([]);

  // Toggle checkbox
  const toggleFilter = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  // Filter logic
  const filteredProducts = products.filter((product) => {
    const matchesCategory = product.category === name;
    const matchesFilter =
      selectedFilters.length === 0 ||
      selectedFilters.some((f) => product.name.includes(f));

    return matchesCategory && matchesFilter;
  });

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ marginBottom: "20px" }}>{name}</h2>

      {/* FILTER SECTION */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "30px",
          flexWrap: "wrap",
          background: "#f5f5f5",
          padding: "15px",
          borderRadius: "10px",
        }}
      >
        {FILTERS.map((filter) => (
          <label key={filter} style={{ cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={selectedFilters.includes(filter)}
              onChange={() => toggleFilter(filter)}
              style={{ marginRight: "8px" }}
            />
            {filter}
          </label>
        ))}
      </div>

      {/* PRODUCTS */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} addToCart={addToCart} />
          ))
        ) : (
          <p>No products match your filters.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;