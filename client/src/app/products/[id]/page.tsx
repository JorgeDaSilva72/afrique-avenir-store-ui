import { products } from "@/app/db/productsDB";
import ProductInteraction from "@/components/ProductInteraction";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: { id: string };
  searchParams: { color?: string; size?: string };
}

// export const generateMetadata = async ({
//   params,
// }: {
//   params: { id: string };
// }) => {
//   // TODO:get the product from db
//   // TEMPORARY
//   return {
//     title: product.name,
//     describe: product.description,
//   };
// };

// Génération dynamique des métadonnées (SEO)
// export const generateMetadata = async ({
//   params,
// }: {
//   params: { id: string };
// }) => {
//   const product = products.find((p) => p.id === Number(params.id));

//   if (!product) {
//     return { title: "Product not found" };
//   }

//   return {
//     title: product.name,
//     description: product.description,
//   };
// };

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}) => {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) return { title: "Product not found" };

  const imageUrl = Object.values(product.images)[0]; // première image
  return {
    title: `${product.name} | AFRIQUE AVENIR STORE`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [imageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [imageUrl],
    },
  };
};

const ProductPage = ({ params, searchParams }: ProductPageProps) => {
  const { id } = params;
  const { color, size } = searchParams;
  const product = products.find((p) => p.id === Number(id));
  // if (!product) {
  //   return (
  //     <div className="text-center mt-12 text-gray-500">Product not found</div>
  //   );
  // }
  if (!product) notFound();
  const selectedSize = size || (product.sizes[0] as string);
  const selectedColor = color || (product.colors[0] as string);
  return (
    <main className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      {/* IMAGE */}
      <section className="w-full lg:w-5/12 relative aspect-[2/3]">
        <Image
          src={product.images[selectedColor]}
          alt={product.name}
          priority
          fill
          className="object-contain rounded-md"
        />
      </section>
      {/* DETAILS */}
      <article className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <h2 className="text-2xl font-semibold">{product.price.toFixed(2)} €</h2>
        <ProductInteraction
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />
        {/* CARD INFO */}
        <div className="flex items-center gap-2 mt-4">
          {["klarna.png", "cards.png", "stripe.png"].map((img) => (
            <Image
              key={img}
              src={`/${img}`}
              alt={img.split(".")[0]}
              width={50}
              height={25}
              className="rounded-md"
            />
          ))}
        </div>

        <p className="text-gray-500 text-xs">
          By clicking Pay Now, you agree to our{" "}
          <a href="/terms" className="underline hover:text-black">
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a href="/privacy" className="underline hover:text-black">
            Privacy Policy
          </a>
          . You authorize us to charge your selected payment method for the
          total amount shown. All sales are subject to our{" "}
          <a href="/refunds" className="underline hover:text-black">
            Refund Policies
          </a>
          .
        </p>
      </article>
    </main>
  );
};

export default ProductPage;
