// "use client";
// import {
//   Footprints,
//   Glasses,
//   Briefcase,
//   Shirt,
//   ShoppingBasket,
//   Hand,
//   Venus,
// } from "lucide-react";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";

// const categories = [
//   {
//     name: "All",
//     icon: <ShoppingBasket className="w-4 h-4" />,
//     slug: "all",
//   },
//   {
//     name: "T-shirts",
//     icon: <Shirt className="w-4 h-4" />,
//     slug: "t-shirts",
//   },
//   {
//     name: "Shoes",
//     icon: <Footprints className="w-4 h-4" />,
//     slug: "shoes",
//   },
//   {
//     name: "Accessories",
//     icon: <Glasses className="w-4 h-4" />,
//     slug: "accessories",
//   },
//   {
//     name: "Bags",
//     icon: <Briefcase className="w-4 h-4" />,
//     slug: "bags",
//   },
//   {
//     name: "Dresses",
//     icon: <Venus className="w-4 h-4" />,
//     slug: "dresses",
//   },
//   {
//     name: "Jackets",
//     icon: <Shirt className="w-4 h-4" />,
//     slug: "jackets",
//   },
//   {
//     name: "Gloves",
//     icon: <Hand className="w-4 h-4" />,
//     slug: "gloves",
//   },
// ];

// const Categories = () => {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const pathname = usePathname();

//   const selectedCategory = searchParams.get("category");

//   const handleChange = (value: string | null) => {
//     const params = new URLSearchParams(searchParams);
//     params.set("category", value || "all");
//     router.push(`${pathname}?${params.toString()}`, { scroll: false });
//   };

//   return (
//     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-lg mb-4 text-sm">
//       {categories.map((category) => (
//         <div
//           className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md ${
//             category.slug === selectedCategory ? "bg-white" : "text-gray-500"
//           }`}
//           key={category.name}
//           onClick={() => handleChange(category.slug)}
//         >
//           {category.icon}
//           {category.name}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Categories;

"use client";

import {
  Footprints,
  Glasses,
  Briefcase,
  Shirt,
  ShoppingBasket,
  Hand,
  Venus,
  CupSoda,
  HatGlasses,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";

interface Category {
  name: string;
  slug: string;
  icon: React.ReactNode;
}

const categories: Category[] = [
  { name: "All", icon: <ShoppingBasket className="w-4 h-4" />, slug: "all" },
  { name: "T-shirts", icon: <Shirt className="w-4 h-4" />, slug: "t-shirts" },
  {
    name: "Sweats",
    icon: <Shirt className="w-4 h-4" />,
    slug: "sweats",
  },
  // { name: "Shoes", icon: <Footprints className="w-4 h-4" />, slug: "shoes" },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  { name: "Bags", icon: <Briefcase className="w-4 h-4" />, slug: "bags" },
  // { name: "Dresses", icon: <Venus className="w-4 h-4" />, slug: "dresses" },
  // { name: "Jackets", icon: <Shirt className="w-4 h-4" />, slug: "jackets" },
  {
    name: "Caps",
    icon: <HatGlasses className="w-4 h-4" />, // 🆕 casquette
    slug: "caps",
  },
  {
    name: "Mugs",
    icon: <CupSoda className="w-4 h-4" />, // 🆕 mug / tasse
    slug: "mugs",
  },
  {
    name: "Craftsmanship",
    icon: <Hand className="w-4 h-4" />,
    slug: "craftsmanship",
  },
];

const Categories = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategory = searchParams.get("category") || "all";

  const handleChange = (slug: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", slug);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-lg mb-4 text-sm">
      {categories.map((category) => {
        const isActive = category.slug === selectedCategory;

        return (
          <motion.div
            key={category.slug}
            onClick={() => handleChange(category.slug)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={`flex items-center justify-center gap-2 px-2 py-1 rounded-md cursor-pointer transition-colors
              ${
                isActive
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-500 hover:bg-white/70"
              }
            `}
          >
            {category.icon}
            <span className="font-medium">{category.name}</span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Categories;
