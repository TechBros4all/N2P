import { Metadata } from "next";

type Props = {
  params: {
    category: string;
    subcategory?: string; // Optional to handle cases where there's no subcategory.
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, subcategory = "" } = params;

  // Combine subcategory and category to form the desired format like "Men - Clothing"
  const combinedCategory = subcategory ? `${subcategory} - ${category}` : category;

  // Limit the title length to ensure it does not exceed 60 characters.
  const title = `${combinedCategory} | Nothing To Prove`.substring(0, 60);

  // Limit the description length to ensure it does not exceed 160 characters.
  const description = `Explore the latest ${subcategory ? `${subcategory} ${category}` : category} items. Find the best deals and latest trends at Nothing To Prove.`
    .substring(0, 160);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export default function categoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
