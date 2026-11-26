import Link from "next/link";

export default function BrandCTA() {
  return (
    <section className="bg-[#E8E5DF] px-5 py-20 text-center sm:py-28">

      <p className="text-xs font-medium tracking-[0.2em] text-[#8B7355]">
        STILTRA — CONTEMPORARY EVERYDAY WEAR
      </p>

      <h2 className="mx-auto mt-5 max-w-2xl font-[var(--font-heading)] text-4xl leading-tight sm:text-5xl">
        Wear what moves you.
      </h2>

      <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#6B6B6B]">
        Discover thoughtfully selected styles made for
        your everyday moments.
      </p>

      <Link
        href="/men"
        className="mt-8 inline-flex px-9 py-4 text-xs font-semibold tracking-widest bg-[#111111] text-[var(--color-white)] transition-colors hover:bg-[#333333]"
        
      >
        EXPLORE STILTRA
      </Link>

    </section>
  );
}