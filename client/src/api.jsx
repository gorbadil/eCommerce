async function fetcher() {
  const res = await fetch(`https://dummyjson.com/products?limit=100`);
  const data = await res.json();
  return data;
}
async function fetcherCategories() {
  const res = await fetch("https://dummyjson.com/products/categories");
  const data = await res.json();
  return data;
}

async function fetcherProductDetail(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return data;
}

async function fetcherProductCategory(cat) {
  const res = await fetch(`https://dummyjson.com/products/category/${cat}`);
  return res.json();
}

export {
  fetcher,
  fetcherCategories,
  fetcherProductDetail,
  fetcherProductCategory,
};
