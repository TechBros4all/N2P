export interface Category {
  id: number;
  name: string;
  description?: string;
  subcategories?: Subcategory[];
}

export interface Subcategory {
  id: number;
  name: string;
  categoryId: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  subcategory: string;
  imageUrl: string;
  description: string;
  sizes: string[];
  images: string[];
  reviewCount: number;
  rating: number;
  colors: string[];
}

export interface ProductsData {
  products: Product[];
  total: number;
}
