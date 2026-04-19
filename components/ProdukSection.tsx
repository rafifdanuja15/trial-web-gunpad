"use client";
import { useState } from "react";
import Link from "next/link";
import { produkList } from "@/lib/data";
import styles from "./ProdukSection.module.css";

export default function ProdukSection() {
  const [startIndex, setStartIndex] = useState(0);
  const visible = 3;
  const total = produkList.length;

  const canPrev = startIndex > 0;
  const canNext = startIndex + visible < total;

  const prev = () => { if (canPrev) setStartIndex((i) => i - 1); };
  const next = () => { if (canNext) setStartIndex((i) => i + 1); };

  const shown = produkList.slice(startIndex, startIndex + visible);

  return (
    <section id="produk" className={styles.section}>
      {/* Decorative top border */}
      <div className={styles.topBorder} />

      <div className="container">
        <div className={styles.header}>
          <div>
            <p className="section-label">Produk Lokal</p>
            <h2 className={`section-title ${styles.title}`}>
              UMKM Desa Gunung Padang
            </h2>
            <p className={styles.desc}>
              Temukan produk-produk unggulan yang dibuat dengan tangan oleh
              masyarakat lokal — dari hasil bumi, kuliner tradisional, hingga
              kerajinan bernilai seni tinggi.
            </p>
          </div>

          <div className={styles.nav}>
            <button
              onClick={prev}
              disabled={!canPrev}
              className={`${styles.navBtn} ${!canPrev ? styles.disabled : ""}`}
              aria-label="Produk sebelumnya"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <span className={styles.counter}>
              {startIndex + 1}–{Math.min(startIndex + visible, total)}{" "}
              <span>/ {total}</span>
            </span>
            <button
              onClick={next}
              disabled={!canNext}
              className={`${styles.navBtn} ${!canNext ? styles.disabled : ""}`}
              aria-label="Produk berikutnya"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {shown.map((produk, i) => (
            <Link
              key={produk.id}
              href={`/produk/${produk.id}`}
              className={styles.card}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={styles.imgWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={produk.gambar}
                  alt={produk.nama}
                  className={styles.img}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://placehold.co/600x400/4A5E3A/FAF6EE?text=" + encodeURIComponent(produk.nama);
                  }}
                />
                <div className={styles.imgOverlay} />
                <span className={styles.cardTag}>{produk.harga}</span>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.cardShop}>{produk.namaToko}</p>
                <h3 className={styles.cardName}>{produk.nama}</h3>
                <p className={styles.cardDesc}>{produk.deskripsiSingkat}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.cardCta}>
                    Lihat Detail
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <div className={styles.shopIcons}>
                    <span title="Tokopedia">🛒</span>
                    <span title="Shopee">🧡</span>
                    <span title="Blibli">🔵</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Dots indicator */}
        <div className={styles.dots}>
          {Array.from({ length: total - visible + 1 }).map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === startIndex ? styles.dotActive : ""}`}
              onClick={() => setStartIndex(i)}
              aria-label={`Halaman ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
