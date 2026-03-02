"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import styles from "./CTABanner.module.css";

export default function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className={styles.section} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className={styles.eyebrow}>RESERVATIONS</p>
        <h2 className={styles.title}>Reserve Your Table Tonight</h2>
        <p className={styles.sub}>
          Join us for an unforgettable culinary journey. Lunch &amp; Dinner,
          Tuesday through Sunday.
        </p>
        <div className={styles.rule} />
        <div className={styles.ctas}>
          <Link href="/reservations" className={styles.btnGold}>
            Book a Table
          </Link>
          <Link href="/menu" className={styles.btnOutline}>
            View Menu
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

