import { PackagePlus, ShieldCheck, SmilePlus, Truck } from "lucide-react";
import React, { ReactNode } from "react";

const assuranceData = [
  {
    title: "Original Products",
    description:
      "We ensure money-back guarantee if the product is counterfeit.",
    icon: <ShieldCheck />,
  },
  {
    title: "Satisfaction Guarantee",
    description:
      "We ensure money-back guarantee if the product is counterfeit.",
    icon: <SmilePlus />,
  },
  {
    title: "New Arrival Everyday",
    description:
      "We ensure money-back guarantee if the product is counterfeit.",
    icon: <PackagePlus />,
  },
  {
    title: "Accurate Product Delivery",
    description:
      "We ensure money-back guarantee if the product is counterfeit.",
    icon: <Truck />,
  },
];

const AssuranceItem = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon?: ReactNode;
}) => (
  <div className="flex flex-col items-center text-center hover:shadow-xl cursor-pointer transition duration-700 rounded-xl p-4 bg-zinc-200 group">
    <div className="bg-red-300 rounded-full p-4 mb-4">
      <p className="group-hover:scale-125 transition duration-500 ease-in-out">
        {icon}
      </p>
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export const Assurances = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 relative inline-block">
            Word On Our Products
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {assuranceData.map((assurance, index) => (
            <AssuranceItem
              key={index}
              title={assurance.title}
              description={assurance.description}
              icon={assurance.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
