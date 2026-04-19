import { notFound } from "next/navigation";
import Link from "next/link";
import { produkList } from "@/lib/data";
import styles from "./page.module.css";

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

  const shops = [
    {
      name: "Tokopedia",
      url: produk.tokopedia,
      color: "#00AA5B",
      bgColor: "#E8F9F0",
      logo: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#00AA5B"/>
          <text x="16" y="22" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif">T</text>
        </svg>
      ),
    },
    {
      name: "Shopee",
      url: produk.shopee,
      color: "#EE4D2D",
      bgColor: "#FEF0ED",
      logo: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#EE4D2D"/>
          <text x="16" y="22" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif">S</text>
        </svg>
      ),
    },
    {
      name: "Blibli",
      url: produk.blibli,
      color: "#0095DA",
      bgColor: "#E6F4FC",
      logo: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#0095DA"/>
          <text x="16" y="22" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif">B</text>
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Back nav */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <Link href="/" className={styles.back}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Kembali ke Beranda
          </Link>
          <span className={styles.breadcrumb}>
            UMKM Gunung Padang / {produk.nama}
          </span>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Product image */}
          <div className={styles.imgCol}>
            <div className={styles.imgWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={produk.gambar}
                alt={produk.nama}
                className={styles.img}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://placehold.co/800x600/4A5E3A/FAF6EE?text=" + encodeURIComponent(produk.nama);
                }}
              />
            </div>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Produk Asli Gunung Padang
            </div>
          </div>

          {/* Product info */}
          <div className={styles.infoCol}>
            <div className={styles.shopName}>{produk.namaToko}</div>
            <h1 className={styles.produkName}>{produk.nama}</h1>
            <div className={styles.harga}>{produk.harga}</div>

            <div className={styles.divider} />

            <p className={styles.desc}>{produk.deskripsiLengkap}</p>

            <div className={styles.divider} />

            {/* Buy section */}
            <div className={styles.buySection}>
              <p className={styles.buyLabel}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1h2l.5 2.5M3.5 3.5l1.5 5h7l1.5-5H3.5z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="6" cy="12" r="0.75" fill="currentColor"/>
                  <circle cx="11" cy="12" r="0.75" fill="currentColor"/>
                </svg>
                Beli Sekarang di:
              </p>

              <div className={styles.shopGrid}>
                {shops.map((shop) => (
                  <a
                    key={shop.name}
                    href={shop.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.shopBtn}
                    style={{
                      "--shop-color": shop.color,
                      "--shop-bg": shop.bgColor,
                    } as React.CSSProperties}
                  >
                    <div className={styles.shopLogo}>
                      {shop.logo}
                    </div>
                    <div className={styles.shopInfo}>
                      <span className={styles.shopName2}>{shop.name}</span>
                      <span className={styles.shopSub}>Beli di sini →</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact promo */}
            <div className={styles.contactPromo}>
              <div className={styles.promoIcon}>💬</div>
              <div>
                <p className={styles.promoTitle}>Butuh pemesanan dalam jumlah banyak?</p>
                <p className={styles.promoText}>Hubungi kami langsung untuk harga grosir & paket wisata.</p>
                <a href="#" className={styles.promoLink}>Hubungi Pokdarwis →</a>
              </div>
            </div>
          </div>
        </div>

        {/* Other products */}
        <div className={styles.otherSection}>
          <div className={styles.otherHeader}>
            <p className="section-label">Produk Lainnya</p>
            <h2 className={styles.otherTitle}>Jelajahi Lebih Banyak</h2>
          </div>
          <div className={styles.otherGrid}>
            {produkList
              .filter((p) => p.id !== produk.id)
              .slice(0, 3)
              .map((p) => (
                <Link key={p.id} href={`/produk/${p.id}`} className={styles.otherCard}>
                  <div className={styles.otherImgWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.gambar}
                      alt={p.nama}
                      className={styles.otherImg}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://placehold.co/400x300/4A5E3A/FAF6EE?text=" + encodeURIComponent(p.nama);
                      }}
                    />
                  </div>
                  <div className={styles.otherBody}>
                    <p className={styles.otherShop}>{p.namaToko}</p>
                    <p className={styles.otherName}>{p.nama}</p>
                    <p className={styles.otherPrice}>{p.harga}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>
    </>
  );
}
