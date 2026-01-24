fetch("http://localhost:5000/api/products")
  .then(res => res.json())
  .then(data => {
    document.getElementById("coffee").innerHTML =
      data.filter(p => p.category === "coffee")
          .map(p => `<p>${p.name} - $${p.price}</p>`)
          .join("");
  });
