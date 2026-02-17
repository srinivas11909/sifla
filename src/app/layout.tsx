import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siflon - Drugs & Pharmaceuticals Pvt Ltd | Premium Animal Healthcare",
  description: "Leading manufacturer of animal healthcare products including feed supplements, probiotics, antibiotics, and disinfectants for poultry, aqua, dairy, swine, equine, and pets.",
  keywords: ["animal healthcare", "veterinary products", "feed supplements", "probiotics", "poultry", "aqua", "dairy", "swine", "equine", "pets"],
  authors: [{ name: "Siflon Drugs & Pharmaceuticals Pvt Ltd" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Siflon - Drugs & Pharmaceuticals Pvt Ltd | Premium Animal Healthcare",
    description: "Leading manufacturer of animal healthcare products globally since 1993",
    type: "website",
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
      </body>
    </html>
  );
}
