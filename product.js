const products = [
  {
    name: "Smartphone",
    category: "electronics",
    price: 299,
    image: "C:\Users\mahad\OneDrive\Desktop\phone.jpeg"
  },
  {
    name: "lehenga",
    category: "clothing",
    price: 35,
    image: "C:\Users\mahad\OneDrive\Desktop\lehenga.jpeg"
  },
  {
    name: "Laptop",
    category: "electronics",
    price: 899,
    image: "C:\Users\mahad\OneDrive\Desktop\laptop.jpeg"
  },
  {
    name: "Jeans",
    category: "clothing",
    price: 45,
    image: "C:\Users\mahad\OneDrive\Desktop\jeans.jpeg"
  }
];

const productList = document.getElementById("productList");
const filter = document.getElementById("categoryFilter");
const sort = document.getElementById("sortPrice");

function displayProducts(items) {
  productList.innerHTML = "";
  items.forEach(p => {
    const div = document.createElement("div");
    div.className = "product-item";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" class="product-img"/>
      <div>
        <strong>${p.name}</strong><br>
        $${p.price} (${p.category})
      </div>
    `;
    productList.appendChild(div);
  });
}

function applyFilters() {
  let filtered = [...products];

  const selectedCategory = filter.value;
  if (selectedCategory !== "all") {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  const sortBy = sort.value;
  if (sortBy === "asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === "desc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}

filter.onchange = applyFilters;
sort.onchange = applyFilters;

displayProducts(products);