import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function HomePage() {
  return (
    <main>

      {/* Hero Section */}

      <section className="py-24 md:py-36">

        <Container>

          <div className="max-w-3xl">

            <p className="mb-5 text-xs font-medium tracking-[0.2em] text-[var(--color-accent)]">
              CONTEMPORARY EVERYDAY WEAR
            </p>

            <h1 className="mb-6 text-5xl leading-tight md:text-7xl">
              Style in
              <br />
              every form.
            </h1>

            <p className="mb-8 max-w-lg text-base leading-7 text-[var(--color-secondary)]">
              Discover thoughtfully designed everyday
              essentials that bring comfort, confidence
              and expression to your wardrobe.
            </p>

            <div className="flex flex-wrap gap-4">

              <Link href="/men">
                <Button size="lg">
                  SHOP MEN
                </Button>
              </Link>

              <Link href="/women">
                <Button variant="outline" size="lg">
                  SHOP WOMEN
                </Button>
              </Link>

            </div>

          </div>

        </Container>

      </section>

      {/* Brand Message */}

      <section className="border-y border-[var(--color-border)] py-12">

        <Container>

          <div className="text-center">

            <p className="mb-3 text-xs tracking-[0.2em] text-[var(--color-accent)]">
              THE STILTRA COLLECTION
            </p>

            <h2 className="text-3xl md:text-4xl">
              Everyday essentials.
              <br />
              Extraordinary expression.
            </h2>

          </div>

        </Container>

      </section>

    </main>
  );
}