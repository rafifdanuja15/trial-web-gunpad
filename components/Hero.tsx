import styles from "./Hero.module.css";

export default function Hero() {
  const GITHUB_RAW = "https://raw.githubusercontent.com/rafifdanuja15/trial-web-gunpad/main";

  return (
    <section id="pesona" className={styles.hero}>
      {/* Background image */}
      <div className={styles.bgWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${GITHUB_RAW}/image/pesona_gunpad/pesona_1.jpg`}
          alt="Situs Megalitikum Gunung Padang"
          className={styles.bgImg}
        />
        <div className={styles.overlay} />
        <div className={styles.overlayGradient} />
      </div>

      {/* Decorative elements */}
      <div className={styles.decorLeft}>
        <div className={styles.decorLine} />
        <span className={styles.decorDot} />
      </div>

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Desa Wisata · Cianjur, Jawa Barat
        </div>

        <h1 className={styles.title}>
          <span className={styles.titleItalic}>Situs Megalitikum</span>
          <br />
          Gunung Padang
        </h1>

        <p className={styles.subtitle}>
          Sebuah warisan peradaban kuno yang berdiri megah di ketinggian 885 mdpl.
          Situs prasejarah terbesar di Asia Tenggara, menyimpan misteri ribuan tahun
          menanti untuk dijelajahi.
        </p>

        <div className={styles.facts}>
          <div className={styles.fact}>
            <span className={styles.factNum}>885</span>
            <span className={styles.factLabel}>mdpl</span>
          </div>
          <div className={styles.factDivider} />
          <div className={styles.fact}>
            <span className={styles.factNum}>~5.000</span>
            <span className={styles.factLabel}>Tahun SM</span>
          </div>
          <div className={styles.factDivider} />
          <div className={styles.fact}>
            <span className={styles.factNum}>#1</span>
            <span className={styles.factLabel}>Asia Tenggara</span>
          </div>
        </div>

        <div className={styles.actions}>
          <a href="#produk" className={styles.btnPrimary}>
            Jelajahi Produk Lokal
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#kontak" className={styles.btnOutline}>
            Hubungi Kami
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
