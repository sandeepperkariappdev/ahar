"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className={styles.eyebrow} variants={itemVariants}>
          FINE DINING · SINCE 2018
        </motion.p>

        <motion.h1 className={styles.title} variants={itemVariants}>
          AHAR
        </motion.h1>

        <motion.p className={styles.subtitle} variants={itemVariants}>
          An Exquisite Culinary Journey
        </motion.p>

        <motion.div className={styles.divider} variants={itemVariants}>
          <span className={styles.dividerLine} />
          <span className={styles.dividerSymbol}>✦</span>
          <span className={styles.dividerLine} />
        </motion.div>

        <motion.div className={styles.ctas} variants={itemVariants}>
          <Link href="/menu" className={styles.btnGold}>
            Explore Menu
          </Link>
          <Link href="/reservations" className={styles.btnOutline}>
            Reserve a Table
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

