"use client";
import Link from "next/link";
import { produkList } from "@/lib/data";
import ProdukImage from "./ProdukImage";
import styles from "./page.module.css";

const shops = (produk: (typeof produkList)[0]) => [
  { name: "Tokopedia", url: produk.tokopedia, color: "#00AA5B", bgColor: "#E8F9F0", letter: "T", bg: "#00AA5B" },
  { name: "Shopee",    url: produk.shopee,    color: "#EE4D2D", bgColor: "#FEF0ED", letter: "S", bg: "#EE4D2D" },
  { name: "Blibli",   url: produk.blibli,    color: "#0095DA", bgColor: "#E6F4FC", letter: "B", bg: "#0095DA" },
];

export default function ProdukDetailClient({ produk }: { produk: (typeof produkList)[0] }) {
  const shopList = shops(produk);
  const others = produkList.filter((p) => p.id !== produk.id).slice(0, 3);

  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <Link href="/" className={styles.back}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Kembali ke Beranda
          </Link>
          <span className={styles.breadcrumb}>UMKM Gunung Padang / {produk.nama}</span>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.imgCol}>
            <ProdukImage src={produk.gambar} alt={produk.nama} nama={produk.nama} />
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Produk Asli Gunung Padang
            </div>
          </div>

          <div className={styles.infoCol}>
            <div className={styles.shopName}>{produk.namaToko}</div>
            <h1 className={styles.produkName}>{produk.nama}</h1>
            <div className={styles.harga}>{produk.harga}</div>
            <div className={styles.divider} />
            <p className={styles.desc}>{produk.deskripsiLengkap}</p>
            <div className={styles.divider} />

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
                {shopList.map((shop) => (
                  
                    key={shop.name}
                    href={shop.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.shopBtn}
                    style={{ "--shop-color": shop.color, "--shop-bg": shop.bgColor } as React.CSSProperties}
                  >
                    <div style={{ background: shop.bg, borderRadius: 8, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "white", fontWeight: 700, fontSize: 14 }}>{shop.letter}</span>
                    </div>
                    <div className={styles.shopInfo}>
                      <span className={styles.shopName2}>{shop.name}</span>
                      <span className={styles.shopSub}>Beli di sini →</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.contactPromo}>
              <div className={styles.promoIcon}>💬</div>
              <div>
                <p className={styles.promoTitle}>Butuh pemesanan dalam jumlah banyak?</p>
                <p className={styles.promoText}>Hubungi kami langsung untuk harga grosir & paket wisata.</p>
                <a href="/#kontak" className={styles.promoLink}>Hubungi Pokdarwis →</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.otherSection}>
          <div className={styles.otherHeader}>
            <p className="section-label">Produk Lainnya</p>
            <h2 className={styles.otherTitle}>Jelajahi Lebih Banyak</h2>
          </div>
          <div className={styles.otherGrid}>
            {others.map((p) => (
              <Link key={p.id} href={`/produk/${p.id}`} className={styles.otherCard}>
                <div className={styles.otherImgWrap}>
                  <ProdukImage src={p.gambar} alt={p.nama} nama={p.nama} small />
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
