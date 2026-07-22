"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

const photos = [
  { src: "/media/library-exterior-a.webp", alt: "树木掩映中的河南工程学院图书馆", className: "hero-photo hero-photo--a" },
  { src: "/media/hegong-sign.webp", alt: "河南工程学院校园标识", className: "hero-photo hero-photo--b" },
  { src: "/media/library-interior.webp", alt: "河南工程学院图书馆内部", className: "hero-photo hero-photo--c" },
];

export function HeroCollage() {
  const reduce = useReducedMotion();
  return (
    <motion.div className="hero-collage" initial={reduce ? false : "hidden"} animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
      {photos.map((photo, index) => (
        <motion.figure key={photo.src} className={photo.className} variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } } }} whileHover={reduce ? undefined : { y: -6, transition: { duration: 0.22 } }}>
          <Image src={photo.src} alt={photo.alt} fill sizes={index === 0 ? "(max-width: 768px) 75vw, 34vw" : "(max-width: 768px) 44vw, 19vw"} priority={index === 0} />
        </motion.figure>
      ))}
      <div className="collage-stamp" aria-hidden="true">河工利享<br />2026</div>
    </motion.div>
  );
}
