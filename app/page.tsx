import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProdukSection from "@/components/ProdukSection";
import KontakSection from "@/components/KontakSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProdukSection />
        <KontakSection />
      </main>
    </>
  );
}
