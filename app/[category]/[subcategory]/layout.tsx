import { getCategoryByName } from "@/lib/category";
import { Metadata } from "next";

type Props = {
  params: {
    category: string;
    subcategory: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, subcategory } = params;

  // Optionally fetch category/subcategory data for better SEO
  const categoryDetails = await getCategoryByName(category);

  return {
    title: `${categoryDetails?.name || category
      } - ${subcategory} | Nothing To Prove`,
    description: `Explore the latest ${subcategory} in the ${categoryDetails?.name || category
      } category. Find the best deals and latest trends at Nothing To Prove.`,
    openGraph: {
      title: `${categoryDetails?.name || category
        } - ${subcategory} | Nothing To Prove`,
      description: `Explore the latest ${subcategory} in the ${categoryDetails?.name || category
        } category. Find the best deals and latest trends at Nothing To Prove.`,

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
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="antialiased">
        {children}
      </body>
    </html>
  );
}
