const ITEMS_PER_PAGE = 9;

export async function fetchProductsByCategory(
  category: string,
  subcategory: string,
  page: number = 1
) {
  const res = await fetch(`/products.json`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  console.log(res);

  const data = await res.json();

  // If subcategory is "on-sale", skip the filtering
  let filteredProducts;
  if (subcategory === "on-sale") {
    filteredProducts = data.products;
  } else {
    // Filter products based on category and subcategory
    filteredProducts = data.products.filter(
      (product: any) =>
        product.category === category && product.subcategory === subcategory
    );
  }

  // Paginate the results
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return {
    products: paginatedProducts,
    total: filteredProducts.length,
  };
}

export async function fetchProductById(id: string) {
  const res = await fetch(`/products.json`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  const product = data.products.find((product: any) => product.id === id);

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
}
