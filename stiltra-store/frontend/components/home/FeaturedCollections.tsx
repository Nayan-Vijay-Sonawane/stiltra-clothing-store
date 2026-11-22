import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";

const collections = [
        {
            title: "Everyday Essentials",
            description: "The pieces you'll reach for every day.",
            image: "/images/home/collection-1.jpg",
            href: "/category/everyday-essentials",
        },
        {
            title: "Modern Classics",
            description: "Timeless styles. Contemporary expression.",
            image: "/images/home/collection-2.jpg",
            href: "/category/modern-classics",
        },
    ];

export default function FeaturedCollections() {
  return (
    <section className="bg-white py-16 sm:py-20">

      <Container>

        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>

            <p className="text-xs font-medium tracking-[0.2em] text-[#8B7355]">
              CURATED FOR YOU
            </p>

            <h2 className="mt-3 font-[var(--font-heading)] text-4xl sm:text-5xl">
              Featured collections
            </h2>

          </div>

          <Link
            href="/category/everyday-essentials"
            className="text-sm font-medium underline underline-offset-4"
          >
            EXPLORE ALL
          </Link>

        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {collections.map((collection) => (

            <Link
              key={collection.title}
              href={collection.href}
              className="group"
            >

              <div className="relative h-[350px] overflow-hidden bg-[#F8F7F4] sm:h-[450px]">

                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

              </div>

              <div className="mt-5">

                <h3 className="text-lg font-medium">
                  {collection.title}
                </h3>

                <p className="mt-2 text-sm text-[#6B6B6B]">
                  {collection.description}
                </p>

                <span className="mt-4 inline-block text-xs font-semibold tracking-widest underline underline-offset-4">
                  DISCOVER MORE
                </span>

              </div>

            </Link>

          ))}

        </div>

      </Container>

    </section>
  );
}