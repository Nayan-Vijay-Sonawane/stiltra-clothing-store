import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "STILTRA | Contemporary Everyday Wear",
  description: "Discover contemporary everyday fashion with STILTRA. Style in every form.",
};

export default function RootLayout({ children }: Readonly<{children : React.ReactNode;}>) {
  return (
    <html
      lang="en">
      <body 
        className={`${cormorant.variable} ${dmSans.variable}`}
        >
          {children}
        </body>
    </html>
  );
}
