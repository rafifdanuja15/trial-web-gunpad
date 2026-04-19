import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gunung Padang – Desa Wisata Cianjur",
  description:
    "Jelajahi keindahan Situs Megalitikum Gunung Padang di Cianjur, Jawa Barat. Temukan produk UMKM lokal dan pengalaman wisata budaya yang tak terlupakan.",
  keywords: "gunung padang, wisata cianjur, situs megalitikum, jawa barat, UMKM lokal",
  openGraph: {
    title: "Gunung Padang – Desa Wisata Cianjur",
    description: "Jelajahi keindahan Situs Megalitikum Gunung Padang di Cianjur, Jawa Barat.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
