import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="bg-[#F8F7F4] py-6 sm:py-8">

      <Container>

        <div className="relative min-h-[520px] overflow-hidden bg-[#E8E5DF] sm:min-h-[620px]">

          {/* Hero Image */}

          <Image
            src="/images/hero.png"
            alt="STILTRA contemporary everyday fashion collection"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Image Overlay */}

          <div className="absolute inset-0 bg-black/30" />

          {/* Hero Content */}

          <div className="relative z-10 flex min-h-[520px] flex-col items-center justify-center px-5 text-center text-white sm:min-h-[620px]">

            <p className="mb-5 text-xs font-medium tracking-[0.3em]">
              CONTEMPORARY EVERYDAY WEAR
            </p>

            <h1 className="max-w-3xl font-[var(--font-heading)] text-5xl leading-tight sm:text-6xl lg:text-7xl">
              Style in every form.
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/90 sm:text-base">
              Discover everyday essentials designed for
              comfort, confidence and expression.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">

              {/* <Button
                variant="primary"
                size="lg"
                className="bg-white text-[#111111] hover:bg-[#E8E5DF]"
                onClick={() => {
                  window.location.href = "/men";
                }}
              >
                SHOP MEN
              </Button> */}
              <Link href="/men">
                <Button size="lg">
                    SHOP MEN
                </Button>
                </Link>

              <Link href="/women">
                <span className="inline-flex items-center border border-white px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#111111]">
                  SHOP WOMEN
                </span>
              </Link>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}