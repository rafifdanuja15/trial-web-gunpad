"use client";
import { useState } from "react";
import styles from "./ProdukImage.module.css";

interface Props {
  src: string;
  alt: string;
  nama: string;
  small?: boolean;
}

export default function ProdukImage({ src, alt, nama, small }: Props) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div className={small ? styles.wrapSmall : styles.wrap}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imgSrc}
        alt={alt}
        className={small ? styles.imgSmall : styles.img}
        onError={() =>
          setImgSrc(
            "https://placehold.co/800x600/4A5E3A/FAF6EE?text=" +
              encodeURIComponent(nama)
          )
        }
      />
    </div>
  );
}
