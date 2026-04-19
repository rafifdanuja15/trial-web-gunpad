import { kontakInfo } from "@/lib/data";
import styles from "./KontakSection.module.css";

export default function KontakSection() {
  return (
    <section id="kontak" className={styles.section}>
      <div className={styles.inner}>
        {/* Left: Map placeholder + decorative */}
        <div className={styles.mapSide}>
          <div className={styles.mapFrame}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6!2d107.0563!3d-6.9944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69b6a7a2be04d5%3A0x4e46e9d2aef54d22!2sSitus%20Megalitik%20Gunung%20Padang!5e0!3m2!1sid!2sid!4v1713526800000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Gunung Padang"
            />
          </div>
          <div className={styles.mapLabel}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1a5 5 0 0 0-5 5c0 3.5 5 9 5 9s5-5.5 5-9a5 5 0 0 0-5-5zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"/>
            </svg>
            Desa Karyamukti, Kec. Campaka, Cianjur
          </div>
        </div>

        {/* Right: Contact info */}
        <div className={styles.contactSide}>
          <p className="section-label">Informasi Kontak</p>
          <h2 className={`section-title ${styles.title}`}>
            Rencanakan<br />
            <span className={styles.titleItalic}>Kunjungan Anda</span>
          </h2>
          <p className={styles.intro}>
            Tim Pokdarwis Gunung Padang siap membantu Anda merencanakan
            kunjungan wisata yang berkesan. Hubungi kami untuk informasi
            lebih lanjut, pemandu wisata, atau paket kunjungan.
          </p>

          <div className={styles.cards}>
            <div className={styles.contactCard}>
              <div className={styles.iconWrap}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm0 0l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className={styles.cardLabel}>Email</p>
                <a href={`mailto:${kontakInfo.email}`} className={styles.cardValue}>
                  {kontakInfo.email}
                </a>
              </div>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.iconWrap}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 3.5A1.5 1.5 0 0 1 4.5 2h1.879a1.5 1.5 0 0 1 1.414 1l.844 2.11a1.5 1.5 0 0 1-.343 1.618l-.972.972a.75.75 0 0 0-.152.865A9.5 9.5 0 0 0 12 13.83a.75.75 0 0 0 .866-.152l.972-.972a1.5 1.5 0 0 1 1.618-.343l2.11.844A1.5 1.5 0 0 1 18 14.62V16.5A1.5 1.5 0 0 1 16.5 18C8.492 18 2 11.508 2 3.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className={styles.cardLabel}>Telepon / WhatsApp</p>
                <a href={kontakInfo.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.cardValue}>
                  {kontakInfo.telepon}
                </a>
              </div>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.iconWrap}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="2" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="14.5" cy="5.5" r="1" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <p className={styles.cardLabel}>Instagram</p>
                <a href="https://instagram.com/wisata.gunungpadang" target="_blank" rel="noopener noreferrer" className={styles.cardValue}>
                  {kontakInfo.instagram}
                </a>
              </div>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.iconWrap}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className={styles.cardLabel}>Jam Operasional</p>
                <p className={styles.cardValue}>{kontakInfo.jamOperasional}</p>
              </div>
            </div>
          </div>

          <a
            href={kontakInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor"/>
              <path d="M10 1C5.03 1 1 5.03 1 10c0 1.587.398 3.08 1.09 4.383L1 19l4.735-1.067A9 9 0 1 0 10 1z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
            Chat via WhatsApp
          </a>
        </div>
      </div>

      <div className={styles.footer}>
        <p>© {new Date().getFullYear()} Desa Wisata Gunung Padang · Cianjur, Jawa Barat</p>
        <p>Dibuat dengan ❤️ oleh Pokdarwis Gunung Padang</p>
      </div>
    </section>
  );
}
