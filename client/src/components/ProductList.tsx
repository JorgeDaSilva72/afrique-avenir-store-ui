// import Categories from "./Categories";
// import ProductCard from "./ProductCard";
// import Link from "next/link";
// import Filter from "./Filter";
// import { products } from "@/app/db/productsDB";

// const ProductList = ({
//   category,
//   params,
// }: {
//   category: string;
//   params: "homepage" | "products";
// }) => {
//   return (
//     <div className="w-full">
//       <Categories />
//       {params === "products" && <Filter />}
//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//       <Link
//         href={category ? `/products/?category=${category}` : "/products"}
//         className="flex justify-end mt-4 underline text-sm text-gray-500"
//       >
//         View all products
//       </Link>
//     </div>
//   );
// };

// export default ProductList;

import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Link from "next/link";
import Filter from "./Filter";
import { products } from "@/app/db/productsDB";

const ProductList = ({
  category,
  params,
}: {
  category: string;
  params: "homepage" | "products";
}) => {
  // 🔍 Filtrage des produits selon la catégorie (si fournie)
  const filteredProducts =
    category && category.toLowerCase() !== "all"
      ? products.filter(
          (product) => product.category.toLowerCase() === category.toLowerCase()
        )
      : products;

  return (
    <div className="w-full">
      <Categories />
      {params === "products" && <Filter />}

      {/* 🛍️ Liste filtrée des produits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found for this category.
          </p>
        )}
      </div>

      {/* 🔗 Lien vers la page complète */}
      <Link
        href={
          category && category !== "all"
            ? `/products/?category=${category}`
            : "/products"
        }
        className="flex justify-end mt-4 underline text-sm text-gray-500"
      >
        View all products
      </Link>
    </div>
  );
};

export default ProductList;
