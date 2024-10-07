import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getCategoryByName(name: string) {
  return await prisma.category.findUnique({
    where: { name },
    include: {
      subcategories: true,
    },
  });
}

// Fetch all categories
export async function getCategories() {
  return await prisma.category.findMany({
    include: {
      subcategories: true, // If you have a relation to subcategories
    },
  });
}

// Fetch a single category by ID
export async function getCategoryById(id: number) {
  return await prisma.category.findUnique({
    where: { id },
    include: {
      subcategories: true,
    },
  });
}

// Create a new category
export async function createCategory(data: {
  name: string;
  description?: string;
}) {
  return await prisma.category.create({
    data,
  });
}

// Update an existing category
export async function updateCategory(
  id: number,
  data: { name?: string; description?: string }
) {
  return await prisma.category.update({
    where: { id },
    data,
  });
}

// Delete a category
export async function deleteCategory(id: number) {
  return await prisma.category.delete({
    where: { id },
  });
}
