import { notFound } from "next/navigation";
import { produkList } from "@/lib/data";
import ProdukDetailClient from "./ProdukDetailClient";

export function generateStaticParams() {
  return produkList.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const produk = produkList.find((p) => p.id === params.id);
  if (!produk) return {};
  return {
    title: `${produk.nama} – Gunung Padang`,
    description: produk.deskripsiSingkat,
  };
}

export default function ProdukDetailPage({ params }: { params: { id: string } }) {
  const produk = produkList.find((p) => p.id === params.id);
  if (!produk) notFound();
  return <ProdukDetailClient produk={produk} />;
}
