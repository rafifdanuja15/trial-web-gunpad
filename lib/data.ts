// lib/data.ts
export const GITHUB_RAW = "https://raw.githubusercontent.com/rafifdanuja15/trial-web-gunpad/main";

export interface Produk {
  id: string;
  nama: string;
  namaToko: string;
  deskripsiSingkat: string;
  deskripsiLengkap: string;
  harga: string;
  gambar: string;
  tokopedia: string;
  shopee: string;
  blibli: string;
}

export const produkList: Produk[] = [
  {
    id: "umkm-1",
    nama: "Kopi Gunung Padang",
    namaToko: "Warung Kopi Pak Asep",
    deskripsiSingkat: "Kopi arabika pilihan dari lereng Gunung Padang, dipetik langsung oleh petani lokal.",
    deskripsiLengkap:
      "Kopi Gunung Padang adalah hasil bumi unggulan dari Desa Wisata Gunung Padang, Cianjur, Jawa Barat. Ditanam di ketinggian 1.000–1.500 mdpl dengan udara sejuk dan tanah vulkanik yang subur, kopi ini menghasilkan cita rasa yang unik — sedikit fruity, body sedang, dan aroma yang harum. Proses panen dilakukan secara selektif oleh petani lokal, kemudian diproses dengan metode natural untuk menjaga kualitas terbaik. Cocok diseduh dengan metode pour-over, french press, atau moka pot.",
    harga: "Rp 45.000 / 100gr",
    gambar: `${GITHUB_RAW}/image/produk/umkm 1_1.jpeg`,
    tokopedia: "https://tokopedia.com",
    shopee: "https://shopee.co.id",
    blibli: "https://blibli.com",
  },
  {
    id: "umkm-2",
    nama: "Dodol Gunung Padang",
    namaToko: "Dapur Bu Sari",
    deskripsiSingkat: "Dodol tradisional Cianjur berbahan gula merah asli dan santan segar dari kelapa lokal.",
    deskripsiLengkap:
      "Dodol Gunung Padang adalah oleh-oleh khas yang telah dibuat secara turun-temurun oleh warga Desa Gunung Padang. Menggunakan gula aren pilihan dan santan kelapa segar tanpa bahan pengawet, dodol ini memiliki tekstur lembut, kenyal, dan rasa manis yang autentik. Tersedia dalam dua varian: original dan pandan. Dikemas dalam bungkus daun pisang kering yang ramah lingkungan, menjadikannya pilihan oleh-oleh yang berkesan dan kaya nilai budaya lokal.",
    harga: "Rp 25.000 / 250gr",
    gambar: `${GITHUB_RAW}/image/produk/umkm 1_2.jpeg`,
    tokopedia: "https://tokopedia.com",
    shopee: "https://shopee.co.id",
    blibli: "https://blibli.com",
  },
  {
    id: "umkm-3",
    nama: "Keripik Singkong Padang",
    namaToko: "Snack Nusantara Cianjur",
    deskripsiSingkat: "Keripik singkong renyah dengan bumbu rempah khas Cianjur, digoreng dengan minyak kelapa.",
    deskripsiLengkap:
      "Keripik Singkong Padang dibuat dari singkong segar yang ditanam di ladang-ladang sekitar Gunung Padang. Diiris tipis dan digoreng menggunakan minyak kelapa murni, keripik ini menghasilkan tekstur renyah yang tahan lama. Bumbu rempahnya menggunakan campuran bawang putih, ketumbar, dan sedikit cabai kering — semuanya bahan lokal yang dipilih dengan cermat. Tersedia dalam rasa original, pedas, dan keju.",
    harga: "Rp 18.000 / 150gr",
    gambar: `${GITHUB_RAW}/image/produk/umkm 1_1.jpeg`,
    tokopedia: "https://tokopedia.com",
    shopee: "https://shopee.co.id",
    blibli: "https://blibli.com",
  },
  {
    id: "umkm-4",
    nama: "Madu Hutan Cianjur",
    namaToko: "Lebah Gunung Mas",
    deskripsiSingkat: "Madu hutan murni yang dipanen dari sarang lebah liar di kawasan hutan Gunung Padang.",
    deskripsiLengkap:
      "Madu Hutan Cianjur adalah madu murni tanpa campuran yang dipanen secara berkelanjutan dari koloni lebah liar yang hidup di kawasan hutan sekitar Gunung Padang. Proses pemanenan dilakukan secara tradisional dan bertanggung jawab, menjaga keseimbangan ekosistem hutan. Madu ini kaya akan enzim, antioksidan, dan mineral alami. Warnanya cokelat keemasan dengan rasa yang sedikit asam dan aroma bunga hutan yang khas. Tersertifikasi bebas pestisida.",
    harga: "Rp 85.000 / 250ml",
    gambar: `${GITHUB_RAW}/image/produk/umkm 1_2.jpeg`,
    tokopedia: "https://tokopedia.com",
    shopee: "https://shopee.co.id",
    blibli: "https://blibli.com",
  },
  {
    id: "umkm-5",
    nama: "Batik Motif Megalit",
    namaToko: "Sanggar Batik Padang Jaya",
    deskripsiSingkat: "Batik tulis eksklusif bermotif batu megalitikum situs Gunung Padang, dibuat pengrajin lokal.",
    deskripsiLengkap:
      "Batik Motif Megalit adalah karya seni tekstil yang terinspirasi dari keagungan Situs Megalitikum Gunung Padang — situs prasejarah terbesar di Asia Tenggara. Setiap lembar kain dikerjakan tangan oleh pengrajin batik lokal menggunakan teknik tulis tradisional dengan malam (lilin batik) dan pewarna alami dari tumbuhan sekitar. Motif utamanya menggambarkan susunan batu-batu megalit yang ikonik, dipadukan dengan pola flora khas Cianjur. Cocok dijadikan bahan pakaian, aksesori, atau dekorasi interior.",
    harga: "Rp 250.000 / lembar",
    gambar: `${GITHUB_RAW}/image/produk/umkm 1_1.jpeg`,
    tokopedia: "https://tokopedia.com",
    shopee: "https://shopee.co.id",
    blibli: "https://blibli.com",
  },
];

export const kontakInfo = {
  namaKontak: "Pak Hendra Gunawan",
  jabatan: "Ketua Pokdarwis Gunung Padang",
  telepon: "+62 812-3456-7890",
  whatsapp: "https://wa.me/6281234567890",
  email: "wisata.gunungpadang@gmail.com",
  instagram: "@wisata.gunungpadang",
  alamat: "Desa Karyamukti, Kec. Campaka, Kab. Cianjur, Jawa Barat 43261",
  jamOperasional: "Senin – Minggu, 07.00 – 17.00 WIB",
};
