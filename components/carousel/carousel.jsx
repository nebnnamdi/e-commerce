"use client";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { carouselImgs } from "@/images";
import styles from "./carousel.module.css";

export default function Carousel() {
  const [curr, setCurr] = useState(0);
  const totalImgs = carouselImgs.length;

  const next = () => setCurr((curr + 1) % totalImgs);
  const prev = () => setCurr((curr - 1 + totalImgs) % totalImgs);

  useEffect(() => {
    const autoSlide = setInterval(next, 5000);
    return () => clearInterval(autoSlide);
  }, [curr]);

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselSlide}
        style={{ transform: `translateX(-${curr * 100}%)`, height: '100%' }}
      >
        {carouselImgs.map((e, idx) => (
          <img src={e.src} alt={`Slide ${idx}`} key={idx} />
        ))}
      </div>

      <div className={styles.arrows}>
        <button className={styles.btn} onClick={prev}>
          <MdKeyboardArrowLeft size={40} />
        </button>
        <button className={styles.btn} onClick={next}>
          <MdKeyboardArrowRight size={40} />
        </button>
      </div>

      <div className={styles.slideCtn}>
        <div className="flex items-center justify-center gap-2">
          {carouselImgs.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurr(idx)}
              className={`flex rounded-full bg-white w-3 h-3 border border-black cursor-pointer ${
                idx === curr ? styles.bg : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
