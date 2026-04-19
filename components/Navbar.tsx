"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandIcon}>⬡</span>
          <span className={styles.brandText}>Gunung Padang</span>
        </Link>

        <div className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          <a href="#pesona" className={styles.link}>Pesona</a>
          <a href="#produk" className={styles.link}>Produk UMKM</a>
          <a href="#kontak" className={styles.link}>Kontak</a>
          <a href="#kontak" className={styles.cta}>Kunjungi Kami</a>
        </div>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.burgerOpen : ""}></span>
          <span className={menuOpen ? styles.burgerOpen : ""}></span>
          <span className={menuOpen ? styles.burgerOpen : ""}></span>
        </button>
      </div>
    </nav>
  );
}
