import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";

const categories = [
  {
    title: "MEN",
    subtitle: "Everyday essentials, elevated.",
    image: "/images/men-category.png",
    href: "/men",
  },
  {
    title: "WOMEN",
    subtitle: "Express your everyday style.",
    image: "/images/women-category.png",
    href: "/women",
  },
];

export default function CategorySection() {
  return (
    <section className="bg-[#F8F7F4] py-16 sm:py-20">

      <Container>

        {/* Section Heading */}

        <div className="mb-10 text-center">

          <p className="text-xs font-medium tracking-[0.2em] text-[#8B7355]">
            FIND YOUR STYLE
          </p>

          <h2 className="mt-3 font-[var(--font-heading)] text-4xl sm:text-5xl">
            Shop by category
          </h2>

        </div>

        {/* Category Cards */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {categories.map((category) => (

            <Link
              key={category.title}
              href={category.href}
              className="group relative block h-[440px] overflow-hidden bg-[#E8E5DF] sm:h-[550px]"
            >

              <Image
                src={category.image}
                alt={`${category.title} clothing collection`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/35" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">

                <h3 className="font-[var(--font-heading)] text-5xl sm:text-6xl">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm">
                  {category.subtitle}
                </p>

                <span className="mt-7 border-b border-white pb-1 text-xs font-medium tracking-widest">
                  EXPLORE COLLECTION
                </span>

              </div>

            </Link>

          ))}

        </div>

      </Container>

    </section>
  );
}