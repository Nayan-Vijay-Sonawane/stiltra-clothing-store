import { notFound } from "next/navigation";
import { products } from "@/features/products/data/products";
<<<<<<< HEAD
import ProductDetails from "@/components/products/ProductDetails";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12 lg:py-16">
      <ProductDetails product={product} />
    </main>
  );
=======
import ProductDetails from '@/components/products/ProductDetails';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProductPage({
    params,
}: PageProps) {
    const { slug } = await params;

    const product = products.find(
        (item) => item.slug === slug
    );

    if(!product){
        notFound();
    }

    return (

        <main className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12 lg:py-16">
            <ProductDetails product={product} />
        </main>

    );
>>>>>>> febf00eea8958a1c1fec1a01c32ee9b4b58a5050
}