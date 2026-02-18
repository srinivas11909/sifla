import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://siflonpharma.com"),

  title: {
    default:
      "Siflon Drugs & Pharmaceuticals Pvt Ltd | Oxyclozanide Manufacturer",
    template: "%s | Siflon Drugs & Pharmaceuticals Pvt Ltd",
  },

  description:
    "Leading manufacturer of Oxyclozanide and animal healthcare products including feed supplements, probiotics, antibiotics and veterinary formulations.",

  keywords: [
    "oxyclozanide",
    "oxyclozanide manufacturer",
    "oxyclozanide supplier india",
    "veterinary pharmaceutical manufacturer",
    "animal healthcare manufacturer",
    "Siflon Drugs & Pharmaceuticals Pvt Ltd",
  ],

  authors: [{ name: "Siflon Drugs & Pharmaceuticals Pvt Ltd" }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Siflon Drugs & Pharmaceuticals Pvt Ltd | Oxyclozanide Manufacturer",
    description:
      "Global manufacturer and supplier of Oxyclozanide and veterinary pharmaceutical products.",
    type: "website",
    locale: "en_US",
  },

  icons: {
    icon: "/logo.svg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <ScrollToTop />
        <FloatingWhatsApp />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Siflon Drugs & Pharmaceuticals Pvt Ltd",
              url: "https://siflonpharma.com",
              description:
                "Manufacturer and supplier of Oxyclozanide and veterinary pharmaceutical products.",
              areaServed: "Worldwide",
              makesOffer: {
                "@type": "Product",
                name: "Oxyclozanide",
                description:
                  "Veterinary anthelmintic drug for liver fluke treatment in livestock.",
              },
            }),
          }}
        />

      </body>
    </html>
  );
}
