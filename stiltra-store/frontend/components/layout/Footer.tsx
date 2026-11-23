import Link from "next/link";

import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white">

      <Container>

        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand Information */}

          <div className="space-y-4">

            <Link
              href="/"
              className="text-2xl font-semibold tracking-[0.12em]"
            >
              {siteConfig.name}
            </Link>

            <p className="text-xs font-medium tracking-widest text-[var(--color-accent)]">
              {siteConfig.descriptor}
            </p>

            <p className="max-w-xs text-sm leading-6 text-[var(--color-secondary)]">
              {siteConfig.description}
            </p>

            <div className="flex items-center gap-4">

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-sm font-semibold"
              >
                I
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-sm font-semibold"
              >
                F
              </a>

            </div>

          </div>

          {/* Customer Care */}

          <div>

            <h3 className="mb-5 text-sm font-semibold">
              CUSTOMER CARE
            </h3>

            <ul className="space-y-4">

              {siteConfig.footerLinks.customerCare.map((item) => (

                <li key={item.label}>

                  <Link
                    href={item.href}
                    className="text-sm text-[var(--color-secondary)] hover:text-[var(--color-primary)]"
                  >
                    {item.label}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Information */}

          <div>

            <h3 className="mb-5 text-sm font-semibold">
              INFORMATION
            </h3>

            <ul className="space-y-4">

              {siteConfig.footerLinks.information.map((item) => (

                <li key={item.label}>

                  <Link
                    href={item.href}
                    className="text-sm text-[var(--color-secondary)] hover:text-[var(--color-primary)]"
                  >
                    {item.label}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Newsletter */}

          <div className="space-y-4">

            <h3 className="text-sm font-semibold">
              JOIN THE STILTRA COMMUNITY
            </h3>

            <p className="text-sm leading-6 text-[var(--color-secondary)]">
              Discover new arrivals, collections and updates.
            </p>

            <form className="space-y-3">

              <Input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                aria-label="Newsletter email address"
              />

              <Button
                type="submit"
                size="md"
                className="relative flex gap-5 w-full items-center justify-center px-6 py-5 bg-[var(--color-primary)] text-white hover:bg-[var(--color-accent)] transition-colors duration-300"
              >
                SUBSCRIBE
                <ArrowRight size={18} className="ml-2" />
              </Button>

            </form>

            <p className="text-xs text-[var(--color-secondary)]">
              Newsletter subscription will be connected in a future milestone.
            </p>

          </div>

        </div>

        {/* Bottom Footer */}

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] py-6 text-center sm:flex-row">

          <p className="text-xs text-[var(--color-secondary)]">
            © {new Date().getFullYear()} STILTRA. All rights reserved.
          </p>

          <p className="text-xs tracking-wide text-[var(--color-secondary)]">
            STYLE IN EVERY FORM.
          </p>

        </div>

      </Container>

    </footer>
  );
}