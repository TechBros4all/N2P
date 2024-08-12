// pages/api/products.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category, subcategory, page = 1, limit = 15 } = req.query;

  // Fetch data from your database or API based on category and subcategory
  const products = getProductsFromDatabase({
    category,
    subcategory,
    page: Number(page),
    limit: Number(limit),
  });

  res.status(200).json({ products, total: products.length });
}

function getProductsFromDatabase({
  category,
  subcategory,
  page,
  limit,
}: {
  category: string;
  subcategory: string;
  page: number;
  limit: number;
}) {
  // Mock data for demonstration. Replace with actual data fetching logic.
  const totalProducts = 200; // Example total count for the specific category
  const start = (page - 1) * limit;
  const end = start + limit;

  const products = Array.from({ length: totalProducts })
    .slice(start, end)
    .map((_, i) => ({
      id: i + 1,
      name: `${category} - ${subcategory} Product ${i + 1}`,
      price: `$${(Math.random() * 100).toFixed(2)}`,
      // other product details...
    }));

  return products;
}
